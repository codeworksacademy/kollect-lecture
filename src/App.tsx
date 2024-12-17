import { useState } from 'react'
import './App.css'

type Card = {
  name: string
  teamName: string
  picture: string
  wins: number
  matches: number
  rarity: string
  teamColor: string
  value: number
  count: number
}


function App() {
  const collection: Card[] = [
    {
      name: 'Thorsten',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/thorsten.png',
      wins: 8,
      matches: 12,
      rarity: 'rare',
      teamColor: '#90ff74',
      value: 5.34,
      count: 1
    },
    {
      name: 'georgie',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/georgie.png',
      wins: 10,
      matches: 20,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 2.17,
      count: 2
    },
    {
      name: 'Sprinkles',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/sprinkles.png',
      wins: 11,
      matches: 11,
      rarity: 'ultra-rare',
      teamColor: '#90ff74',
      value: 8.84,
      count: 0
    },
    {
      name: 'Yubi',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/yubi.png',
      wins: 7,
      matches: 22,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 3.11,
      count: 0
    }
  ]

  const [cards, setCards] = useState([...collection])
  const [search, setSearch] = useState('')

  const alterCount = (index: number, n: number) => {
    event?.preventDefault()
    const newCards = [...cards]
    newCards[index].count += n
    if (newCards[index].count < 0) newCards[index].count = 0
    setCards(newCards)
  }

  const filteredCards = cards.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  const collectionTotal = cards.reduce((acc, card) => acc + card.value * card.count, 0).toFixed(2)
  // const filters = ['rare', 'common', 'ultra-rare']
  // const teams = cards.map(c => c.teamName).filter((v, i, a) => a.indexOf(v) === i)

  return (
    <section>

      <header>
        <h1>Kollect 🎴</h1>
        <div className="filters">
          <input type="text" placeholder='search' onChange={(event) => setSearch(event?.target.value)} />
          {/* <select onChange={(event) => setSearch(event?.target.value)}>
            <option value=''>all</option>
            {filters.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
          <select onChange={(event) => setSearch(event?.target.value)}>
            <option value=''>all</option>
            {teams.map(t => <option key={t} value={t}>{t}</option>)}
          </select> */}
        </div>
      </header>

      <main>

        <ul className='collection'>
          {filteredCards.map((card, index) => (
            <div className="player-card clickable" key={card.name} style={{ '--team-color': card.teamColor } as React.CSSProperties} onClick={alterCount.bind(null, index, 1)} onContextMenu={alterCount.bind(null, index, -1)}>
              <h4 className="card-count">{card.count}</h4>
              <img src={card.picture} alt={card.name} />
              <h2>{card.name}</h2>
              <p>{card.teamName}</p>
              <p className="stats">🏆 {card.wins} | 🏓 {card.matches}</p>
              <label>⭐ {card.rarity} - 🍌{card.value}</label>
            </div>
          ))}
        </ul>

        <div className="total" title='total value'>
          ${collectionTotal}
        </div>

      </main>



    </section>
  )
}

export default App
