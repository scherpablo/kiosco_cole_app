"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Category } from "@prisma/client";

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const params = useParams<{ category: string }>();

  return (
    <>
      <Link href={`/order/${category.slug}`}>
        <div
          className={`${
            category.slug === params.category ? "bg-amber-400" : ""
          } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
          <div className="w-16 h-16 relative">
            <Image
              fill
              src={`/categories/icono_${category.slug}.png`}
              alt="Imagen Categoria"
            />
          </div>
          <p className="text-xl font-bold">{category.name}</p>
        </div>
      </Link>
    </>
  );
};
export default CategoryIcon;
