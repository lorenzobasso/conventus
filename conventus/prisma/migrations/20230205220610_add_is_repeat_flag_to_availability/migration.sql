/*
  Warnings:

  - You are about to drop the `Avaliability` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Avaliability";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Availability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" INTEGER NOT NULL,
    "isRepeat" BOOLEAN NOT NULL DEFAULT false,
    "numTimesAvailable" INTEGER NOT NULL DEFAULT 0,
    "numTimesSkip" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Availability_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Availability_personId_key" ON "Availability"("personId");
