import { useState } from 'react'
import './style.css'
import Card from '../../components/Card/Card.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>LIVROS</h2>
    <Card />
    <Card />
    <Card />
    <Card />
    </>
  )
}

export default Home