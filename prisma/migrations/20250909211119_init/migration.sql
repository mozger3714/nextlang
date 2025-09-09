-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `name` VARCHAR(255) NULL,
    `surname` VARCHAR(255) NULL,
    `phone` VARCHAR(20) NULL,
    `emailVerified` BOOLEAN NULL DEFAULT false,
    `phoneVerified` BOOLEAN NULL DEFAULT false,
    `role` ENUM('STUDENT', 'TEACHER', 'ADMIN') NOT NULL DEFAULT 'STUDENT',
    `enrollmentType` ENUM('INDIVIDUAL', 'GROUP') NULL,
    `isCompany` BOOLEAN NOT NULL DEFAULT false,
    `companyName` VARCHAR(255) NULL,
    `clerkId` VARCHAR(191) NOT NULL,
    `stripeCustomerId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_clerkId_key`(`clerkId`),
    UNIQUE INDEX `User_stripeCustomerId_key`(`stripeCustomerId`),
    INDEX `User_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `kind` ENUM('INDIVIDUAL', 'GROUP') NOT NULL,
    `stripeProductId` VARCHAR(191) NOT NULL,
    `stripePriceId` VARCHAR(191) NOT NULL,
    `unitAmount` INTEGER NULL,
    `currency` VARCHAR(10) NOT NULL DEFAULT 'pln',
    `interval` ENUM('DAY', 'WEEK', 'MONTH', 'YEAR') NOT NULL DEFAULT 'MONTH',
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `features` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Plan_slug_key`(`slug`),
    UNIQUE INDEX `Plan_stripeProductId_key`(`stripeProductId`),
    UNIQUE INDEX `Plan_stripePriceId_key`(`stripePriceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `stripeSubscriptionId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `priceId` VARCHAR(191) NOT NULL,
    `status` ENUM('INCOMPLETE', 'INCOMPLETE_EXPIRED', 'TRIALING', 'ACTIVE', 'PAST_DUE', 'CANCELED', 'UNPAID', 'PAUSED', 'INACTIVE') NOT NULL,
    `currentPeriodStart` DATETIME(3) NOT NULL,
    `currentPeriodEnd` DATETIME(3) NOT NULL,
    `cancelAtPeriodEnd` BOOLEAN NOT NULL DEFAULT false,
    `canceledAt` DATETIME(3) NULL,
    `trialEndsAt` DATETIME(3) NULL,
    `planSlug` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `planId` VARCHAR(191) NULL,
    `metadata` JSON NULL,

    UNIQUE INDEX `Subscription_stripeSubscriptionId_key`(`stripeSubscriptionId`),
    INDEX `Subscription_userId_idx`(`userId`),
    INDEX `Subscription_status_currentPeriodEnd_idx`(`status`, `currentPeriodEnd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `stripeInvoiceId` VARCHAR(191) NOT NULL,
    `stripeCustomerId` VARCHAR(191) NOT NULL,
    `subscriptionId` VARCHAR(191) NULL,
    `amountDue` INTEGER NOT NULL,
    `amountPaid` INTEGER NOT NULL,
    `currency` VARCHAR(10) NOT NULL,
    `status` VARCHAR(30) NOT NULL,
    `hostedInvoiceUrl` VARCHAR(191) NULL,
    `invoicePdf` VARCHAR(191) NULL,
    `periodStart` DATETIME(3) NULL,
    `periodEnd` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Invoice_stripeInvoiceId_key`(`stripeInvoiceId`),
    INDEX `Invoice_userId_idx`(`userId`),
    INDEX `Invoice_subscriptionId_idx`(`subscriptionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Media` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `width` INTEGER NULL,
    `height` INTEGER NULL,
    `alt` VARCHAR(191) NULL,
    `kind` ENUM('IMAGE', 'VIDEO', 'FILE') NOT NULL DEFAULT 'IMAGE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    UNIQUE INDEX `Tag_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostTag` (
    `postId` VARCHAR(191) NOT NULL,
    `tagId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostCategory` (
    `postId` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`postId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `excerpt` VARCHAR(500) NULL,
    `content` JSON NOT NULL,
    `status` ENUM('DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
    `publishedAt` DATETIME(3) NULL,
    `scheduledAt` DATETIME(3) NULL,
    `authorId` VARCHAR(191) NULL,
    `coverId` VARCHAR(191) NULL,
    `ogImageId` VARCHAR(191) NULL,
    `metaTitle` VARCHAR(255) NULL,
    `metaDescription` VARCHAR(500) NULL,
    `canonicalUrl` VARCHAR(2048) NULL,
    `readingTimeMin` INTEGER NULL,
    `ogTitle` VARCHAR(255) NULL,
    `ogDescription` VARCHAR(500) NULL,
    `twitterTitle` VARCHAR(255) NULL,
    `twitterDescription` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `wordCount` INTEGER NULL,

    UNIQUE INDEX `Post_slug_key`(`slug`),
    INDEX `Post_status_publishedAt_idx`(`status`, `publishedAt`),
    INDEX `Post_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Webinar` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `startsAt` DATETIME(3) NOT NULL,
    `durationMinutes` INTEGER NULL,
    `meetingUrl` VARCHAR(191) NULL,
    `capacity` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WebinarSignup` (
    `id` VARCHAR(191) NOT NULL,
    `webinarId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,
    `email` VARCHAR(320) NOT NULL,
    `name` VARCHAR(255) NULL,
    `surname` VARCHAR(255) NULL,
    `phone` VARCHAR(50) NULL,
    `consentMarketing` BOOLEAN NULL DEFAULT false,
    `source` VARCHAR(255) NULL,
    `utm` JSON NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'ATTENDED', 'NO_SHOW', 'CANCELED') NOT NULL DEFAULT 'PENDING',
    `ip` VARCHAR(64) NULL,
    `userAgent` VARCHAR(1024) NULL,
    `token` VARCHAR(191) NULL,
    `confirmedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `WebinarSignup_userId_idx`(`userId`),
    UNIQUE INDEX `WebinarSignup_webinarId_email_key`(`webinarId`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_subscriptionId_fkey` FOREIGN KEY (`subscriptionId`) REFERENCES `Subscription`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_coverId_fkey` FOREIGN KEY (`coverId`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_ogImageId_fkey` FOREIGN KEY (`ogImageId`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WebinarSignup` ADD CONSTRAINT `WebinarSignup_webinarId_fkey` FOREIGN KEY (`webinarId`) REFERENCES `Webinar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WebinarSignup` ADD CONSTRAINT `WebinarSignup_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
