import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BannerAbout from "../../assets/banner-about.png"

function About() {

  const imgAlt = BannerAbout.split('/').pop().split('.')[0];

  return (
    <div>
      <Header />
      <Banner 
        img={BannerAbout}
        name={imgAlt}
      />
      <Footer />
    </div>
  );
}
  
export default About;