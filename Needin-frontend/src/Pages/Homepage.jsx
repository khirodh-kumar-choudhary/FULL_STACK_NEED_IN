import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import { Plumbers1 } from "../Data/plumbers/plumbers";
import { electrician1 } from "../Data/Electricians/electricians";
import { homeapplicants } from "../Data/Home Applicants/homeapplicants";
import { homecleaning } from "../Data/Home Cleaning/homecleaning";
import { automobile } from "../Data/Auto Mobile/automobile";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      
        <HomeProductSection data={electrician1} section={"Electricians"} />
        <HomeProductSection data={automobile} section={"Auto Mobile"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={homeapplicants} section={"Home Applicants"} />
        <HomeProductSection data={homecleaning} section={"Home Cleaning"} />
       
        <HomeProductSection data={Plumbers1} section={"Plumbers"} />
        {/* <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;