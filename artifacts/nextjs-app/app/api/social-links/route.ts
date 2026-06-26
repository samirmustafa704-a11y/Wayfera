import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const links = await prisma.socialLink.findMany({
      orderBy: { name: 'asc' },
    });
    return NextResponse.json(links);
  } catch (error) {
    console.error('Error fetching social links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social links' },
      { status: 500 }
    );
  }
}
