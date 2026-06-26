import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const plans = await prisma.pricingPlan.findMany({
      orderBy: [{ popular: 'desc' }, { price: 'asc' }],
    });
    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pricing plans' },
      { status: 500 }
    );
  }
}
