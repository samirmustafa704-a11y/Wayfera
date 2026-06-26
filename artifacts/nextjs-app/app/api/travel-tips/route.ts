import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tips = await prisma.travelTip.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(tips);
  } catch (error) {
    console.error('Error fetching travel tips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch travel tips' },
      { status: 500 }
    );
  }
}
