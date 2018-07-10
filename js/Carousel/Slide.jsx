import React from 'react';
import { string } from 'prop-types';

const Slide = (props) => {
  const styles = {
    backgroundImage: `url(${props.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='props.content' style={styles}>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
    </div>
  );
}

Slide.propTypes = {
  imgUrl: string.isRequired,
  title: string.isRequired,
  description: string.isRequired
}

export default Slide;
