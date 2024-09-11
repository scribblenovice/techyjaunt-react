import { Fade, Zoom } from "react-reveal";
import { FancyUnderline, PartnerImg, PartnerImg1, PartnerImg2 } from "../../../../resources/resources";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";


const LaunchpadPartners = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const options = {
    loop: true,
    margin: 10,
    // nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    items: width < 350 ? 3 : width < 430 ? 4 : 7, // Number of items you want to show at a time
    // navText: [`<p className="text-2xl">preev</p>`,`<p className="text-2xl"  >nextii</p>`],
  };
  return (
    <div className="w-[90%] mx-auto py-20 xl:py-40">
      <Fade bottom>
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts">
          Our <span className="text-tech-blue tts">Partners</span>
          <FancyUnderline className="absolute -bottom-2 left-7" />{" "}
        </h2>
      </Fade>
      <div className="w-full pt-5">
        <Fade bottom>
          <OwlCarousel {...options} className="flex items-center">
            {PartnerImg1.map((el, index) => {
              return <img key={index} src={el.src} />;
            })}
          </OwlCarousel>
        </Fade>
        <Fade bottom>
          <OwlCarousel {...options} className="flex items-center">
            {PartnerImg2.map((el, index) => {
              return <img key={index} src={el.src} className="" />;
            })}
          </OwlCarousel>
        </Fade>
      </div>
      {/* <div className={`grid grid-cols-3 md:grid-cols-4 gap-10 test pt-10`}>
        {PartnerImg.map((j) => {
          return (
            <Zoom>
              <div className="w-full h-full grid place-items-center">
                <img
                  loading="lazy"
                  className={`${
                    j.id == 2 || j.id == 3
                      ? "w-[40%]"
                      : j.id == 10
                      ? "w-[100%]"
                      : "w-[70%]"
                  }`}
                  key={j.id}
                  src={j.src}
                  alt=""
                />
              </div>
            </Zoom>
          );
        })}
      </div> */}
    </div>
  );
};
export default LaunchpadPartners;
