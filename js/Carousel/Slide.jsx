import React from 'react';
import { string } from 'prop-types';

const Slide = (props) => {
  const styles = {
    container:{
      backgroundImage: `url(${props.imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '1080'
    },
    title: {
      color: '#000'
    }
  }

  return (
    <div className='props.content' style={styles.container}>
      <h1 className='carousel-title'>{props.title}</h1>
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
