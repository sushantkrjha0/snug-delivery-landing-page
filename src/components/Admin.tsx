"use client"
import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';

interface FormData {
    title: string;
    subtitle: string;
    paragraph: string;
    image: File | null;
    imagePreview: string | null;
}

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

// Configure your API URL for Next.js
const API_BASE_URL = '/api';

const Admin: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        subtitle: '',
        paragraph: '',
        image: null,
        imagePreview: null
    });
    
    const [uploading, setUploading] = useState<boolean>(false);
    const [savedData, setSavedData] = useState<SavedDataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch saved data from backend on component mount
    useEffect(() => {
        fetchSavedData();
    }, []);

    const fetchSavedData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/data`);
            if (response.ok) {
                const data = await response.json();
                setSavedData(data);
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should be less than 5MB');
                return;
            }

            setFormData(prev => ({
                ...prev,
                image: file
            }));

            // Create preview
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    setFormData(prev => ({
                        ...prev,
                        imagePreview: e.target!.result as string
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUploading(true);

        try {
            // Validate required fields
            if (!formData.title || !formData.subtitle || !formData.paragraph) {
                alert('Please fill in all required fields');
                setUploading(false);
                return;
            }

            // Create FormData for multipart upload
            const submitData = new FormData();
            submitData.append('title', formData.title);
            submitData.append('subtitle', formData.subtitle);
            submitData.append('paragraph', formData.paragraph);
            
            if (formData.image) {
                submitData.append('image', formData.image);
            }

            // Send to backend
            const response = await fetch(`${API_BASE_URL}/data`, {
                method: 'POST',
                body: submitData,
            });

            if (response.ok) {
                const savedItem = await response.json();
                
                // Update local state with new item
                setSavedData(prev => [...prev, savedItem]);

                // Reset the form
                setFormData({
                    title: '',
                    subtitle: '',
                    paragraph: '',
                    image: null,
                    imagePreview: null
                });

                // Reset file input
                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                if (fileInput) fileInput.value = '';

                alert('Data saved successfully!');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save data');
            }

        } catch (error) {
            console.error('Error saving data:', error);
            alert(`Error saving data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this item?')) {
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/data/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSavedData(prev => prev.filter(item => item.id !== id));
                alert('Item deleted successfully!');
            } else {
                throw new Error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Error deleting item');
        }
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-100 p-4'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-1/3'>
                <h2 className='text-xl font-bold mb-6 text-center text-gray-800'>
                    Admin Dashboard (Sustainable Page)
                </h2>
                
                <div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Title *
                        </label>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                            placeholder='Enter title'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Subtitle *
                        </label>
                        <input
                            type='text'
                            name='subtitle'
                            value={formData.subtitle}
                            onChange={handleInputChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                            placeholder='Enter subtitle'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Upload Image
                        </label>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileSelect}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                        />
                        {formData.imagePreview && (
                            <div className='mt-2'>
                                <img 
                                    src={formData.imagePreview} 
                                    alt='Preview' 
                                    className='w-full h-32 object-cover rounded-md border'
                                />
                                <p className='text-xs text-gray-500 mt-1'>
                                    {formData.image?.name} ({((formData.image?.size ?? 0) / 1024 / 1024).toFixed(2)} MB)
                                </p>
                            </div>
                        )}
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Paragraph *
                        </label>
                        <textarea
                            name='paragraph'
                            value={formData.paragraph}
                            onChange={handleInputChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                            placeholder='Enter paragraph'
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={uploading}
                        className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors'
                    >
                        {uploading ? 'Saving...' : 'Submit'}
                    </button>
                </div>

                {/* Display saved data */}
                {loading ? (
                    <div className='mt-8 p-4 bg-gray-50 rounded-md text-center'>
                        <p>Loading saved data...</p>
                    </div>
                ) : savedData.length > 0 ? (
                    <div className='mt-8 p-4 bg-gray-50 rounded-md'>
                        <h3 className='text-lg font-semibold mb-3 text-gray-800'>Saved Data:</h3>
                        <div className='space-y-3'>
                            {savedData.map((item) => (
                                <div key={item.id} className='p-3 bg-white rounded border text-sm'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <div className='flex-1 text-md'>
                                            <p className='mb-1'> <span className='font-semibold text-md'>Title: </span>{item.title}</p>
                                            <p className='mb-1'> <span className='font-semibold text-md'>Subtitle: </span>{item.subtitle}</p>
                                            <p className='mb-1'> <span className='font-semibold text-md'>Paragraph: </span>{item.paragraph.substring(0, 100)}...</p>
                                            {item.imagePath && (
                                                <p className='mb-1'> <span className='font-semibold text-md'>Image: </span>{item.fileName}</p>
                                            )}
                                            <p className='text-gray-500 text-xs'>
                                                Saved: {new Date(item.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className='ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600'
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='mt-8 p-4 bg-gray-50 rounded-md text-center'>
                        <p className='text-gray-500'>No saved data found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;