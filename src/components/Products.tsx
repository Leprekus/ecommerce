'use client'
import React from 'react'
import { api } from '~/utils/api'

export default function Products() {
    const product = api.product.getAll.useQuery()
    //when hovering this should match the prisma model its referring to
    product.data
    console.log(product.data)
  return (
    <div>
        {product.data?.map((data) => 
      <div key={data.id}>
        <p>{data.name}</p>
      </div>)}
    </div>
  )
}
