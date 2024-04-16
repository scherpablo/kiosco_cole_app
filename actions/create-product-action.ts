"use server";

import { prisma } from "@/src/lib/prisma";
import { productSchema } from "@/src/schema";

const createProduct = async (data: unknown) => {
  const result = productSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
    await prisma.product.create({
      data: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createProduct };
