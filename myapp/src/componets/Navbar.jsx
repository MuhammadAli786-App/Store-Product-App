import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar({ search, setSearch }) {
  return (
    <div className={styles.container}>
      <div className={styles.navbarCon}>
        <p>Mart</p>
      </div>
      <div className={styles.listCon}>
        <ul>
          <li>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to={"/products"}>
              All Products
            </Link>
          </li>
          <input
            type="text"
            placeholder="Search a Product..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
