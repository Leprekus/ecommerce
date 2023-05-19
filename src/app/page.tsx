import React, { Suspense } from 'react'
import { api } from '~/utils/api'
import Loading from './components/Loading'

export default function Home() {
  const Test = React.lazy(() => import('./components/Test'))
  const example = api.example.getAll.useQuery()
  example.data
  const user = api.example.getAll.useQuery()
  //when hovering this should match the prisma model its referring to
  user.data

  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Test/>
      </Suspense>

    </div>
  )
}
