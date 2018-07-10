import React from 'react'
import preload from '../data.json'
import Card from './Card'

const Search = () => (
  <div className='search'>
    {preload.shows.map((show) =>
      <Card key={show.imdbID} show={show} />
    )}
  </div>
)

export default Search
