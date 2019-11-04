import PropTypes from "prop-types";
import React from "react";
import styles from "./footer.module.css";
import { Link } from "gatsby";

const Footer = ({ siteTitle, style }) => (
  <footer className={styles.container}>
    <div className={styles.someContainer}>
      <a href="/" className={styles.fblogo}>
       <img src="/src/images/facebook.png" alt="poaskaa"/>
      </a>
      <a href="/" className={styles.iglogo}>
       <p>d</p>      
      </a>

      <div className={"someContainer"}></div>
      <div className={"someContainer"}></div>
      <div className={"someContainer"}></div>
    </div>
    <div>
    © {new Date().getFullYear()}
    {` alagroove`}
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
