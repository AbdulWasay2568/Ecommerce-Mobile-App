import { PrismaClient, PaymentMethod, PaymentStatus, OrderStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  // await prisma.user.createMany({
  //   data: [
  //     { username: 'ahmedAkram', email: 'ak@example.com', password: 'password123', address: '123 Street' },
  //   ],
  // });

  // Seed Categories
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Laptops' }
    ],
    skipDuplicates: true, // Avoid errors if categories already exist
  });

  // Retrieve all categories
  const allCategories = await prisma.category.findMany();
  const categoryMap = new Map(allCategories.map(category => [category.name, category.categoryID]));

  // Seed Products
  await prisma.product.createMany({
    data: [
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },    
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
      { categoryID: categoryMap.get('Laptops')!, name: 'Dell Latitude 5411 14', description: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', price: 60000, stock: 50, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' },
    ],
      // { categoryID: 1, name: 'Dell Latitude 5411 is great business laptop with a4 inch stunning display and innovative fastest intel core technology. Perfect for Various professions with massive RAM and storage and intel graphics to run intensive applications flawlessly. Intel® 10th Generation Core™ i7-10850H, 6 cores, upto 5.1 GHz, 12MB Cache 14.1-Inch FHD(1920x1080) Anti-glare Display, 220 nits, 45% NTSC 16GB DDR4-2933 MHz RAM | 256GB M.2 2230 PCIe NVMe SSD Storage Features Type-C Power Delivery', description: 'Dell Latitude 5411 14', price: 60000, stock: 50, image_url: 'https://www.teslalaptops.com/refurbished-laptops/dell-laptops/latitude/dell-latitude-5411-core-i7-10th-generation-laptop' }    ],
      
      skipDuplicates: true,
  });

  // Seed Carts
  // await prisma.cart.createMany({
  //   data: [
  //     { userID: 1, productID: 1, quantity: 1, total_amount: 60000, created_at: new Date() },
  //     // { userID: 2, productID: 2, quantity: 2, total_amount: 39.98, created_at: new Date() },
  //     // { userID: 3, productID: 3, quantity: 3, total_amount: 29.97, created_at: new Date() },
  //     // { userID: 4, productID: 4, quantity: 1, total_amount: 49.99, created_at: new Date() },
  //     // { userID: 5, productID: 5, quantity: 2, total_amount: 59.98, created_at: new Date() },
  //     // { userID: 6, productID: 6, quantity: 1, total_amount: 14.99, created_at: new Date() },
  //     // { userID: 7, productID: 7, quantity: 1, total_amount: 39.99, created_at: new Date() },
  //     // { userID: 8, productID: 8, quantity: 2, total_amount: 49.98, created_at: new Date() },
  //     // { userID: 9, productID: 9, quantity: 1, total_amount: 34.99, created_at: new Date() },
  //     // { userID: 10, productID: 10, quantity: 1, total_amount: 199.99, created_at: new Date() },
  //   ],
  //   skipDuplicates: true, // Avoid errors if carts already exist
  // });

  // // Seed Payments
  // await prisma.payment.createMany({
  //   data: [
  //     { cartID: 1, payment_amount: 60000, payment_method: PaymentMethod.card, payment_status: PaymentStatus.completed },
  //     // { cartID: 2, payment_amount: 39.98, payment_method: PaymentMethod.cash, payment_status: PaymentStatus.completed },
  //     // { cartID: 3, payment_amount: 29.97, payment_method: PaymentMethod.card, payment_status: PaymentStatus.pending },
  //     // { cartID: 4, payment_amount: 49.99, payment_method: PaymentMethod.card, payment_status: PaymentStatus.completed },
  //     // { cartID: 5, payment_amount: 59.98, payment_method: PaymentMethod.cash, payment_status: PaymentStatus.pending },
  //     // { cartID: 6, payment_amount: 14.99, payment_method: PaymentMethod.card, payment_status: PaymentStatus.completed },
  //     // { cartID: 7, payment_amount: 39.99, payment_method: PaymentMethod.card, payment_status: PaymentStatus.completed },
  //     // { cartID: 8, payment_amount: 49.98, payment_method: PaymentMethod.cash, payment_status: PaymentStatus.completed },
  //     // { cartID: 9, payment_amount: 34.99, payment_method: PaymentMethod.card, payment_status: PaymentStatus.pending },
  //     // { cartID: 10, payment_amount: 199.99, payment_method: PaymentMethod.card, payment_status: PaymentStatus.completed },
  //   ],
  //   skipDuplicates: true,
  // });

  // // Seed Orders
  // await prisma.order.createMany({
  //   data: [
  //     { paymentID: 1, order_status: OrderStatus.delivered },
  //     // { paymentID: 2, order_status: OrderStatus.shipped },
  //     // { paymentID: 3, order_status: OrderStatus.processing },
  //     // { paymentID: 4, order_status: OrderStatus.delivered },
  //     // { paymentID: 5, order_status: OrderStatus.cancelled },
  //     // { paymentID: 6, order_status: OrderStatus.delivered },
  //     // { paymentID: 7, order_status: OrderStatus.shipped },
  //     // { paymentID: 8, order_status: OrderStatus.processing },
  //     // { paymentID: 9, order_status: OrderStatus.cancelled },
  //     // { paymentID: 10, order_status: OrderStatus.delivered },
  //   ],
  //   skipDuplicates: true, 
  // });

  // // Seed ShippingInfos
  // await prisma.shippingInfo.createMany({
  //   data: [
  //     { orderID: 1, shipping_address: '123 Street', shipping_method: 'Standard', tracking_number: 'TRK123', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 2, shipping_address: '456 Elm St', shipping_method: 'Express', tracking_number: 'TRK456', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 3, shipping_address: '789 Oak St', shipping_method: 'Standard', tracking_number: 'TRK789', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 4, shipping_address: '101 Maple St', shipping_method: 'Express', tracking_number: 'TRK101', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 5, shipping_address: '202 Pine St', shipping_method: 'Standard', tracking_number: 'TRK202', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 6, shipping_address: '303 Birch St', shipping_method: 'Express', tracking_number: 'TRK303', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 7, shipping_address: '404 Cedar St', shipping_method: 'Standard', tracking_number: 'TRK404', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 8, shipping_address: '505 Cherry St', shipping_method: 'Express', tracking_number: 'TRK505', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 9, shipping_address: '606 Spruce St', shipping_method: 'Standard', tracking_number: 'TRK606', shipped_date: new Date(), delivered_date: new Date() },
  //     // { orderID: 10, shipping_address: '707 Redwood St', shipping_method: 'Express', tracking_number: 'TRK707', shipped_date: new Date(), delivered_date: new Date() },
  //   ],
  //   skipDuplicates: true, // Avoid errors if shipping infos already exist
  // });

  // // Seed ProductReviews
  // await prisma.productReview.createMany({
  //   data: [
  //     { productID: 1, userID: 1, rating: 5, review: 'Excellent product!' },
  //     // { productID: 2, userID: 2, rating: 4, review: 'Very good, but a bit pricey.' },
  //     // { productID: 3, userID: 3, rating: 3, review: 'Average quality.' },
  //     // { productID: 4, userID: 4, rating: 5, review: 'Great blender, highly recommend.' },
  //     // { productID: 5, userID: 5, rating: 4, review: 'Good quality basketball.' },
  //     // { productID: 6, userID: 6, rating: 5, review: 'Shampoo works wonders!' },
  //     // { productID: 7, userID: 7, rating: 4, review: 'Fun toy car, kids love it.' },
  //     // { productID: 8, userID: 8, rating: 3, review: 'Car wax is okay, nothing special.' },
  //     // { productID: 9, userID: 9, rating: 5, review: 'Garden hose is durable and flexible.' },
  //     // { productID: 10, userID: 10, rating: 5, review: 'Amazing guitar for the price!' },
  //   ],
  //   skipDuplicates: true, // Avoid errors if reviews already exist
  // });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
