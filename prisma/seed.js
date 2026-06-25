import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Example: seed initial users
  const user1 = await prisma.user.upsert({
    where: { email: 'admin@wayfera.com' },
    update: {},
    create: {
      email: 'admin@wayfera.com',
      name: 'Admin User',
    },
  })

  console.log('✓ Seeded user:', user1)
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
