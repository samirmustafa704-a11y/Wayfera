import { NextResponse } from 'next/server'
import prisma from '@/app/_lib/prisma'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      select: {
        id: true,
        name: true,
        location: true,
        image: true,
        rating: true,
        text: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}
