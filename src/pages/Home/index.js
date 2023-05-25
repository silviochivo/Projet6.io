import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import BannerHome from "../../assets/banner-home.png"


function Home() {

  const imgAlt = BannerHome.split('/').pop().split('.')[0];
  
  return (
    <div>
      <Header />
      <Banner 
        img={BannerHome}
        title="Chez vous, partout et ailleurs"
        name={imgAlt}
      />
      <Footer />
    </div>
  );
}
  
export default Home;