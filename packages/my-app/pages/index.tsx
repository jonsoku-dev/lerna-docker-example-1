import { useHello } from '@jonsoku/hooks'
import {test} from '@jonsoku/sample'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const hello = useHello()
  return (
    <div>{hello}-{test}</div>
  )
}

export default Home
