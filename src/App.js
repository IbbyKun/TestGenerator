import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './HomePage/navbar';
import Hero from './HomePage/hero';
import AboutUs from './HomePage/aboutUs';
import Benefits from './HomePage/benefits';
import Testimonials from './HomePage/testemonials';
import Footer from './HomePage/footer';
import Signup from './loginSignupContactPage/signup';
import ContactUs from './loginSignupContactPage/contact';
import Login from './loginSignupContactPage/login';
import Routing from './Routing'
import Publish from './Dashboard/confirmTest';
import ViewTest from './Dashboard/viewTest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutUs />
              <Benefits />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/in" element={<Routing />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/view" element={<ViewTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
