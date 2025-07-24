import { useEffect, useState } from 'react'
import Signup from './components/signup.jsx'
import './App.css'
function App() {
  const [anime, setAnime] = useState('')
        console.log(anime)

  const [response, setResponse] = useState(null)
 
  async function datafetch(animechar) {
    try {
      let data = await fetch(`https://api.jikan.moe/v4/characters?q=${animechar}`)
      let res = await data.json();
      console.log(res)
      setResponse(res);
    }
    catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      {<Signup /> && <div className='header'>
        <h1>Anime Character Search</h1>
        <p>Search for your favorite anime characters!</p>
        <p>Enter the name of the character you want to search for.</p>
        <div className='app'>
          <input type="text" name="anime" id="anime" onChange={(e) => setAnime(e.target.value)} />
          <button className='btn' onClick={() => datafetch(anime)}> search </button>
          <div className="card">
            {response && response?.data?.map((item, index) => (
              <div key={index}>
                <h2>{item.name}</h2>
                <img src={item.images.jpg.image_url} alt={item.name} />
                <p>{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </div>}
    </>
  )
}

export default App
