import React from 'react'
import { string } from 'prop-types';
import HeaderLink from './common/HeaderLink'


class LandingContent extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='landingContent'>
        <HeaderLink
          title={`${this.props.name}'s watchlist`.toUpperCase()}
        />
        <HeaderLink
          title={`Top picks for ${this.props.name}`.toUpperCase()}
        />
        <HeaderLink
          title={`ShowTV originals`.toUpperCase()}
        />
        <HeaderLink
          title={`Popular Shows`.toUpperCase()}
        />
        <HeaderLink
          title={`Popular Movies`.toUpperCase()}
        />
      </div>
    );
  }

}

LandingContent.propTypes = {
  name: string.isRequired
}

export default LandingContent
