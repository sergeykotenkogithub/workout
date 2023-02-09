/*
  Warnings:

  - You are about to drop the column `userId` on the `Workout_log` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Workout_log" DROP CONSTRAINT "Workout_log_userId_fkey";

-- AlterTable
ALTER TABLE "Workout_log" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Workout_log" ADD CONSTRAINT "Workout_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
