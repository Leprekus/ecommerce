import React, { useState } from 'react'
import { api } from '~/utils/api'

export default function CategoryWizard() {
    //search category
    //create category
    //pick categor
    const { data: categories } = api.category.getAll.useQuery()
    const [value, setValue] = useState('')
  return (
    <div>CategoryWizard
        <input onChange={(event) => setValue(event.target.value)} value={value} placeholder='Add Categories'/>
        {categories?.length ? 
         categories?.map(category => (
            <div key={category.id}>{category.name}</div>
         )):
         <p>No categories found</p>
        }
        <button>Add</button>
    </div>
  )
}
