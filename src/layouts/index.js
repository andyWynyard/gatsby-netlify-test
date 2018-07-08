import React from 'react';
import Link from 'gatsby-link';
import 'normalize.css';

import Footer from './footer';

import styles from './index.module.css';

export default ({ children, data }) => {
  return (
    <div className={styles.menuWrapper}>
      <h1>{data.site.siteMetadata.title}</h1>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/">
            HOME
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/about/">
            ABOUT
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/technologies/">
            TECH
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/blog/">
            BLOG
          </Link>
        </li>
      </ul>
      <div className={styles.bodyWrapper}>{children()}</div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
