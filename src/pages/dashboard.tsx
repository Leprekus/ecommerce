import { useOrganization, useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import CategoryWizard from '~/components/Categories/CategoryWizard'
import DashboardLayout from '~/components/Layouts/dashboard-layout'
import ProductWizard from '~/components/Products/ProductWizard'
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
        <ProductsList/>
        <ProductWizard />
        <CategoryWizard/>
    </DashboardLayout>
  )
}
