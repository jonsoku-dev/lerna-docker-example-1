import { useHello } from '@jonsoku/hooks'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const hello = useHello()
  return (
    <div>{hello}</div>
  )
}

export default Home
