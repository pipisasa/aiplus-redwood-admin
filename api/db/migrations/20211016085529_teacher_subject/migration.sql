-- AddForeignKey
ALTER TABLE "Teacher" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;