-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "locationId" INTEGER,
    CONSTRAINT "Person_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("email", "firstName", "id", "lastName", "locationId") SELECT "email", "firstName", "id", "lastName", "locationId" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
