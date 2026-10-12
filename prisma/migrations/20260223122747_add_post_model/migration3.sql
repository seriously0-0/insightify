-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "InstagramPostId" TEXT NOT NULL,
    "instgramAccountId" TEXT NOT NULL,
    "caption" TEXT,
    "mediaType" TEXT NOT NULL,
    "mediaUrl" TEXT,
    "PostAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_InstagramPostId_key" ON "Post"("InstagramPostId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_instgramAccountId_fkey" FOREIGN KEY ("instgramAccountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
