/*
  Warnings:

  - The primary key for the `Engagement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Engagement` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Engagement" (
    "personId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "isSkip" BOOLEAN NOT NULL DEFAULT false,
    "validFor" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,

    PRIMARY KEY ("personId", "eventId"),
    CONSTRAINT "Engagement_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Engagement_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Engagement" ("createdAt", "deletedAt", "eventId", "isSkip", "personId", "updatedAt", "validFor") SELECT "createdAt", "deletedAt", "eventId", "isSkip", "personId", "updatedAt", "validFor" FROM "Engagement";
DROP TABLE "Engagement";
ALTER TABLE "new_Engagement" RENAME TO "Engagement";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
