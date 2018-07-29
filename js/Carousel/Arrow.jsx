import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { oneOf, func } from 'prop-types';


const Arrow = (props) => (
    <div
      onClick={props.click}
      role="button"
      tabIndex={0}
      >
      <FontAwesomeIcon
        icon={`angle-${props.direction}`}
        color='#444444'
        size='4x'
        className='carousel-arrow'
      />
    </div>
  )


Arrow.propTypes = {
  direction: oneOf(['left', 'right']).isRequired,
  click: func.isRequired,
}

export default Arrow;
