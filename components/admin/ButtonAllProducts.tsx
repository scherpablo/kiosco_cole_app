import Link from "next/link"

const ButtonAllProducts = () => {
  return (
    <>
    <div className="flex flex-col">
        <Link
        href={`/admin/products-list`}
        className="bg-amber-400 rounded-lg px-10 py-3 uppercase font-bold cursor-pointer hover:bg-amber-500 text-center"
        >todos los productos</Link>
    </div>
    </>
  )
}
export default ButtonAllProducts