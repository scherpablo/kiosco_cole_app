import { redirect } from "next/navigation";
import { prisma } from "@/src/lib/prisma";
import ButtonCreateProduct from "@/components/admin/ButtonCreateProduct";
import ProductsPagination from "@/components/admin/ProductsPagination";
import ProductsTable from "@/components/admin/ProductsTable";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import FormProductSearch from "@/components/admin/FormProductSearch";

const productCount = async () => {
  return await prisma.product.count();
};

const getProducts = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize;

  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true,
    },
  });

  return products;
};

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = +searchParams.page || 1; //El + convierte el string a number
  const pageSize = 10;

  if (page < 0) redirect("/admin/products-list");

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();

  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) redirect("/admin/products-list");

  return (
    <>
      <Title>Panel de Administración - Productos</Title>
      <Heading>Adminstrar Productos</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <ButtonCreateProduct />
        <FormProductSearch />
      </div>
      <ProductsTable products={products} />
      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  );
};

export default ProductsPage;
