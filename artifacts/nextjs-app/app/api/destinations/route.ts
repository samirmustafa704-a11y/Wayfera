import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/_lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const where = category && category !== 'all' ? { category } : {}

    const destinations = await prisma.destination.findMany({
      where,
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        category: true,
        image: true,
        country: true,
        price: true,
        duration: true
      },
    })

    return NextResponse.json(destinations)
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    )
  }
}
