import { prisma } from '@/app/_lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findFirst();
    
    if (!contactInfo) {
      return NextResponse.json(
        {
          email: 'info@wayfera.com',
          phone: '+1-234-567-8900',
          address: '123 Travel Street, New York, NY 10001, US'
        }
      );
    }
    
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact info' },
      { status: 500 }
    );
  }
}
