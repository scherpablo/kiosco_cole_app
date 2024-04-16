"use server";

import { prisma } from "@/src/lib/prisma";
import { productSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

const updateProduct = async (data: unknown, id: number) => {
  const result = productSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
    await prisma.product.update({
      where: {
        id,
      },
      data: result.data,
    });
    revalidatePath('/admin/products')
  } catch (error) {
    console.log(error);
  }
};

export { updateProduct };
