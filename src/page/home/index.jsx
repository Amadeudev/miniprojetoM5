import { useState } from 'react'
import './style.css'
import CardList from '../../components/cardList/cardList.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>LIVROS</h2>
    <CardList />
    </>
  )
}

export default Home