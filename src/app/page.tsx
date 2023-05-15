import React, { Suspense } from 'react'
import Loading from './components/Loading'

export default function Home() {
  const Test = React.lazy(() => import('./components/Test'))
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Test/>
      </Suspense>

    </div>
  )
}
