import { useState } from 'react'

import './App.css'
import Bio from './components/Bio/Bio'
import ShowAndTell from './components/ShowAndTell/ShowAndTell'
import ContactMe from './components/ContactMe/ContactMe'
import gamepic from './images/gamepic.png'
import cryptopic from './images/cryptopic.png'
import cryptocoin from './images/crypto-currency-coin.png'



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
    links: { github: "https://github.com/meleyhaddis/poke-wordle", live: "https://melth99.github.io/Wordle/" }
  }

  const crypto = {
    title: "MyCryptoHaven",
    description: "A crypto tracker",
    bullets: ["A crypto tracker", "A crypto tracker", "A crypto tracker"],
    imgs: [cryptopic, cryptocoin],
    links: { github: "https://github.com/meleyhaddis/sanrio-crypto-friends", live: "https://mycryptohaven.netlify.app/" }
  }

  return (
    <div className="app-container">
      <div className="header-section">
        <h1>meley.</h1>
        <h3>Software Engineer</h3>
      </div>

      <div className="bio-section">
        <Bio />
      </div>

      <div className="contact-section">
        <ContactMe />
      </div>



      <div className="projects-section">

        <ShowAndTell show={pokeWordle} />
        <ShowAndTell show={crypto} />

      </div>
    </div>
  )
}

export default App
