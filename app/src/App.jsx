import React from "react";

import styles from "./style";
import { Navbar, Footer } from './components';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">

      <Router>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

      </Router>

    </div>
  )
};

export default App;