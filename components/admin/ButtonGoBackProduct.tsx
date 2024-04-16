"use client";

import { useRouter } from "next/navigation";

const ButtonGoBackProduct = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={() => router.back()}
          className="bg-amber-400 rounded-lg px-10 py-3 uppercase font-bold cursor-pointer hover:bg-amber-500 text-center"
        >
          volver
        </button>
      </div>
    </>
  );
};

export default ButtonGoBackProduct;
