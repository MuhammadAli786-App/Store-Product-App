import React from 'react'
import Navbar from '../../componets/Navbar'
import styles from "./about.module.css"
function About() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>About Us</h1>
    </div>
  )
}

export default About
