import React from 'react';
import { string, func } from 'prop-types';
import Arrow from './Arrow';

const Slide = (props) => {
  const styles = {
    container:{
      backgroundImage: `url(${props.imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 600
    },
    metaDataContainer: {
      alignSelf: 'flex-end'
    },
    title: {
      color: '#FFFFFF'
    },
    description: {
      color: '#FFFFFF'
    }
  }

  return (
    <div className='props.content carousel-slide' style={styles.container}>
      <Arrow
        direction="left"
        click={ props.leftArrowClick }
        arrow="&#9664;"
      />
    <div style={styles.metaDataContainer}>
        <h1 className='carousel-title' style={styles.title}>{props.title}</h1>
        <div style={styles.description}>{props.description}</div>
      </div>
      <Arrow
        direction="right"
        click={ props.rightArrowClick }
        arrow="&#9654;"
      />
    </div>
  );
}

Slide.propTypes = {
  imgUrl: string.isRequired,
  title: string.isRequired,
  leftArrowClick: func.isRequired,
  rightArrowClick: func.isRequired,
  description: string.isRequired
}

export default Slide;
