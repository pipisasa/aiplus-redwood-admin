/*
  Warnings:

  - You are about to drop the column `contentEn` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `contentKz` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `contentRu` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `descriptionEn` to the `Feature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionKz` to the `Feature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionRu` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "contentEn",
DROP COLUMN "contentKz",
DROP COLUMN "contentRu",
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "descriptionKz" TEXT NOT NULL,
ADD COLUMN     "descriptionRu" TEXT NOT NULL,
ADD COLUMN     "image" TEXT DEFAULT E'https://firebasestorage.googleapis.com/v0/b/chat-angular-e97bc.appspot.com/o/aiplus%2Fthumbs%2Fplaceholder-2_500x500.webp?alt=media';
