import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";
import Link from "next/link";

async function getCategories() {
  return await prisma.category.findMany();
}

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="cursor-pointer">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
