/*
  Warnings:

  - You are about to drop the column `firstName` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `cityId` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fioKz` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fioRu` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderNum` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sloganKz` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sloganRu` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitleKz` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitleRu` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textKz` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textRu` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlName` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtubeVideoId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_subjectId_fkey";

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "fioKz" TEXT NOT NULL,
ADD COLUMN     "fioRu" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "image2" TEXT NOT NULL,
ADD COLUMN     "orderNum" INTEGER NOT NULL,
ADD COLUMN     "sloganKz" TEXT NOT NULL,
ADD COLUMN     "sloganRu" TEXT NOT NULL,
ADD COLUMN     "subtitleKz" TEXT NOT NULL,
ADD COLUMN     "subtitleRu" TEXT NOT NULL,
ADD COLUMN     "textKz" TEXT NOT NULL,
ADD COLUMN     "textRu" TEXT NOT NULL,
ADD COLUMN     "urlName" TEXT NOT NULL,
ADD COLUMN     "youtubeVideoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Teacher" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
