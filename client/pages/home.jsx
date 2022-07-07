import React from 'react';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import HomePageMid from '../components/home-mid';
export default function Home(props) {
  return (
    <div>
      <NavBar />
        <HomePageMid />
      <Footer />
    </div>
  );
}
