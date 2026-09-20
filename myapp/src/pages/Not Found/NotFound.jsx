import React from "react";
import Navbar from "../../componets/Navbar";
import styles from "./notFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.message}>
            The page you are looking for might have moved, been removed, or never
            existed.
          </p>
          <Link className={styles.button} to="/">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
