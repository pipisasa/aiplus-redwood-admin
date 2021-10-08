/*
  Warnings:

  - You are about to drop the `ProgramBenefits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProgramBenefits" DROP CONSTRAINT "ProgramBenefits_programId_fkey";

-- DropTable
DROP TABLE "ProgramBenefits";

-- CreateTable
CREATE TABLE "ProgramBenefit" (
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

-- AddForeignKey
ALTER TABLE "ProgramBenefit" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;
