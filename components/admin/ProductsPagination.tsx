import Link from "next/link";

type ProductPageProps = {
  page: number;
  totalPages: number;
};

const ProductsPagination = ({ page, totalPages }: ProductPageProps) => {
  const pagesNumnber = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <nav className="flex justify-center py-10 gap-1 text-sm">
        {page > 1 && (
          <Link
            href={`/admin/products-list?page=${page - 1}`}
            className="bg-white px-4 py-2 mr-3 hover:bg-amber-400 hover:font-black
          text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            &laquo;
          </Link>
        )}

        {pagesNumnber.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`/admin/products-list?page=${pageNumber}`}
            className={ `${page === pageNumber ? "bg-amber-400 font-black" : "bg-white" } px-4 py-2 
            text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0` }
          >
            {pageNumber}
          </Link>
        ))}

        {page < totalPages && (
          <Link
            href={`/admin/products-list?page=${page + 1}`}
            className="bg-white px-4 py-2 ml-3 hover:bg-amber-400 hover:font-black
           text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            &raquo;
          </Link>
        )}
      </nav>
    </>
  );
};

export default ProductsPagination;
