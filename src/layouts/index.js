import React from 'react';
import Link from 'gatsby-link';
import 'normalize.css';

import styles from './index.module.css';

const liStyle = {
  border: '1px solid red',
  display: 'inline-block',
  backgroundColor: '#eee'
};

const linkStyle = {
  textDecoration: 'none'
};

export default ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/about/">
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/technologies/" style={linkStyle}>
            Technologies
          </Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/contact/">
            Contact
          </Link>
        </li>
      </ul>

      {children()}
    </div>
  );
};
