"use client";

import { toast } from "react-toastify";
import { productSchema } from "@/src/schema";
import { createProduct } from "@/actions/create-product-action";
import { useRouter } from "next/navigation";

const FormAddProduct = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
      image: formData.get("image"),
    };
    const result = productSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await createProduct(result.data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    toast.success("Producto agregado correctamente");
    router.push("/admin/products-list");
  };

  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form action={handleSubmit} className="space-y-5">
          {children}

          <input
            type="submit"
            value="agregar producto"
            className="bg-indigo-600 hover:bg-indigo-800 uppercase text-white w-full p-3 rounded-lg font-bold cursor-pointer mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default FormAddProduct;
