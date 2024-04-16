"use client";

import React from "react";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import { productSchema } from "@/src/schema";
import { updateProduct } from "@/actions/update-product-action";

const FormEditProduct = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const params = useParams();
  const id = +params.id!

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
    const response = await updateProduct(result.data, id);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    toast.success("Producto actualizado correctamente");
    router.push("/admin/products-list");
  };

  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form action={handleSubmit} className="space-y-5">
          {children}

          <input
            type="submit"
            value="guardar cambios"
            className="bg-indigo-600 hover:bg-indigo-800 uppercase text-white w-full p-3 rounded-lg font-bold cursor-pointer mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default FormEditProduct;
