import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'


function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Next.js Demo</h1>
      <h2>via Ryan Swanstrom</h2>
      <p>
        A basic Next.js Website
      </p>
      <hr className={styles.hr} />
      <p>It can be installed at many places.</p>
    </main>
  )
}

export default Home
