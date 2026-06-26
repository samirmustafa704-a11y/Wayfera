import { NextResponse } from 'next/server'
import prisma from '@/app/_lib/prisma'

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        price: true,
        features: true,
        rating: true,
      },
    })

    return NextResponse.json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    )
  }
}
