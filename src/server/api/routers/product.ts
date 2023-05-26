import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

//making the function async allows you to process the request
export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async({ ctx }) => {
    const products = await ctx.prisma.product.findMany(
      // { take: 100, where: { authorId: 'xxxx'} }
    );

    //creates a relation between product and user
    // const users = await clerkClient.users.getUserList({
    //   userId: products.map((product) => product.userId)
    // })

    // return products.map((product) => ({
    //   product, 
    //   author: users.find((user) => user.id)
    // }))
    return products
  }),
});
