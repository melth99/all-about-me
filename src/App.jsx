import { useState } from 'react'

import './App.css'
import Bio from './components/Bio'
import ShowAndTell from './components/ShowAndTell'
import ContactMe from './components/ContactMe'
import gamepic from './images/gamepic.png'
import Cryptopic from './images/crypto.png'
import cryptogif from './images/cryptogif.gif'


function App() {


  const [show, setShow] = useState([
    {
      title: "",
      description: "",
      bullets: [],
      imgs: [],
      links: []
    }]
  )

  const pokeWordle = {
    title: "Poke Wordle",
    description: "A wordle clone that uses pokemon names",
    bullets: ["A wordle clone that uses pokemon names", "A wordle clone that uses pokemon names", "A wordle clone that uses pokemon names"],
    imgs: [gamepic, "https://img.pokemondb.net/sprites/black-white/normal/pikachu-f.png"],
    links: [{ github: "https://github.com/meleyhaddis/poke-wordle", live: "https://melth99.github.io/Wordle/" }]
  }

  const crypto = {
    title: "MyCryptoHaven",
    description: "A crypto tracker",
    bullets: ["A crypto tracker", "A crypto tracker", "A crypto tracker"],
    imgs: [Cryptopic, cryptogif],
    links: [
      { github: "https://github.com/meleyhaddis/crypto-tracker", live: "https://mycryptohaven.netlify.app/" },
      { github: "https://github.com/meleyhaddis/sanrio-crypto-friends", live: "https://mycryptohaven.netlify.app/" }
    ]
  }

  return (
    <>
      <h1>Meley Haddis</h1>
      <h2>Software Engineer</h2>
      <ContactMe />

      <ul>
        <li>
          <Bio />
        </li>
        <div className='project-block'>
          <li>
            <ShowAndTell show={pokeWordle} />
          </li>
        </div>
        <div className='project-block'>
          <li>
            <ShowAndTell show={crypto} />
          </li>
        </div>
      </ul>
    </>
  )
}

export default App
