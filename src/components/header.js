import PropTypes from "prop-types";
import React from "react";
import headerStyles from "./header.module.css";
const Header = ({ siteTitle }) => (
  <div className={headerStyles.container}>
    <header></header>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
