import React from 'react'
import preload from '../data.json'

const Search = () => (
  <div className='search'>
    {preload.shows.map((show) =>
      <div className='show-card'>
        <img alt={`${show.title} Show Poster`} src={`../public/img/posters/${show.poster}`} />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    )}
  </div>
)

export default Search
