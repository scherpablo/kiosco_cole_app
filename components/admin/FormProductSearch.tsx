"use client"

import { searchSchema } from "@/src/schema";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const FormProductSearch = () => {
  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };
    const result = searchSchema.safeParse(data)
    console.log(result)
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }
    redirect(`/admin/products-list/search?search=${ result.data.search }`)
  };

  return (
    <>
      <form action={handleSearchForm} className="flex items-center">
        <input
          type="text"
          placeholder="Buscar producto"
          name="search"
          className="w-full p-3 rounded-l-lg placeholder-gray-400 shadow-lg"
        ></input>

        <input
          type="submit"
          value={"buscar"}
          className="bg-indigo-600 p-3 rounded-r-lg uppercase text-white cursor-pointer font-bold hover:bg-indigo-800"
        />
      </form>
    </>
  );
};
export default FormProductSearch;
