-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('cash', 'card');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('completed', 'pending');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('processing', 'shipped', 'delivered', 'cancelled');

-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryID")
);

-- CreateTable
CREATE TABLE "Product" (
    "productID" SERIAL NOT NULL,
    "categoryID" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productID")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "productID" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentID" SERIAL NOT NULL,
    "cartID" INTEGER NOT NULL,
    "payment_amount" DOUBLE PRECISION NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payment_method" "PaymentMethod" NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentID")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderID" SERIAL NOT NULL,
    "paymentID" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_status" "OrderStatus" NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderID")
);

-- CreateTable
CREATE TABLE "ShippingInfo" (
    "shippingID" SERIAL NOT NULL,
    "orderID" INTEGER NOT NULL,
    "shipping_address" TEXT NOT NULL,
    "shipping_method" TEXT NOT NULL,
    "tracking_number" TEXT,
    "shipped_date" TIMESTAMP(3),
    "delivered_date" TIMESTAMP(3),

    CONSTRAINT "ShippingInfo_pkey" PRIMARY KEY ("shippingID")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "reviewID" SERIAL NOT NULL,
    "productID" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("reviewID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("categoryID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Cart"("cartID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentID_fkey" FOREIGN KEY ("paymentID") REFERENCES "Payment"("paymentID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingInfo" ADD CONSTRAINT "ShippingInfo_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("orderID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
