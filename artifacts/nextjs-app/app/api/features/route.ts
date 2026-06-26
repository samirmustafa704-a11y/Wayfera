import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const features = await prisma.feature.findMany({
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(features);
  } catch (error) {
    console.error('Error fetching features:', error);
    return NextResponse.json(
      { error: 'Failed to fetch features' },
      { status: 500 }
    );
  }
}
