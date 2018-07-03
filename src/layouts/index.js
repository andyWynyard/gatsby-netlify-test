import React from 'react';
import Link from 'gatsby-link';

const liStyle = {
  border: '1px solid rebeccapurple',
  display: 'inline-block',
  width: '25%'
};

const linkStyle = {
  textDecoration: 'none'
};

export default ({ children }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: 800, backgroundColor: '#eee' }}>
      <ul>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">
            Blog Index
          </Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">
            Placeholder
          </Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">
            Placeholder
          </Link>
        </li>
      </ul>

      {children()}
    </div>
  );
};
