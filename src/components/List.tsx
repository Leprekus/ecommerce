import React from 'react'
import type { ReactNode } from 'react'

export default function List({ children, color }: {children: ReactNode | string, color: string }) {


  return (
    <>
    <ul className=''>
        { 
        React.Children.map(children, (child, index) => (
            <li key={index}
            className={'my-3 py-2 px-6 w-72 h-12 hover:bg-' + color + '-100 hover:text-blue-600 transition-all delay-75 rounded-md flex justify-between items-center font-semibold'}>{child}</li>
          ))
        }
    </ul>
    </>
  )
}
