'use client'
import { TRPCError } from '@trpc/server'
import React from 'react'
import { api } from '~/utils/api'
import Loading from './Loading'

export default function Products() {
    const product = api.product.getAll.useQuery()
    //when hovering this should match the prisma model its referring to
    product.data
    console.log(product.data)
  
  if(product.isLoading) return <Loading/>
  if(!product.data) return <p>Something Went Wrong</p>
  return (
    <div>
        {product.data?.map((data) => (
      <div key={data.id}>
        <p>{data.name}</p>
      </div>))}
    </div>
  )
}
