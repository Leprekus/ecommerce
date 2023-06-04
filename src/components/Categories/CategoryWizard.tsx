import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useCategoriesActions } from '~/stores/categories-store'
import { useSelectCurrentProduct } from '~/stores/products-store'
import { type RouterOutputs, api } from '~/utils/api'

type Categories = RouterOutputs['category']['getAll'][number]
export default function CategoryWizard() {
    //search category
    //create category
    //pick categor
    const selectedProductId = useSelectCurrentProduct()
    const { addToCategories } = useCategoriesActions()

    const [value, setValue] = useState('')
    const { data } = api.category.getAll.useQuery()
    const { data: queriedCategories } = api.category.search.useQuery({ query: value })
    const { mutate } = api.category.create.useMutation()
    const { mutate: update } = api.category.connect.useMutation()
    //const { mutation } = api.category.
    const [categories, setCategories] = useState<Categories[] | []>(data || [])

    useMemo(() => {
      if(queriedCategories) {
        const mergedArray = [...queriedCategories, ...categories]
        const uniqueIds = Array.from(new Set(mergedArray.map(obj => obj.id)))
        const uniqueCategories = uniqueIds.map(id => mergedArray.find(obj => obj.id === id)) as Categories[];
        setCategories(uniqueCategories)
      }
      queriedCategories && setCategories(prev => [...new Set<Categories>([...queriedCategories, ...prev])]);
    }, [queriedCategories?.length])
    
    const handleAdd = () => {

        //creates a new category
        if(!queriedCategories || queriedCategories.length === 0) {
          console.log('ran')
          selectedProductId && mutate({ name: value, productId: selectedProductId }) 
          console.log('finished')
          return
        }
        //adds existing category
        if(queriedCategories[0] && selectedProductId) {
          const { id } =  queriedCategories[0]
          update({ productId: selectedProductId, categoryId: id })
        }
    }
  return (
    <div className='flex flex-wrap justify-between w-44 gap-1'>CategoryWizard
        <input className='min-w-full'
         onChange={(event) => setValue(event.target.value)} value={value} placeholder='Add Categories'/>

        {categories?.length ? 
         categories?.map(category => (
            <button key={category.id} 
            onClick={() => addToCategories(category)}
            className='py-1 px-2 rounded-sm bg-indigo-400 bg-opacity-20 w-fit'>{category.name}</button>
         )):
         <p>No categories found</p>
        }
        <button onClick={handleAdd} title={selectedProductId ? '' : 'Select a product to add a category'}
        className={`min-w-full text-center transition-all py-0.5 ${selectedProductId && value ? 'bg-gray-100 rounded-sm' : 'cursor-not-allowed text-gray-400'}`}
        disabled={selectedProductId ? false : true}>Add</button>
    </div>
  )
}
