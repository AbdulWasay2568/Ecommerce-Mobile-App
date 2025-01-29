import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete all data from dependent tables first
  await prisma.shippingInfo.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.cart.deleteMany({});
  await prisma.productReview.deleteMany({});
  
  // Delete data from the main tables
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.user.deleteMany({});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
