import React from 'react';
import { oneOf, func, string } from 'prop-types';

const styles = {
  container: {
    color: '#FFFFFF',
    opacity: '1'
  }
}
const Arrow = (props) => (
    <div
      className={`slide-arrow-${props.direction}`}
      onClick={props.click}
      role="button"
      tabIndex={0}
      style = {styles.container}
      >
      {props.arrow}
    </div>
)

Arrow.propTypes = {
  direction: oneOf(['left', 'right']).isRequired,
  click: func.isRequired,
  arrow: string.isRequired
}

export default Arrow;
