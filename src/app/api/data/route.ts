import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir, unlink } from 'fs/promises';
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

// Ensure directories exist
async function ensureDirectories() {
    const dataDir = path.dirname(DATA_FILE);
    
    try {
        if (!existsSync(dataDir)) {
            await mkdir(dataDir, { recursive: true });
        }
        if (!existsSync(UPLOADS_DIR)) {
            await mkdir(UPLOADS_DIR, { recursive: true });
        }
        if (!existsSync(DATA_FILE)) {
            await writeFile(DATA_FILE, JSON.stringify([]));
        }
    } catch (error) {
        console.error('Error creating directories:', error);
    }
}

// Helper functions
async function readData(): Promise<SavedDataItem[]> {
    try {
        await ensureDirectories();
        const data = await readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
}

async function writeData(data: SavedDataItem[]): Promise<void> {
    try {
        await ensureDirectories();
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

// GET - Fetch all data
export async function GET() {
    try {
        const data = await readData();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { message: 'Error fetching data' },
            { status: 500 }
        );
    }
}

// POST - Create new data entry
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        
        const title = formData.get('title') as string;
        const subtitle = formData.get('subtitle') as string;
        const paragraph = formData.get('paragraph') as string;
        const image = formData.get('image') as File | null;

        // Validate required fields
        if (!title || !subtitle || !paragraph) {
            return NextResponse.json(
                { message: 'Title, subtitle, and paragraph are required' },
                { status: 400 }
            );
        }

        // Handle image upload
        let imagePath = null;
        let imagePreview = null;
        let fileName = null;
        let fileSize = null;

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

            const savedFile = await saveFile(image);
            imagePath = savedFile.path;
            imagePreview = imagePath; // In Next.js, public files are served directly
            fileName = image.name;
            fileSize = image.size;
        }

        // Read existing data
        const existingData = await readData();

        // Create new entry
        const newEntry: SavedDataItem = {
            id: Date.now(),
            title,
            subtitle,
            paragraph,
            imagePath,
            imagePreview,
            createdAt: new Date().toISOString(),
            fileName,
            fileSize
        };

        // Add to existing data
        existingData.push(newEntry);

        // Save updated data
        await writeData(existingData);

        return NextResponse.json(newEntry, { status: 201 });
    } catch (error) {
        console.error('Error creating data:', error);
        return NextResponse.json(
            { message: 'Error saving data' },
            { status: 500 }
        );
    }
}