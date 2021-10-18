-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "titleRu" TEXT NOT NULL,
    "titleKz" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "parentId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenuItem" ADD FOREIGN KEY ("parentId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
