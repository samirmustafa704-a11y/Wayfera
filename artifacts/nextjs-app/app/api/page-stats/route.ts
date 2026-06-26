import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageType = searchParams.get('pageType') || 'home';

    const stats = await prisma.pageStat.findMany({
      where: { pageType },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching page stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch page stats' },
      { status: 500 }
    );
  }
}
