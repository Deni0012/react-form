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

  const listArticleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Album")
  }

  return (
    <>
      <ul>
        {listArticle.map(listArticle => (
          <li key={listArticle.id}>{listArticle.title}</li>
        ))}
      </ul>

      <form onSubmit={listArticleSubmit}>
        <input type="text"
          value={newArticle}
          onChange={(e => setNewArticle(e.target.value))} />
        <button>Invia</button>
      </form>

    </>
  )
}

export default App;
