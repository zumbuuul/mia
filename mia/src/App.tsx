import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { query, collection, getDocs, orderBy, limit, addDoc } from "firebase/firestore"
import db from "../firebase/firebase.ts"

function App() {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleQueryChange = (newQuery: string) => setSearchQuery(newQuery)

  const fetch = async () => {
    const ref = collection(db, "books")
    const q = query(ref, orderBy(`searchIndex.sc`), limit(5))
    const snap = await getDocs(q)
    snap.forEach(doc => console.log(doc.data()))
  }

  const add = () => {
    const data = {
      title: searchQuery,
      searchIndex: format(searchQuery)
    }
    addDoc(collection(db, "books"), data)
  }

  const format = (title: string) => {
    const words = title.split('')
    const searchIndex: { [key: string]: boolean } = {}

    let prev = ''
    for (const char of words) {
      const key = prev + char
      searchIndex[key] = true
      prev = key
    }
    return searchIndex
  }

  fetch()
  return (
    <>
      <div>
        <a href="google.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <input value={searchQuery} onChange={(e) => handleQueryChange(e.target.value)}></input>
        <button onClick={() => { add() }}>dodaj</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
