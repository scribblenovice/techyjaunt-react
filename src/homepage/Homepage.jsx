import CarouselSlider from "../globalcomponents/Carousel";
import NavLinks from "../globalcomponents/NavLinks";
import FooterSection from "../globalcomponents/FooterSection";
import Footer from "../globalcomponents/FooterSection";
import Mission from "./Mission";
import NewsLetter from "./Newsletter";
import AboutUs from "./aboutus/AboutUs";
import Header from "./header/Header";
import Partners from "./partners/Partners";
import { useState } from "react";
import MailBtn from "../globalcomponents/MailButton";

const Homepage = () => {
  const [open, setOpen] =useState(true)
   const [scrollNumber, setScrollNumber] = useState();
   window.addEventListener("scroll", () => {
     setScrollNumber(window.scrollY);
   });
  return (
    <main className={`bg-stone-100`}>
      <>
        <NavLinks
          navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
            scrollNumber > 0 ? "nav-change" : "text-white"
          }`}
        />
        <Header />
        <AboutUs />
        <Partners />
        <Mission />
        <NewsLetter />
        <CarouselSlider />
        < MailBtn/>
      </>
    </main>
  );
};
export default Homepage;
