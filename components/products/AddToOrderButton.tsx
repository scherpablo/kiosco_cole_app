"use client";

import useStore from "@/src/store";
import { Product } from "@prisma/client";

type AddToOrderButtonProps = {
  product: Product;
};

const AddToOrderButton = ({ product }: AddToOrderButtonProps) => {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
      onClick={() => addToOrder(product)}
    >
      agregar
    </button>
  );
};
export default AddToOrderButton;
