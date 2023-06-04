import { useOrganization, useUser } from '@clerk/nextjs'
import React, { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { RouterOutputs, api } from '~/utils/api'

interface IProductForm {
    name: string; 
    description: string;
    price: number;
    image: string;
    //categories: any; 

}

export default function ProductWizard({ selectedProductId, setSelectedProduct }: { selectedProductId?: null | number, setSelectedProduct: (id: null | number) => void }) {
    
    const { user } = useUser()

    const { mutate } = api.product.create.useMutation()

    const update = api.product.update.useMutation()
    // const { 
    //     data: selectedProduct,
    //     error: selectedProductError,
    //     isFetching: isFetchingSelectedProduct
    // } = useQuery()
    
     const product = api.product.getUnique.useQuery({ id: selectedProductId! }, { enabled: !!selectedProductId })
    
    useEffect(() => {
        if(product.data) {
            setProductForm(product.data as IProductForm)
        }
    },[product.data])
    
    const initialProductForm = {
        name: '',
        description: '',
        price: 0,
        image: '',
        //categories: never[]

    }
    const [productForm, setProductForm] = useState(initialProductForm)

    if(!user) return null 
            
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

       if(selectedProductId) {
        update.mutate({ id: selectedProductId, ...productForm})
        setSelectedProduct(null)
       }
       if(!selectedProductId) {
           mutate(productForm)
       }
       setProductForm(initialProductForm)

    }
    const handleSetProductForm = (event: ChangeEvent<HTMLInputElement>, field: string) => {
        switch(field) {
            case 'name':
                setProductForm(prevState => ({
                    ...prevState,
                    name: event.target.value 
                }))
                break;
            case 'description':
                setProductForm(prevState => ({
                    ...prevState,
                    description: event.target.value 
                }))
                break;
            case 'price':
                setProductForm(prevState => ({
                    ...prevState,
                    price: Number(event.target.value)
                }))
                break;
            case 'image':
                setProductForm(prevState => ({
                    ...prevState,
                    image: event.target.value 
                }))
                break;
        }
    }

  console.log(product.data?.categories)
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col w-96 h-96 gap-4'>
            <input required onChange={(event) =>  handleSetProductForm(event, 'name')} value={productForm.name} name='name' placeholder='name' type="text" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'description')} value={productForm.description} name='description' placeholder='description' type="text" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'price')} value={productForm.price} name='price' placeholder='price' type="number" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'image')} value={productForm.image} name='image' placeholder='image' type="text" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'image')} value={productForm.image} name='image' placeholder='image' type="text" />
            
            <div className='w-56 bg-amber-900 bg-opacity-10 text-amber-900 rounded-sm p-4 flex flex-wrap gap-1'>
                <p className='w-fit text-amber-900 py-1 px-4 font-semibold'>Categories: </p>
                { product.data?.categories.map((category) => <span className='w-fit bg-amber-900 bg-opacity-10 text-amber-900 rounded-sm py-1 px-4' key={category.id}>{category.name}</span>)}
                </div>
            <button type='submit'>{selectedProductId ? 'Save' :  'Create' }</button>
        </form>
    </div> 

    
  )
}
