-- CreateTable
CREATE TABLE "Prompt" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL DEFAULT '9_16',
    "lora" TEXT NOT NULL DEFAULT 'flux-RealismLora',
    "style" TEXT NOT NULL DEFAULT 'digital',
    "color" TEXT NOT NULL DEFAULT 'no_color',
    "lighting" TEXT NOT NULL DEFAULT 'studio',
    "composition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);
