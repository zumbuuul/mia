import type { PostgrestError } from "@supabase/supabase-js"
import "./App.css"
import supabase from "./utils/supabase"
import { useState } from "react"

export default function App() {

  const [book, setBook] = useState({ isbn: '', title: '', author: '' })
  const [notification, setNotification] = useState("xdlol")

  function handleSupabaseRespose(response: PostgrestError | null) {
    console.log(response)
    if (!response) {
      setNotification(`Knjiga ${book.title} - ${book.isbn} je uspešno dodana`)
      const refresh = { ...book, isbn: '' }
      setBook(refresh)
    }
    else setNotification(`Greška: ${response.message}`)

  }

  return (
    <>
      <main>
        <h1>Унос књига</h1>
        <input value={book.isbn} onChange={(e) => setBook({ ...book, isbn: e.target.value })} type="text" placeholder="ИСБН" />
        <br />
        <input onChange={(e) => setBook({ ...book, title: e.target.value })} type="text" placeholder="Наслов" />
        <br />
        <input onChange={(e) => setBook({ ...book, author: e.target.value })} type="text" placeholder="Аутор" />
        <br />
        <button onClick={async () => {
          if (book.author == '' || book.isbn == '' || book.title == '') {
            setNotification('Greška - popuniti sva polja')
            return;
          }; const { error } = await supabase.from("book").insert(book); handleSupabaseRespose(error)
        }}>ДОДАЈ</button>
      </main>

      <div className="notification">
        {notification.includes('dodana') ? <p className="success">{notification}</p> : <>{notification.includes('Greška') ? <p className="error">{notification}</p> : null}</>}
      </div>

    </>
  )
}