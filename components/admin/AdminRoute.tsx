"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

const AdminRoute = ({ link }: AdminRouteProps) => {
  const pathName = usePathname();
  const isActivate = pathName.startsWith(link.url);

  return (
    <>
      <Link
        href={link.url}
        className={`${
          isActivate ? "bg-amber-400" : ""
        } font-bold text-lg border-t border-gary-200 p-3 last-of-type:border-b`}
        target={link.blank ? "_blank" : ""}
      >
        {link.text}
      </Link>
    </>
  );
};

export default AdminRoute;
