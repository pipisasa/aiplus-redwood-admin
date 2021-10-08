/*
  Warnings:

  - You are about to drop the column `descriptionEn` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `titleEn` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionEn` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionKz` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionRu` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `titleEn` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionEn` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `titleEn` on the `Subject` table. All the data in the column will be lost.
  - Added the required column `cityId` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleWhyKz` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleWhyRu` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoTitleKz` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoTitleRu` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "descriptionEn",
DROP COLUMN "titleEn";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "descriptionEn",
DROP COLUMN "descriptionKz",
DROP COLUMN "descriptionRu",
DROP COLUMN "titleEn",
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "factAboutProgramKz" TEXT,
ADD COLUMN     "factAboutProgramRu" TEXT,
ADD COLUMN     "fullSchoolNameKz" VARCHAR(255),
ADD COLUMN     "fullSchoolNameRu" VARCHAR(255),
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "logoAtListOfPrograms" TEXT,
ADD COLUMN     "logoAtRoot" TEXT,
ADD COLUMN     "orderNumber" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shortSchoolNameKz" VARCHAR(255),
ADD COLUMN     "shortSchoolNameRu" VARCHAR(255),
ADD COLUMN     "subTitleKz" VARCHAR(255),
ADD COLUMN     "subTitleRu" VARCHAR(255),
ADD COLUMN     "textWhyKz" TEXT,
ADD COLUMN     "textWhyRu" TEXT,
ADD COLUMN     "titleAtRootHoverKz" VARCHAR(255),
ADD COLUMN     "titleAtRootHoverRu" VARCHAR(255),
ADD COLUMN     "titleAtRootKz" VARCHAR(255),
ADD COLUMN     "titleAtRootRu" VARCHAR(255),
ADD COLUMN     "titleWhyKz" VARCHAR(255) NOT NULL,
ADD COLUMN     "titleWhyRu" VARCHAR(255) NOT NULL,
ADD COLUMN     "videoTitleKz" VARCHAR(255) NOT NULL,
ADD COLUMN     "videoTitleRu" VARCHAR(255) NOT NULL,
ADD COLUMN     "youtubeVideoId" VARCHAR(255),
ALTER COLUMN "schoolId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "descriptionEn",
DROP COLUMN "titleEn";

-- CreateTable
CREATE TABLE "ProgramBenefits" (
    "id" SERIAL NOT NULL,
    "titleKz" VARCHAR(255),
    "titleRu" VARCHAR(255),
    "orderNumber" INTEGER DEFAULT 0,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "programId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramWhy" (
    "id" SERIAL NOT NULL,
    "textKz" TEXT NOT NULL,
    "textRu" TEXT NOT NULL,
    "orderNumber" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "programId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramSubject" (
    "id" SERIAL NOT NULL,
    "orderNumber" INTEGER NOT NULL DEFAULT 0,
    "programId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSubject.programId_subjectId_unique" ON "ProgramSubject"("programId", "subjectId");

-- AddForeignKey
ALTER TABLE "Program" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramBenefits" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramWhy" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSubject" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSubject" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
