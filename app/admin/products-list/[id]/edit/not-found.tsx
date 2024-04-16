import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Title>Panel de Administración - Not Found</Title>
      <Heading>Producto no encontrado</Heading>
      <div className="text-center">
        <Link
          href="/admin/products"
          className="bg-amber-400 hover:bg-amber-500 font-bold px-10 py-3 rounded-lg text-white uppercase text-center w-full lg:w-auto"
        >
          Volver a Productos
        </Link>
      </div>
    </>
  );
};

export default NotFound;
