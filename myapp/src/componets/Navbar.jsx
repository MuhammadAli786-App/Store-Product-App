import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className={styles.container}>
      <div className={styles.navbarCon}>
        <Link to="/" className={styles.brandLink}>
          Mart
        </Link>
      </div>

      <div className={styles.listCon}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/products">
              All Products
            </Link>
          </li>
          <li className={styles.searchWrap}>
            <input
              aria-label="Search products"
              type="text"
              value={search || ""}
              placeholder="Search a Product..."
              className={styles.searchInput}
              onChange={(e) => setSearch(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
