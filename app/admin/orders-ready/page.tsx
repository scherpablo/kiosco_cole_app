"use client";

import useSWR from "swr";
import { OrderWithProducts } from "@/src/types";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import Spinner from "@/components/ui/Spinner";
import OrdrerItemList from "@/components/order/OrdrerItemList";
import OrderCard from "@/components/order/OrderCard";

const OrdersPage = () => {
  const url = "/admin/orders-ready/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <Spinner />;

  if (error) return <p className="text-center">Error al cargar los datos</p>;

  if (data)
    return (
      <>
        <Title>Panel de Administración - Pedidos</Title>
        <Heading>Pedidos Terminados</Heading>
{/* 
        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <OrdrerItemList key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p>No hay pedidos listos</p>
        )} */}
        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 mt-5">
            {data.map((order) => (
              <OrdrerItemList key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p>No hay pedidos listos</p>
        )}
      </>
    );
};

export default OrdersPage;
