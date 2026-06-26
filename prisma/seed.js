import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const regions = await Promise.all([
    prisma.region.upsert({ where: { name: 'Europe' }, update: {}, create: { name: 'Europe', description: 'Iconic cities, rich history and breathtaking landscapes', image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg' } }),
    prisma.region.upsert({ where: { name: 'Asia' }, update: {}, create: { name: 'Asia', description: 'Ancient temples, vibrant markets and pristine beaches', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' } }),
    prisma.region.upsert({ where: { name: 'Americas' }, update: {}, create: { name: 'Americas', description: 'Vast wilderness, cosmopolitan cities and ancient ruins', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg' } }),
    prisma.region.upsert({ where: { name: 'Africa' }, update: {}, create: { name: 'Africa', description: 'Wildlife safaris, Saharan dunes and vibrant cultures', image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg' } }),
  ]);
  console.log(`Created ${regions.length} regions`);

  const destData = [
    { title: 'Paris, France', slug: 'paris-france', description: 'The City of Light dazzles with world-class art, haute cuisine and iconic landmarks.', category: 'city', image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg', imageGallery: ['https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg'], country: 'France', region: 'Europe', price: 1200, duration: 7, highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Montmartre'], bestTime: 'April - June', featured: true },
    { title: 'Bali, Indonesia', slug: 'bali-indonesia', description: 'A tropical paradise with terraced rice paddies, ancient temples and world-class surf.', category: 'beach', image: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg', imageGallery: ['https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg'], country: 'Indonesia', region: 'Asia', price: 950, duration: 10, highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Mount Batur'], bestTime: 'May - September', featured: true },
    { title: 'Machu Picchu, Peru', slug: 'machu-picchu-peru', description: 'The ancient Inca citadel set high in the Andes mountains with dramatic scenery.', category: 'adventure', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg', imageGallery: ['https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg'], country: 'Peru', region: 'Americas', price: 1800, duration: 8, highlights: ['Inca Trail', 'Sun Gate', 'Huayna Picchu', 'Sacred Valley'], bestTime: 'May - October', featured: true },
    { title: 'Santorini, Greece', slug: 'santorini-greece', description: 'Iconic white-washed villages perched on volcanic cliffs with spectacular sunsets.', category: 'beach', image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', imageGallery: ['https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg'], country: 'Greece', region: 'Europe', price: 1500, duration: 6, highlights: ['Oia Sunset', 'Caldera Views', 'Black Sand Beach', 'Wine Tasting'], bestTime: 'June - September', featured: false },
    { title: 'Kyoto, Japan', slug: 'kyoto-japan', description: "Japan's cultural heart with 1,600 Buddhist temples, tea houses and cherry blossoms.", category: 'city', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg', imageGallery: ['https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg'], country: 'Japan', region: 'Asia', price: 1600, duration: 9, highlights: ['Fushimi Inari', 'Arashiyama Bamboo', 'Geisha District', 'Kinkaku-ji'], bestTime: 'March - May', featured: false },
    { title: 'Safari, Kenya', slug: 'safari-kenya', description: "Witness the Great Migration and Africa's most spectacular wildlife in the Maasai Mara.", category: 'adventure', image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg', imageGallery: ['https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg'], country: 'Kenya', region: 'Africa', price: 2800, duration: 10, highlights: ['Great Migration', 'Big Five', 'Maasai Village', 'Hot Air Balloon'], bestTime: 'July - October', featured: false },
  ];

  for (const dest of destData) {
    const regionRecord = regions.find(r => r.name === dest.region);
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: { featured: dest.featured },
      create: { ...dest, regionId: regionRecord?.id ?? null },
    });
  }
  console.log(`Created ${destData.length} destinations`);

  await prisma.feature.deleteMany();
  await prisma.feature.createMany({
    data: [
      { title: 'Expert Local Guides', description: 'Certified guides bring destinations to life with insider knowledge and authentic experiences.', icon: 'Award' },
      { title: '24/7 Travel Support', description: 'Round-the-clock assistance from our dedicated support team wherever you are in the world.', icon: 'Headphones' },
      { title: 'Best Price Guarantee', description: 'We match any comparable offer. Find a lower price within 48 hours and we refund the difference.', icon: 'DollarSign' },
      { title: 'Trusted & Secure', description: 'Over 50,000 satisfied travelers. Fully licensed, insured and IATA-accredited.', icon: 'Shield' },
      { title: '50+ Countries', description: 'Curated destinations across six continents — from hidden gems to iconic wonders.', icon: 'Globe' },
      { title: 'Passionate Team', description: 'Every package crafted by avid travelers who have been there and lived the experience.', icon: 'Heart' },
    ],
  });
  console.log('Created features');

  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      { name: 'Sarah Johnson', location: 'New York, USA', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', rating: 5, text: 'Wayfera turned my dream Bali trip into reality. Every detail was perfectly planned — the villa, guides, hidden temples. Already booked my next trip!' },
      { name: 'Marco Rossi', location: 'Milan, Italy', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', rating: 5, text: 'The Kenya safari exceeded every expectation. Seeing the Great Migration was life-changing. The team made it completely stress-free.' },
      { name: 'Aisha Al-Farsi', location: 'Dubai, UAE', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', rating: 5, text: 'Our Kyoto trip was pure magic. Cherry blossoms, the ryokan, the tea ceremony — all arranged flawlessly. Worth every penny.' },
      { name: 'David Chen', location: 'Singapore', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', rating: 5, text: 'Wayfera stands out for personalized service. They remembered my preferences and arranged everything perfectly. Simply exceptional.' },
    ],
  });
  console.log('Created testimonials');

  await prisma.pricingPlan.deleteMany();
  await prisma.pricingPlan.createMany({
    data: [
      { name: 'Essential', price: 999, description: 'Perfect for solo travelers exploring a single destination', features: ['1 destination', 'Hotel accommodation', 'Airport transfers', 'City tour', 'Travel insurance', '24/7 support'], popular: false },
      { name: 'Explorer', price: 1999, description: 'Our most popular plan for a full multi-city adventure', features: ['Up to 3 destinations', 'Premium hotels', 'All transfers', 'Guided tours', 'Travel insurance', '24/7 priority support', 'Flexible dates', 'Meals included'], popular: true },
      { name: 'Luxury', price: 3999, description: 'The ultimate bespoke travel experience', features: ['Unlimited destinations', '5-star hotels & villas', 'Private transfers', 'Private guides', 'Comprehensive insurance', 'Dedicated concierge', 'Fully flexible', 'All meals & experiences'], popular: false },
    ],
  });
  console.log('Created pricing plans');

  await prisma.travelTip.deleteMany();
  await prisma.travelTip.createMany({
    data: [
      { title: 'Book Early & Save', description: 'Secure the best rates by booking at least 3 months ahead. Early birds save 25% on average.', icon: 'Calendar', order: 1 },
      { title: 'Pack Light', description: 'Carry-on only saves time, baggage fees and lost-luggage stress. A 20L bag covers a full week.', icon: 'Package', order: 2 },
      { title: 'Get Travel Insurance', description: 'Always protect your investment. Medical emergencies abroad can cost tens of thousands uninsured.', icon: 'Shield', order: 3 },
      { title: 'Respect Local Culture', description: 'Research customs before you go. Dress codes, tipping norms and greetings vary widely.', icon: 'Globe', order: 4 },
    ],
  });
  console.log('Created travel tips');

  await prisma.processStep.deleteMany();
  await prisma.processStep.createMany({
    data: [
      { title: 'Choose Your Destination', description: 'Browse our curated collection and find the destination that speaks to your soul.', icon: 'MapPin', order: 1 },
      { title: 'Customize Your Trip', description: 'Work with our experts to tailor every detail to your preferences and budget.', icon: 'Settings', order: 2 },
      { title: 'Book & Pay Securely', description: 'Confirm your booking with our secure payment system and receive instant confirmation.', icon: 'CreditCard', order: 3 },
      { title: 'Pack & Fly', description: 'Receive your detailed travel pack and set off with complete peace of mind.', icon: 'Plane', order: 4 },
    ],
  });
  console.log('Created process steps');

  await prisma.pageStat.deleteMany();
  await prisma.pageStat.createMany({
    data: [
      { pageType: 'home', label: 'Countries', value: '50+', icon: 'Globe', order: 1 },
      { pageType: 'home', label: 'Happy Travelers', value: '50,000+', icon: 'Users', order: 2 },
      { pageType: 'home', label: 'Years Experience', value: '12+', icon: 'Award', order: 3 },
      { pageType: 'home', label: 'Expert Guides', value: '200+', icon: 'Star', order: 4 },
    ],
  });
  console.log('Created page stats');

  for (const link of [
    { name: 'facebook', url: 'https://facebook.com/wayfera', icon: 'Facebook' },
    { name: 'instagram', url: 'https://instagram.com/wayfera', icon: 'Instagram' },
    { name: 'twitter', url: 'https://twitter.com/wayfera', icon: 'Twitter' },
    { name: 'youtube', url: 'https://youtube.com/wayfera', icon: 'Youtube' },
  ]) {
    await prisma.socialLink.upsert({ where: { name: link.name }, update: { url: link.url }, create: link });
  }
  console.log('Created social links');

  await prisma.contactInfo.deleteMany();
  await prisma.contactInfo.create({ data: { email: 'hello@wayfera.com', phone: '+1 (234) 567-8900', address: '123 Travel Street, New York, NY 10001, USA' } });
  console.log('Created contact info');

  console.log('Seeding complete!');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
