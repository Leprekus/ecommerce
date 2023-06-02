import React, { ChangeEvent, useState } from 'react'
import { api } from '~/utils/api'

export default function CategoryWizard() {
    //search category
    //create category
    //pick categor
    const [value, setValue] = useState('')
    const { data } = api.category.getAll.useQuery()
    const { data: queriedCategories } = api.category.search.useQuery({ query: value })
    //const { mutation } = api.category.
    const [categories, setCategories] = useState(data || [])
    
    queriedCategories?.length && setCategories(prev => [...queriedCategories, ...prev])
    const handleAdd = () => {

        if(!queriedCategories || queriedCategories.length === 0) {
          
        }
    }
  return (
    <div>CategoryWizard
        <input onChange={(event) => setValue(event.target.value)} value={value} placeholder='Add Categories'/>
        {categories?.length ? 
         categories?.map(category => (
            <div key={category.id}>{category.name}</div>
         )):
         <p>No categories found</p>
        }
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
