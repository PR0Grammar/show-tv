import React from 'react';
import { oneOf, func, element } from 'prop-types';

const Arrow = (props) => (
    <div
      className={`slide-arrow-${props.direction}`}
      onClick={props.click}
      >
      {props.arrow}
    </div>
)

Arrow.propTypes = {
  direction: oneOf(['left', 'right']).isRequired,
  click: func.isRequired,
  arrow: element.isRequired
}

export default Arrow;
