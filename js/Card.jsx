import React from 'react'

const Card = props => (
  <div className='props.show-card'>
    <img alt={`${props.show.title} props.show Poster`} src={`../public/img/posters/${props.show.poster}`} />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </div>
);

export default Card;
