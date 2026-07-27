import React from "react";
import Navbar from "../../componets/Navbar";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <h1>About Us</h1>

        <p>
          Welcome to Mart, a simple e-commerce website built with React.js.
          This project was created to practice frontend development and
          understand how modern React applications work.
        </p>

        <p>
          Users can browse products, search for products, view product details,
          and navigate between different pages using React Router.
        </p>

        <p>
          Product data is fetched from an external API using Axios, making this
          project a practical example of working with APIs in React.
        </p>
      </div>
    </div>
  );
}

export default About;