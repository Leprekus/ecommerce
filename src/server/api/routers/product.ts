import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

//making the function async allows you to process the request
export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async({ ctx }) => {
    const products = await ctx.prisma.product.findMany(
       { 
        //take: 100, where: { authorId: 'xxxx'}
        orderBy: [{ createdAt: 'desc' }]
     }
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
  create: privateProcedure
  .input((
    z.object({
        name: z.string().max(100),
        description: z.string().max(1000),
        price: z.number().max(1000000),
        image: z.string().max(200),
    })
  ))
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.userId;
    //const categories = await prisma.category.findMany()

    
    const post = await ctx.prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        price: input.price,
        image: input.image,
       // categories,
        }
      })
    }),
  update: privateProcedure
  .input((
    z.object({
        id: z.number(),
        name: z.string().max(100),
        description: z.string().max(1000),
        price: z.number().max(1000000),
        image: z.string().max(200),
    })
  ))
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.userId;
    //const categories = await prisma.category.findMany()
    
    await ctx.prisma.product.update({
      where: {
        id: input.id
      },
      data: {
        id: input.id,
        name: input.name,
        description: input.description,
        price: input.price,
        image: input.image,
       // categories,
        }
      })
    }),
    
  getUnique: publicProcedure
  .input( 
    z.object({
      id: z.number()
    })
  )
  .query(async ({ ctx, input }) => {
    const product = await prisma.product.findUnique({ 
      where: {
        id: input.id
      }
    })
    if(!product) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Product Not Found'})
    
    return product

  })

});
