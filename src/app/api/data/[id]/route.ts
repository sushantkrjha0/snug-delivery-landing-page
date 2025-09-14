import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface SavedDataItem {
    id: number;
    title: string;
    subtitle: string;
    paragraph: string;
    imagePath: string | null;
    imagePreview: string | null;
    createdAt: string;
    fileName: string | null;
    fileSize: number | null;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'admin-data.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads', 'images');

// Helper functions
async function readData(): Promise<SavedDataItem[]> {
    try {
        if (!existsSync(DATA_FILE)) {
            return [];
        }
        const data = await readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
}

async function writeData(data: SavedDataItem[]): Promise<void> {
    try {
        await writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
        throw error;
    }
}

async function saveFile(file: File): Promise<{ filename: string; path: string }> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.name);
    const filename = uniqueSuffix + fileExtension;
    const filepath = path.join(UPLOADS_DIR, filename);
    
    await writeFile(filepath, buffer);
    
    return {
        filename,
        path: `/uploads/images/${filename}`
    };
}

// GET - Fetch specific data entry
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const data = await readData();
        const item = data.find(item => item.id === id);

        if (!item) {
            return NextResponse.json(
                { message: 'Data not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(item);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { message: 'Error fetching data' },
            { status: 500 }
        );
    }
}

// PUT - Update specific data entry
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const formData = await request.formData();
        
        const title = formData.get('title') as string;
        const subtitle = formData.get('subtitle') as string;
        const paragraph = formData.get('paragraph') as string;
        const image = formData.get('image') as File | null;

        const data = await readData();
        const itemIndex = data.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return NextResponse.json(
                { message: 'Data not found' },
                { status: 404 }
            );
        }

        // Update the item
        const existingItem = data[itemIndex];
        const updatedItem: SavedDataItem = {
            ...existingItem,
            title: title || existingItem.title,
            subtitle: subtitle || existingItem.subtitle,
            paragraph: paragraph || existingItem.paragraph,
        };

        // Handle image update
        if (image && image.size > 0) {
            // Validate file type
            if (!image.type.startsWith('image/')) {
                return NextResponse.json(
                    { message: 'Only image files are allowed' },
                    { status: 400 }
                );
            }

            // Validate file size (5MB limit)
            if (image.size > 5 * 1024 * 1024) {
                return NextResponse.json(
                    { message: 'File size should be less than 5MB' },
                    { status: 400 }
                );
            }

            // Delete old image if it exists
            if (existingItem.imagePath) {
                const oldImagePath = path.join(process.cwd(), 'public', existingItem.imagePath);
                try {
                    if (existsSync(oldImagePath)) {
                        await unlink(oldImagePath);
                    }
                } catch (error) {
                    console.log('Old image not found or already deleted');
                }
            }

            const savedFile = await saveFile(image);
            updatedItem.imagePath = savedFile.path;
            updatedItem.imagePreview = savedFile.path;
            updatedItem.fileName = image.name;
            updatedItem.fileSize = image.size;
        }

        data[itemIndex] = updatedItem;
        await writeData(data);

        return NextResponse.json(updatedItem);
    } catch (error) {
        console.error('Error updating data:', error);
        return NextResponse.json(
            { message: 'Error updating data' },
            { status: 500 }
        );
    }
}

// DELETE - Delete specific data entry
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const data = await readData();
        const itemIndex = data.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return NextResponse.json(
                { message: 'Data not found' },
                { status: 404 }
            );
        }

        const itemToDelete = data[itemIndex];

        // Delete associated image file if it exists
        if (itemToDelete.imagePath) {
            const imagePath = path.join(process.cwd(), 'public', itemToDelete.imagePath);
            try {
                if (existsSync(imagePath)) {
                    await unlink(imagePath);
                }
            } catch (error) {
                console.log('Image file not found or already deleted');
            }
        }

        // Remove item from data
        data.splice(itemIndex, 1);
        await writeData(data);

        return NextResponse.json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        return NextResponse.json(
            { message: 'Error deleting data' },
            { status: 500 }
        );
    }
}