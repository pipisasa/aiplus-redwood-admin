-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('RESET_PASSWORD');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "salt" TEXT DEFAULT E'',
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "descriptionKz" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    "titleEn" VARCHAR(255) NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "descriptionKz" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "shortSchoolNameRu" VARCHAR(255),
    "shortSchoolNameKz" VARCHAR(255),
    "fullSchoolNameRu" VARCHAR(255),
    "fullSchoolNameKz" VARCHAR(255),
    "subTitleRu" VARCHAR(255),
    "subTitleKz" VARCHAR(255),
    "titleAtRootRu" VARCHAR(255),
    "titleAtRootKz" VARCHAR(255),
    "titleAtRootHoverRu" VARCHAR(255),
    "titleAtRootHoverKz" VARCHAR(255),
    "logo" TEXT NOT NULL,
    "logoAtRoot" TEXT,
    "logoAtListOfPrograms" TEXT,
    "orderNumber" INTEGER NOT NULL DEFAULT 0,
    "youtubeVideoId" VARCHAR(255),
    "videoTitleRu" VARCHAR(255) NOT NULL,
    "videoTitleKz" VARCHAR(255) NOT NULL,
    "factAboutProgramKz" TEXT,
    "factAboutProgramRu" TEXT,
    "titleWhyRu" VARCHAR(255) NOT NULL,
    "titleWhyKz" VARCHAR(255) NOT NULL,
    "textWhyKz" TEXT,
    "textWhyRu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" INTEGER,
    "cityId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "fioKz" VARCHAR(255) NOT NULL,
    "fioRu" VARCHAR(255) NOT NULL,
    "image" TEXT,
    "beforeBallCount" VARCHAR(255) NOT NULL,
    "afterBallCount" VARCHAR(255) NOT NULL,
    "orderNum" INTEGER NOT NULL DEFAULT 0,
    "listOrderNum" INTEGER NOT NULL DEFAULT 0,
    "descriptionKz" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "textKz" TEXT NOT NULL,
    "textRu" TEXT NOT NULL,
    "feedbackKz" TEXT NOT NULL,
    "feedbackRu" TEXT NOT NULL,
    "youtubeVideoId" TEXT NOT NULL,
    "sliderSubtitleKz" VARCHAR(255) NOT NULL,
    "sliderSubtitleRu" VARCHAR(255) NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "programId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "descriptionRu" TEXT,
    "descriptionKz" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "subjectId" INTEGER,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "titleKz" VARCHAR(255) NOT NULL,
    "titleRu" VARCHAR(255) NOT NULL,
    "descriptionKz" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "orderNum" INTEGER DEFAULT 0,
    "image" TEXT DEFAULT E'https://firebasestorage.googleapis.com/v0/b/chat-angular-e97bc.appspot.com/o/aiplus%2Fthumbs%2Fplaceholder-2_500x500.webp?alt=media',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sentTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSubject_programId_subjectId_key" ON "ProgramSubject"("programId", "subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "Session.handle_unique" ON "Session"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token_hashedToken_type_key" ON "Token"("hashedToken", "type");

-- AddForeignKey
ALTER TABLE "School" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramBenefit" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramWhy" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSubject" ADD FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSubject" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
