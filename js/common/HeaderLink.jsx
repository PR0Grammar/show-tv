import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#AAAAAA',
    fontSize: 26,
    fontWeight: 200
  }
}

const HeaderLink = (props) => (
  <div style={styles.container}>
    <h1 style={styles.title}>{props.title}</h1>
    <FontAwesomeIcon
      icon='angle-right'
      color='#AAAAAA'
      size='2x'
     />
  </div>
);

HeaderLink.propTypes = {
  title: string.isRequired,

}

export default HeaderLink;
