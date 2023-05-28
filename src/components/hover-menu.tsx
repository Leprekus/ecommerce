import type { ReactNode } from 'react'

export default function HoverMenu({ children, position }: { children: ReactNode, position: string }) {
  return (
    <div className={'sub-menu absolute ' + position + ' bg-white transition-all mt-2 max-w-full'}>
        <div className='flex flex-wrap gap-12 shadow-lg shadow-slate-200 p-10 rounded-md w-fit max-w-full mx-auto'>
        { children }
        </div>
    </div>
  )
}
