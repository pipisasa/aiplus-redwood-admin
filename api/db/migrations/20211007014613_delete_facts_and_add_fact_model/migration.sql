/*
  Warnings:

  - You are about to drop the `Facts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Facts";

-- CreateTable
CREATE TABLE "Fact" (
    "id" SERIAL NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "orderNumber" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL DEFAULT E'https://firebasestorage.googleapis.com/v0/b/chat-angular-e97bc.appspot.com/o/aiplus%2Fthumbs%2Fplaceholder-2_500x500.webp?alt=media',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
