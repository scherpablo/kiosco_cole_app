import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import { prisma } from "@/src/lib/prisma";

const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
};

const getCategoryName = async (categorySlug: string) => {
  const category = await prisma.category.findMany({
    where: {
      slug: categorySlug,
    },
    select: {
      name: true,
    },
  });
  const categoryName = category[0]?.name || "";
  return categoryName;
};

const OrderPage = async ({ params }: { params: { category: string } }) => {
  const categoryName = await getCategoryName(params.category);
  const products = await getProducts(params.category);

  return (
    <>
      <Title>Mostrando los productos para {categoryName}</Title>
      <Heading>Elije y personaliza tu pedido a continuación</Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default OrderPage;
