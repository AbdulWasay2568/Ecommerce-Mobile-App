/*
  Warnings:

  - A unique constraint covering the columns `[userID,productID]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cart_userID_productID_key" ON "Cart"("userID", "productID");
