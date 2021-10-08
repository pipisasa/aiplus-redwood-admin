/*
  Warnings:

  - You are about to drop the column `dateOfFinish` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `Student` table. All the data in the column will be lost.
  - Added the required column `afterBallCount` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beforeBallCount` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionKz` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionRu` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedbackKz` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedbackRu` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fioKz` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fioRu` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sliderSubtitleKz` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sliderSubtitleRu` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textKz` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textRu` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtubeVideoId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_schoolId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "dateOfFinish",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "schoolId",
ADD COLUMN     "afterBallCount" VARCHAR(255) NOT NULL,
ADD COLUMN     "beforeBallCount" VARCHAR(255) NOT NULL,
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "descriptionKz" TEXT NOT NULL,
ADD COLUMN     "descriptionRu" TEXT NOT NULL,
ADD COLUMN     "feedbackKz" TEXT NOT NULL,
ADD COLUMN     "feedbackRu" TEXT NOT NULL,
ADD COLUMN     "fioKz" VARCHAR(255) NOT NULL,
ADD COLUMN     "fioRu" VARCHAR(255) NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "listOrderNum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "orderNum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "programId" INTEGER NOT NULL,
ADD COLUMN     "sliderSubtitleKz" VARCHAR(255) NOT NULL,
ADD COLUMN     "sliderSubtitleRu" VARCHAR(255) NOT NULL,
ADD COLUMN     "textKz" TEXT NOT NULL,
ADD COLUMN     "textRu" TEXT NOT NULL,
ADD COLUMN     "year" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "youtubeVideoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
