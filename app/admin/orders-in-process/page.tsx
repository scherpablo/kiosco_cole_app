"use client";

import useSWR from "swr";
import { OrderWithProducts } from "@/src/types";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import Spinner from "@/components/ui/Spinner";

const OrderPage = () => {
  const url = "/admin/orders-in-process/api";
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
        <Heading>Pedidos en Proceso</Heading>

        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 mt-5">
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay pedidos pendientes</p>
        )}
      </>
    );
};

export default OrderPage;
