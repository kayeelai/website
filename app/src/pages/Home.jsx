import React from "react";

import styles from "../style";
import {Hero, Services, About, People, Testimonials, CTA, Footer } from '../components';

const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          <About />
          <People />
          <Testimonials />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default Home