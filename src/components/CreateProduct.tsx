import { useOrganization, useUser } from '@clerk/nextjs'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { api } from '~/utils/api'

export default function CreateProduct() {
    const { user } = useUser()

    const { mutate } = api.product.create.useMutation()
    const initialProductForm = {
        name: '',
        description: '',
        price: 0,
        image: '',

    }
    const [productForm, setProductForm] = useState(initialProductForm)

    if(!user) return null 


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
       mutate(productForm)
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

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col w-96 h-96 gap-4'>
            <input required onChange={(event) =>  handleSetProductForm(event, 'name')} value={productForm.name} name='name' placeholder='name' type="text" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'description')} value={productForm.description} name='description' placeholder='description' type="text" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'price')} value={productForm.price} name='price' placeholder='price' type="number" />
            <input required onChange={(event) =>  handleSetProductForm(event, 'image')} value={productForm.image} name='image' placeholder='image' type="text" />
            <button type='submit'>Create</button>
        </form>
    </div> 
  )
}
