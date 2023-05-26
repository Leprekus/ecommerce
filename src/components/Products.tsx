'use client'
import { TRPCError } from '@trpc/server'
import React from 'react'
import { api } from '~/utils/api'

export default function Products() {
    const product = api.product.getAll.useQuery()
    //when hovering this should match the prisma model its referring to
    product.data
    console.log(product.data)
  return (
    <div>
        {product.data?.map((data) => {
          if(!data) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Data for Product not found'})
      return(<div key={data.id}>
        <p>{data.name}</p>
      </div>)})}
    </div>
  )
}
