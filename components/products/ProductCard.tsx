import Image from "next/image";
import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import AddToOrderButton from "./AddToOrderButton";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const imagePath = getImagePath(product.image);

  return (
    <div className="border rounded-lg bg-white">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen producto ${product.name}`}
        quality={20}
        className="rounded-t-lg md:w-[100%] md:h-auto"
      />
      <div className="p-5">
        <h3
          className="text-2xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis 
        cursor-pointer hover:whitespace-normal hover:overflow-visible"
        >
          {product.name}
        </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddToOrderButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
