import React from 'react';
import { oneOf, func, string } from 'prop-types';

const Arrow = (props) => (
    <div
      className={`slide-arrow-${props.direction}`}
      onClick={props.click}
      role="button"
      tabIndex={0}
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
