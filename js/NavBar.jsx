import React from 'react';

const styles = {
  links: {
    flexGrow: 15
  },
  logo: {
    flexGrow: 2
  },
  search: {
    flexGrow: 2
  },
  accountTag: {
    flexGrow:1
  }
}
const NavBar = () => (
  <div className='navbar'>
    <h1 style={styles.logo}>showTV</h1>
    <div className='links' style={styles.links}>
      <a>TV</a>
      <a>MOVIES</a>
      <a>KIDS</a>
      <a>ADD-ONS</a>
    </div>
    <input type='text' placeholder='Shows, Movies, People...' style={styles.search} />
    <a style={styles.accountTag}>NEHAL</a>
  </div>
);

export default NavBar;
