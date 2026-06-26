import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const regions = await prisma.region.findMany({
      include: {
        _count: {
          select: { destinations: true }
        }
      },
      orderBy: { name: 'asc' },
    });
    
    // Format response with destination counts
    const formatted = regions.map(r => ({
      ...r,
      destinations: r._count.destinations
    }));
    
    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Error fetching regions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch regions' },
      { status: 500 }
    );
  }
}
