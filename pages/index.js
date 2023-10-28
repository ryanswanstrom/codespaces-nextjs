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
      <h1>Ryan Swanstrom Next.js Demo</h1>
      <hr className={styles.hr} />  
      <p>
        This site serves as a demo Next.js website to be deployed on a number of different static site hosts.
      </p>
      <hr className={styles.hr} />
      <p>
        Follow Ryan
      </p>
      <ul>
        <li> <a href="https://www.threads.net/@ryan.swanstrom">Ryan Swanstrom on Threads</a> </li>
        <li> <a href="https://ryanswanstrom.com/">Ryan Swanstrom Website</a> </li>
        <li> <a href="https://www.linkedin.com/in/ryanswanstrom/">Ryan Swanstrom on LinkedIn</a> </li>
      </ul>
    </main>
  )
}

export default Home
