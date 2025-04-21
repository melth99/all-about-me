import { useState } from 'react'

import './App.css'
import Bio from './components/Bio/Bio'
import ShowAndTell from './components/ShowAndTell/ShowAndTell'
import ContactMe from './components/ContactMe/ContactMe'
import ThisPortfolio from './components/ThisPortfolio/ThisPortfolio'

// Image paths
const gamepic = '/gamepic.png'
const cryptopic = '/cryptopic.png'
const cryptocoin = '/crypto-currency-coin.png'
const jinx = '/jinxsprite.png'
const leagueImg = '/lolteamspic.png'
const chat = '/chat-bubble.jpg'
const gitCentralPic = '/gitcentralpic.png'

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
    title: "PokeWordle",
    description: "Pokemon Wordle is a fun twist on the popular NYT's Wordle. This game fetches Pokemon data from the PokeAPI. Each game, a Pokemon from GENI-IV is randomly selected (excluding Pokemon with names with punctuation) The number of tries depends on the number of letters in the selected Pokemon's name, so difficulty should not be affected by name length. Users have the option of typing on their personal keyboard or clicking on the provided virtual keyboard. Feedback is provided and each attempt is saved to prevent repeated mistakes.",
    bullets: ["Developed advanced game logic to ensure engaging gameplay and fair difficulty scaling",
      "Designed a dynamic UI featuring a virtual keyboard and a color-coded feedback system for intuitive user interaction feedback system",
      "Implemented error handling and input validation to enhance user experience",
      "Technologies: PokeAPI, HTML, CSS, JavaScript"],
    imgs: [gamepic, "https://img.pokemondb.net/sprites/black-white/normal/pikachu-f.png"],
    links: { github: "https://github.com/melth99/Wordle", live: "https://melth99.github.io/Wordle/" }
  }

  const crypto = {
    title: "MyCryptoHaven",
    description: "Cryptocurrency can be confusing and even intimidating for many. MyCryptoHaven aims to simplify the learning process by offering a cryptocurrency purchasing simulator designed to educate users. With MyCryptoHaven, users can simulate buying cryptocurrencies using any nation's currency, all without financial risk. ",
    bullets: ["Intuative UI! Allows Seamlessly navigate through an easy-to-use interface ", "Fetches Real-Time market data", "Allows users to compare coin values across any nation's currency", " Explore market trends from specific dates", "Enhances financial literacy with accessible explanations.", "Technologies: React, HTML, CSS, Node.js, Express, CoinLayerAPI, Heroku"],
    imgs: [cryptopic, cryptocoin],
    links: { github: "https://github.com/melth99/Sanrio-Crypto-Friends-Frontend", live: "https://mycryptohaven.netlify.app/" }
  }

  const league = {
    title: "My League Planner",
    description: "League of Legends is a fun twist on the popular NYT's Wordle. This game fetches Pokemon data from the PokeAPI. Each game, a Pokemon from GENI-IV is randomly selected (excluding Pokemon with names with punctuation) The number of tries depends on the number of letters in the selected Pokemon's name, so difficulty should not be affected by name length. Users have the option of typing on their personal keyboard or clicking on the provided virtual keyboard. Feedback is provided and each attempt is saved to prevent repeated mistakes.",
    bullets: ["Team Creation: Users can create teams by selecting champions for 5 different League of Legends roles (top, jungle, mid, bot, support)",
      "Team Management: Functionality to view, update, and delete teams Champion Information", "Champion Information: Users can view information about each champion, including their abilities, lore, and more.", "Accessed Champion Data from Riot Games Developer API", "Implemented JSON Web Tokens (JWT) for secure user authentication and authorization.",
      "Technologies: Riot Games Devleoper API,Python, JSON Web TokensDjango, PostgreSQL, Django Template Language (DTL), Heroku"],
    imgs: [leagueImg, jinx],
    links: { github: "https://github.com/melth99/lol_project", live: "https://lol-teams-app-b552da9dd887.herokuapp.com/" }
  }

  const allAboutMe = {
    
  }

  const gitCentral = {
    title: "Git Central",
    description: "A reddit-inspired full-stack forum platform where users can create, discuss, and engage with topics via a forum. It provides a centralized platform to view, update, and delete repositories, as well as to create new ones.",
    bullets: ["Unique UI/UX design", "allowed viewing priviallages to users not logged in/without JSON Web Tokens", "Full CRUD functionality on comments and posts - specific to original poster", "Encrypted user password data contributes to a secure environment", "Implemented JSON Web Tokens (JWT) for secure user authentication and authorization.", "Technologies: React, Node.js, MongoDB, Express, JSON Web Tokens"],
    imgs: [gitCentralPic, chat],
    links: { github: "https://github.com/Michael-Anderson92/Michael-Anderson92-GitCentral-MERN-CRUD-App-Front-End/tree/main", live: "https://gitcentral.netlify.app/" }
  }
  return (
    <div className="app-container">
      <div className="header-section">
        <h1>meley</h1>
        <p className="scroll-down"> Scroll ↓</p>
      </div>

        <div className="bio-section" id="scroll-down1">
          <Bio />
        </div>

        <div className="contact-section" id="scroll-down2">
          <ContactMe />
        </div>

        <div className="projects-section" id="scroll-down3">
          <ShowAndTell show={pokeWordle} />
          <ShowAndTell show={crypto} />
          <ShowAndTell show={league} />
          <ShowAndTell show={gitCentral} />
          <ThisPortfolio />
        </div>
      </div>

  )
}

export default App
