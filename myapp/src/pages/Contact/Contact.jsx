import React from "react";
import Navbar from "../../componets/Navbar";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <h1>Contact Us</h1>

        <p>
          Have a question or want to learn more about Mart? Feel free to get in
          touch with us.
        </p>

        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> support@mart.com
          </p>

          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>

          <p>
            <strong>Address:</strong> 123 Market Street
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;