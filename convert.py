#!/usr/bin/env python3
"""
Image to JPEG Converter
Converts PNG, BMP, TIFF, WEBP, and other image formats to JPEG
"""

import os
import sys
from PIL import Image
import argparse

# Supported input formats
SUPPORTED_FORMATS = {'.png', '.bmp', '.tiff', '.tif', '.webp', '.gif', '.ico'}

def convert_to_jpeg(input_path, output_path=None, quality=90):
    """
    Convert an image file to JPEG format
    
    Args:
        input_path: Path to input image
        output_path: Path for output JPEG (optional)
        quality: JPEG quality (1-100, default 90)
    """
    try:
        # Open and convert image
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (for PNG with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Set output path if not provided
            if output_path is None:
                base_name = os.path.splitext(input_path)[0]
                output_path = f"{base_name}.jpg"
            
            # Save as JPEG
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            print(f"✓ Converted: {input_path} → {output_path}")
            return True
            
    except Exception as e:
        print(f"✗ Error converting {input_path}: {str(e)}")
        return False

def convert_directory(directory, recursive=False, quality=90, keep_original=True):
    """
    Convert all supported images in a directory
    
    Args:
        directory: Directory path
        recursive: Search subdirectories
        quality: JPEG quality
        keep_original: Keep original files
    """
    converted_count = 0
    error_count = 0
    
    if recursive:
        for root, dirs, files in os.walk(directory):
            for file in files:
                file_path = os.path.join(root, file)
                if os.path.splitext(file)[1].lower() in SUPPORTED_FORMATS:
                    if convert_to_jpeg(file_path, quality=quality):
                        converted_count += 1
                        if not keep_original:
                            os.remove(file_path)
                    else:
                        error_count += 1
    else:
        for file in os.listdir(directory):
            file_path = os.path.join(directory, file)
            if os.path.isfile(file_path) and os.path.splitext(file)[1].lower() in SUPPORTED_FORMATS:
                if convert_to_jpeg(file_path, quality=quality):
                    converted_count += 1
                    if not keep_original:
                        os.remove(file_path)
                else:
                    error_count += 1
    
    return converted_count, error_count

def main():
    parser = argparse.ArgumentParser(description='Convert images to JPEG format')
    parser.add_argument('path', help='File or directory path')
    parser.add_argument('-q', '--quality', type=int, default=90, 
                       help='JPEG quality (1-100, default: 90)')
    parser.add_argument('-r', '--recursive', action='store_true',
                       help='Process subdirectories recursively')
    parser.add_argument('--remove-original', action='store_true',
                       help='Remove original files after conversion')
    parser.add_argument('-o', '--output', help='Output path (for single file)')
    
    args = parser.parse_args()
    
    # Validate quality
    if not 1 <= args.quality <= 100:
        print("Error: Quality must be between 1 and 100")
        sys.exit(1)
    
    # Check if path exists
    if not os.path.exists(args.path):
        print(f"Error: Path '{args.path}' does not exist")
        sys.exit(1)
    
    print(f"Image to JPEG Converter")
    print(f"Quality: {args.quality}")
    print(f"Supported formats: {', '.join(sorted(SUPPORTED_FORMATS))}")
    print("-" * 50)
    
    if os.path.isfile(args.path):
        # Convert single file
        ext = os.path.splitext(args.path)[1].lower()
        if ext not in SUPPORTED_FORMATS:
            print(f"Error: Unsupported format '{ext}'")
            sys.exit(1)
        
        success = convert_to_jpeg(args.path, args.output, args.quality)
        if success and args.remove_original:
            os.remove(args.path)
            print(f"✓ Removed original: {args.path}")
        
    elif os.path.isdir(args.path):
        # Convert directory
        converted, errors = convert_directory(
            args.path, 
            args.recursive, 
            args.quality, 
            not args.remove_original
        )
        
        print("-" * 50)
        print(f"Conversion complete!")
        print(f"✓ Converted: {converted} files")
        if errors > 0:
            print(f"✗ Errors: {errors} files")
    
    else:
        print(f"Error: '{args.path}' is neither a file nor directory")
        sys.exit(1)

if __name__ == "__main__":
    main()