import { prisma } from "@/src/lib/prisma";

export const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: category,
        slug: category,
      },
    },
  });
  return products;
};
