import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      where: { featured: true },
      take: 3,
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(destinations);
  } catch (error) {
    console.error('Error fetching featured destinations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured destinations' },
      { status: 500 }
    );
  }
}
