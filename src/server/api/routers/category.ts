import { TRPCError } from "@trpc/server";
import { error } from "console";
import { connect } from "http2";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  getSome: privateProcedure.input(
    z.object({
      productId: z.number()
    })
  )
  .query(async ({ ctx, input }) => {

    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.productId,
      },
      include: {
        categories: true
      }
    })

    if(product?.categories) {
      const categoriesContainingProduct = product.categories.map(p => p.categoryId)
      
      const filteredCategories = await ctx.prisma.category.findMany({
        where: {
          id: {
            notIn: categoriesContainingProduct
          }
        }
      })
      console.log({ filteredCategories })
      return filteredCategories
    }
    const categories = await ctx.prisma.category.findMany()
    return categories

    //return filteredCategories
  }),
  search: privateProcedure
  .input(
    z.object({
      query: z.string().max(128)
    })
  )
  .query(async ({ ctx, input }) => {
    
    const categories = await ctx.prisma.category.findMany({
      where:{
        name: {
          contains: input.query
        }
      }
    });

    return categories
  }),
  create: privateProcedure
  .input( z.object({ 
    name: z.string().max(128),
    productId: z.number()
   }))
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.productId
      }
    })

    if(product) {
      const category = await ctx.prisma.category.create({
        data: {
          name: input.name,
          products: {
            create: [
              {
                product: {
                  connect: { id: product.id },
                },
                //productId: product.id
              }
            ]
          }
        },
      })

      return category
  
      
    }
    return new TRPCError({ code: 'NOT_FOUND', message: 'Product Not Found' })
  }),
  connect: privateProcedure
  .input( 
    z.object({ 
      productId: z.number(),
      categoryId: z.number()
   }))
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.productId
      }
    })

    if(product) {
      const updatedCategory = await ctx.prisma.category.update({
        where : {
          id: input.categoryId ,
        },
        data: {
        products: {
          create: [
            {
              product: {
                connect: { id: product.id },
              },
              //productId: product.id
            }
          ]
        }
        },
      
    
      })

      return updatedCategory
  
      
    }
    return new TRPCError({ code: 'NOT_FOUND', message: 'Product Not Found' })
  }),
});
