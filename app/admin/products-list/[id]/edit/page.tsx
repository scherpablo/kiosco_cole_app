import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import FormProduct from "@/components/admin/FormProduct";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import ButtonGoBackProduct from "@/components/admin/ButtonGoBackProduct";
import FormEditProduct from "@/components/admin/FormEditProduct";

const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) {
    notFound();
  }
  return product;
};

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(+params.id);

  return (
    <>
      <Title>Panel de Administración - Editar Producto</Title>
      <Heading>Actualiza el Producto: {product.name}</Heading>
      <FormEditProduct>
        <FormProduct product={product} />
      </FormEditProduct>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-5 mt-10">
        <ButtonGoBackProduct />
      </div>
    </>
  );
};

export default page;
