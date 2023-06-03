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
        orderBy: [{ createdAt: 'desc' }],
        include: { categories: true }
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
        //categoriesIds:  z.number().array(),
      
    })
  ))
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.userId;    // const categories = ctx.prisma.category.findMany({
    //   where: {
    //     id: { in: input.categoriesIds }
    //   }
    // })
    
    const product = await ctx.prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        price: input.price,
        image: input.image,
        //categories,
        },
        include: {
          categories: true
        }
      })

    return product 

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
        id: input.id,
      },
      include: { categories: true }
    })

    if(!product) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Product Not Found'})
    
    if(product?.categories) {

      const categoriesIds = product.categories.map(({ categoryId }) => { 
       if(!categoryId) {
         throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Category Not Found' })
       }
       return categoryId
     })

     const categories = await ctx.prisma.category.findMany({
       where: { id: { in: categoriesIds } }
     })

     return {
      ...product,
      categories,
     }

    }

    return product

  })

});
