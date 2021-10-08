/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_studentId_fkey";

-- AlterTable
ALTER TABLE "Facts" ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'https://firebasestorage.googleapis.com/v0/b/chat-angular-e97bc.appspot.com/o/aiplus%2Fthumbs%2Fplaceholder-2_500x500.webp?alt=media',
ADD COLUMN     "orderNumber" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Image";
