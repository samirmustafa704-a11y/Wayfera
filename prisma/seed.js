import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.review.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.testimonial.deleteMany()
  await prisma.destination.deleteMany()
  await prisma.package.deleteMany()
  await prisma.user.deleteMany()

  // Seed Users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'sarah@example.com',
        name: 'Sarah Johnson',
        phone: '+1-555-0101',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
    }),
    prisma.user.create({
      data: {
        email: 'michael@example.com',
        name: 'Michael Chen',
        phone: '+1-555-0102',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
    }),
    prisma.user.create({
      data: {
        email: 'emma@example.com',
        name: 'Emma Williams',
        phone: '+1-555-0103',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      },
    }),
    prisma.user.create({
      data: {
        email: 'david@example.com',
        name: 'David Martinez',
        phone: '+1-555-0104',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      },
    }),
  ])

  // Seed Destinations
  const destinations = await Promise.all([
    prisma.destination.create({
      data: {
        title: 'Santorini Island',
        slug: 'santorini-island',
        description: 'Experience the magic of white-washed buildings perched on volcanic cliffs overlooking the Aegean Sea. Santorini is a romantic paradise with breathtaking sunsets.',
        category: 'beach',
        image: 'https://images.pexels.com/photos/1619895/pexels-photo-1619895.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/1619895/pexels-photo-1619895.jpeg',
          'https://images.pexels.com/photos/1630736/pexels-photo-1630736.jpeg',
        ],
        country: 'Greece',
        region: 'Mediterranean',
        latitude: 36.3932,
        longitude: 25.4615,
        price: 2500,
        duration: 5,
        highlights: ['White-washed villages', 'Blue domed churches', 'Volcanic beaches', 'Sunset views', 'Wine tasting'],
        bestTime: 'April to November',
      },
    }),
    prisma.destination.create({
      data: {
        title: 'Mount Fuji & Tokyo',
        slug: 'mount-fuji-tokyo',
        description: 'Combine the spiritual beauty of Mount Fuji with the vibrant energy of Tokyo. Experience ancient temples, modern technology, and traditional cuisine.',
        category: 'mountain',
        image: 'https://images.pexels.com/photos/416426/pexels-photo-416426.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/416426/pexels-photo-416426.jpeg',
          'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
        ],
        country: 'Japan',
        region: 'East Asia',
        latitude: 35.3606,
        longitude: 138.7274,
        price: 3200,
        duration: 7,
        highlights: ['Mount Fuji', 'Tokyo Tower', 'Traditional temples', 'Sushi making class', 'Bullet train experience'],
        bestTime: 'March to May, September to November',
      },
    }),
    prisma.destination.create({
      data: {
        title: 'Bali Paradise',
        slug: 'bali-paradise',
        description: 'Discover tropical paradise with pristine beaches, ancient temples, and lush rice terraces. Bali offers the perfect blend of relaxation and adventure.',
        category: 'beach',
        image: 'https://images.pexels.com/photos/1649317/pexels-photo-1649317.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/1649317/pexels-photo-1649317.jpeg',
          'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
        ],
        country: 'Indonesia',
        region: 'Southeast Asia',
        latitude: -8.6705,
        longitude: 115.2126,
        price: 1800,
        duration: 6,
        highlights: ['Rice terraces', 'Ancient temples', 'Beach clubs', 'Surfing', 'Balinese spa'],
        bestTime: 'April to October',
      },
    }),
    prisma.destination.create({
      data: {
        title: 'Paris Romance',
        slug: 'paris-romance',
        description: 'The City of Light awaits with iconic landmarks, world-class museums, and charming cafés. Experience the romance and culture that makes Paris unforgettable.',
        category: 'city',
        image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
          'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
        ],
        country: 'France',
        region: 'Europe',
        latitude: 48.8566,
        longitude: 2.3522,
        price: 2800,
        duration: 5,
        highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Seine river cruise', 'Gourmet dining'],
        bestTime: 'April to June, September to October',
      },
    }),
    prisma.destination.create({
      data: {
        title: 'Swiss Alps Adventure',
        slug: 'swiss-alps-adventure',
        description: 'Explore majestic mountain peaks, pristine Alpine villages, and world-renowned hiking trails. The Swiss Alps offer breathtaking natural beauty year-round.',
        category: 'adventure',
        image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
          'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
        ],
        country: 'Switzerland',
        region: 'Europe',
        latitude: 46.8182,
        longitude: 8.2275,
        price: 3500,
        duration: 8,
        highlights: ['Mountain hiking', 'Scenic train rides', 'Ski resorts', 'Alpine villages', 'Chocolate tasting'],
        bestTime: 'June to September, December to March',
      },
    }),
    prisma.destination.create({
      data: {
        title: 'Egyptian Wonders',
        slug: 'egyptian-wonders',
        description: 'Explore one of the world\'s greatest civilizations with the pyramids, temples, and the Nile River. A journey through ancient history and modern culture.',
        category: 'adventure',
        image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
        imageGallery: [
          'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
          'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
        ],
        country: 'Egypt',
        region: 'Africa',
        latitude: 29.9759,
        longitude: 31.1393,
        price: 2200,
        duration: 7,
        highlights: ['Pyramids of Giza', 'Sphinx', 'Nile river cruise', 'Ancient temples', 'Cairo bazaar'],
        bestTime: 'October to April',
      },
    }),
  ])

  // Seed Packages
  const packages = await Promise.all([
    prisma.package.create({
      data: {
        title: 'Luxury Flight Package',
        description: 'First class or business class flights with premium services',
        type: 'flight',
        price: 1500,
        features: ['First/Business class', 'Lounge access', 'Priority boarding', 'Free baggage'],
        rating: 4.8,
      },
    }),
    prisma.package.create({
      data: {
        title: '5-Star Hotel Package',
        description: 'Luxury accommodation in premium hotels worldwide',
        type: 'hotel',
        price: 200,
        features: ['5-star hotels', 'Room upgrades', 'Daily breakfast', 'Spa access'],
        rating: 4.9,
      },
    }),
    prisma.package.create({
      data: {
        title: 'Expert Local Guide',
        description: 'Personal guide with deep knowledge of local culture and history',
        type: 'guide',
        price: 300,
        features: ['Expert guides', 'Local insights', 'Photography tips', 'Cultural immersion'],
        rating: 4.7,
      },
    }),
    prisma.package.create({
      data: {
        title: '24/7 Travel Support',
        description: 'Round-the-clock customer support during your trip',
        type: 'support',
        price: 150,
        features: ['24/7 phone support', 'Emergency assistance', 'Concierge service', 'Travel insurance'],
        rating: 4.9,
      },
    }),
  ])

  // Seed Bookings
  await Promise.all([
    prisma.booking.create({
      data: {
        userId: users[0].id,
        destinationId: destinations[0].id,
        status: 'confirmed',
        checkInDate: new Date('2024-07-15'),
        checkOutDate: new Date('2024-07-20'),
        numberOfGuests: 2,
        totalPrice: 5000,
        notes: 'Honeymoon trip - please arrange rose petals in room',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[1].id,
        destinationId: destinations[1].id,
        status: 'confirmed',
        checkInDate: new Date('2024-08-01'),
        checkOutDate: new Date('2024-08-08'),
        numberOfGuests: 1,
        totalPrice: 3200,
        notes: 'Solo traveler - interested in photography',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[2].id,
        destinationId: destinations[2].id,
        status: 'pending',
        checkInDate: new Date('2024-09-10'),
        checkOutDate: new Date('2024-09-16'),
        numberOfGuests: 4,
        totalPrice: 7200,
        notes: 'Family vacation with kids - need child-friendly activities',
      },
    }),
  ])

  // Seed Reviews
  await Promise.all([
    prisma.review.create({
      data: {
        userId: users[0].id,
        destinationId: destinations[0].id,
        rating: 5,
        title: 'Absolutely magical!',
        text: 'The sunset in Santorini was the most beautiful thing I\'ve ever seen. Every moment was perfect. Wayfera made everything seamless.',
      },
    }),
    prisma.review.create({
      data: {
        userId: users[1].id,
        destinationId: destinations[1].id,
        rating: 5,
        title: 'Unforgettable experience',
        text: 'Mount Fuji and Tokyo were incredible. The guide was so knowledgeable and the itinerary was perfectly planned. Highly recommended!',
      },
    }),
    prisma.review.create({
      data: {
        userId: users[2].id,
        destinationId: destinations[2].id,
        rating: 4,
        title: 'Paradise found',
        text: 'Bali is truly paradise. The beaches are stunning and the culture is fascinating. Would love to go back again!',
      },
    }),
  ])

  // Seed Testimonials
  await Promise.all([
    prisma.testimonial.create({
      data: {
        name: 'Sarah Johnson',
        location: 'New York, USA',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        rating: 5,
        text: 'Wayfera made our honeymoon in Santorini absolutely magical! Every detail was perfect, from the hotel to the guided tours. Highly recommend!',
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'Michael Chen',
        location: 'Singapore',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        rating: 5,
        text: 'Best travel agency I\'ve ever worked with. The customer service was exceptional and they helped us customize our trip to Japan perfectly.',
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'Emma Williams',
        location: 'London, UK',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        rating: 5,
        text: 'Our family trip to Bali was unforgettable! Wayfera took care of everything and we could just relax and enjoy. Will definitely book again!',
      },
    }),
    prisma.testimonial.create({
      data: {
        name: 'David Martinez',
        location: 'Madrid, Spain',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
        rating: 5,
        text: 'Professional, reliable, and affordable. Wayfera exceeded all our expectations for our anniversary trip to Paris. Thank you!',
      },
    }),
  ])

  console.log('✓ Seed data created successfully!')
  console.log(`✓ ${users.length} users`)
  console.log(`✓ ${destinations.length} destinations`)
  console.log(`✓ ${packages.length} packages`)
  console.log(`✓ ${await prisma.booking.count()} bookings`)
  console.log(`✓ ${await prisma.review.count()} reviews`)
  console.log(`✓ ${await prisma.testimonial.count()} testimonials`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
