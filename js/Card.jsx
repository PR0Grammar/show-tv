import React from 'react';
import { shape, string } from 'prop-types';

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

Card.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
}

export default Card;
