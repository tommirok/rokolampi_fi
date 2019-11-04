import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./nav.module.css";
const Nav = ({ siteTitle, style }) => (
  <nav className={styles.nav}>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
  </nav>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
