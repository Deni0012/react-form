import { useState } from 'react'
import './App.css'

const listArticle = [
  {
    id: 1,
    title: "Playlist"
  },
  {
    id: 2,
    title: "Ranch"
  },
  {
    id: 3,
    title: "Flop"
  },
  {
    id: 4,
    title: "Hellvisback"
  },
  {
    id: 5,
    title: "Midnite"
  },
]

function App() {
  const [newArticle, setNewArticle] = useState('')

  return (
    <>
      <ul>
        {listArticle.map(listArticle => (
          <li key={listArticle.id}>{listArticle.title}</li>
        ))}
      </ul>

    </>
  )
}

export default App;
