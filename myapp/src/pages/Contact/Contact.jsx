import React from "react";
import Navbar from "../../componets/Navbar";
import styles from "./contact.module.css";
function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Contact Us</h1>
    </div>
  );
}

export default Contact;
