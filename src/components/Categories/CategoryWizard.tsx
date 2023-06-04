import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { type RouterOutputs, api } from '~/utils/api'

type Categories = RouterOutputs['category']['getAll'][number]
export default function CategoryWizard({ selectedProductId }: { selectedProductId: null | number }) {
    //search category
    //create category
    //pick categor
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
    // useEffect(() => {
    //   queriedCategories?.length && setCategories(prev => [...queriedCategories, ...prev])
    // }, [queriedCategories?.length])
    
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
    <div className='flex flex-col'>CategoryWizard
        <input onChange={(event) => setValue(event.target.value)} value={value} placeholder='Add Categories'/>

        {categories?.length ? 
         categories?.map(category => (
            <button key={category.id} 
            onClick={() => null}
            className='p-1 rounded-md bg-indigo-400'>{category.name}</button>
         )):
         <p>No categories found</p>
        }
        <button onClick={handleAdd} 
        className={selectedProductId ? '' : 'cursor-not-allowed text-gray-400'}
        disabled={selectedProductId ? false : true}>Add</button>
    </div>
  )
}
