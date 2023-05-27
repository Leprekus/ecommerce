import React, { useState } from 'react'
import DashboardLayout from '~/components/Layouts/dashboard-layout'
import CreateProduct from '~/components/Products/ProductWizard'
import ProductsList from '~/components/Products/ProductsList'

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState<null | number>(null)
  return (
    <DashboardLayout>
        <ProductsList setSelectedProductId={setSelectedProductId}/>
        <CreateProduct selectedProductId={selectedProductId} setSelectedProduct={setSelectedProductId}/>
    </DashboardLayout>
  )
}
