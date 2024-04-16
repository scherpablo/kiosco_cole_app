import ButtonGoBackProduct from "@/components/admin/ButtonGoBackProduct";
import FormAddProduct from "@/components/admin/FormAddProduct";
import FormProduct from "@/components/admin/FormProduct";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";

const NewProductsPage = () => {
  return (
    <>
      <Title>Panel de Administrtador - Nuevo Producto</Title>
      <Heading>Agrega tus Productos</Heading>
      <FormAddProduct>
        <FormProduct />
      </FormAddProduct>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-5 mt-10">
        <ButtonGoBackProduct />
      </div>
    </>
  );
};

export default NewProductsPage;
