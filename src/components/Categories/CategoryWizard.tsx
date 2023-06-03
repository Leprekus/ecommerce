import React, { ChangeEvent, useEffect, useState } from 'react'
import { api } from '~/utils/api'

export default function CategoryWizard({ selectedProductId }: { selectedProductId: null | number }) {
    //search category
    //create category
    //pick categor
    const [value, setValue] = useState('')
    const { data } = api.category.getAll.useQuery()
    const { data: queriedCategories } = api.category.search.useQuery({ query: value })
    const { mutate } = api.category.create.useMutation()
    //const { mutation } = api.category.
    const [categories, setCategories] = useState(data || [])
    useEffect(() => {
      queriedCategories?.length && setCategories(prev => [...queriedCategories, ...prev])
    }, [queriedCategories, queriedCategories?.length])
    
    const handleAdd = () => {

        if(!queriedCategories || queriedCategories.length === 0) {
          console.log('ran')
          selectedProductId && mutate({ name: value, productId: selectedProductId }) 
          console.log('finished')
        }
    }
  return (
    <div className='flex flex-col'>CategoryWizard
        <input onChange={(event) => setValue(event.target.value)} value={value} placeholder='Add Categories'/>
        {categories?.length ? 
         categories?.map(category => (
            <span key={category.id} className='p-1 rounded-md bg-indigo-400'>{category.name}</span>
         )):
         <p>No categories found</p>
        }
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
