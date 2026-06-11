import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    try {
        const files = fs.readdirSync(galleryDir);
        const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
        return NextResponse.json({ images });
    } catch (error) {
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
