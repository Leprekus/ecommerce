import { useOrganization, useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import DashboardLayout from '~/components/Layouts/dashboard-layout'
import CreateProduct from '~/components/Products/ProductWizard'
import ProductsList from '~/components/Products/ProductsList'

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState<null | number>(null)
    const { 
      organization,
      membership,
      isLoaded
     } = useOrganization()
    
    if(!isLoaded) return null
    console.log(membership?.role)
    console.log({organization})
  return (
    <DashboardLayout>
        <ProductsList setSelectedProductId={setSelectedProductId}/>
        <CreateProduct selectedProductId={selectedProductId} setSelectedProduct={setSelectedProductId}/>
    </DashboardLayout>
  )
}
