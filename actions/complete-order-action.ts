"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/src/lib/prisma";

const completeOrder = async (formData: FormData) => {
  const orderId = formData.get("order-id")!; //el simbolo ! indica que el valor de orderId existe

  try {
    await prisma.order.update({
      where: {
        id: +orderId, //el + convierte a orderId de tipo string a number
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now()),
      },
    });

    revalidatePath(`/admin/orders`);
  } catch (error) {
    console.log(error);
  }
};

export default completeOrder;
