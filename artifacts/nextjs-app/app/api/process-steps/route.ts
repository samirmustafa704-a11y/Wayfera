import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const steps = await prisma.processStep.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(steps);
  } catch (error) {
    console.error('Error fetching process steps:', error);
    return NextResponse.json(
      { error: 'Failed to fetch process steps' },
      { status: 500 }
    );
  }
}
