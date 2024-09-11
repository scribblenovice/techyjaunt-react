import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Fade } from "react-reveal";
import { FancyUnderline } from "../../../../resources/resources";
import { Element } from "react-scroll";

const platforms = [
  {
    name: "Tech Cabal",
    image: "/feature/techcabal.png",
    link: "https://techcabal.com/2024/02/27/icp-hub-sahara-empowers-students-at-techyjaunt-event-beyond-the-campus-walls/",
  },
  {
    name: "Techpoint NG",
    image: "/feature/techpoint.png",
    link: "https://techpoint.africa/2024/02/26/icp-hub-sahara-speaks-at-techyjaunts-event-beyond-the-campus-walls-building-a-tech-career-as-a-student/",
  },
  {
    name: "Leadership",
    image: "/feature/leadership.png",
    link: "https://leadership.ng/2000-unn-students-empowered-in-emerging-tec/",
  },
  {
    name: "Nigerian Tribune",
    image: "/feature/tribune.png",
    link: "https://tribuneonlineng.com/over-2000-students-empowered-as-tech-outfits-take-training-to-unn/",
  },
  {
    name: "The Cable",
    image: "/feature/cable.png",
    link: "https://lifestyle.thecable.ng/tag/emerging-technology/",
  },
  {
    name: "The Independent",
    image: "/feature/independent.png",
    link: "https://independent.ng/tech-firm-empowers-over-2000-students-through-training-at-unn/ ",
  },
];

const FeaturePage = () => {
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
    autoplayHoverPause: true,
    items: width < 430 ? 1 : width < 600 ? 2 : 3, // Number of items you want to show at a time
  };

  return (
    <section className="py-10 w-[90%] mx-auto">
      <div className="container mx-auto">
        <Fade bottom>
          <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-start tts">
            News
            <span className="text-tech-blue relative tts">
              <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              Feature
            </span>
          </h2>
        </Fade>
        <p className="font-semibold pb-5 text-base md:text-2xl md:leading-8 mt-10 leading-7 text-gray-700 text-center">
          We are featured on a couple of prominent tech platforms
        </p>
        {/* <div className="xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-32 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-700">
                {platform.name}
                <a
                  href={platform.link}
                  target="_blank"
                  className="flex text-tech-blue"
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </span>
            </a>
          ))}
        </div> */}
        <Element name="feature">
          <OwlCarousel
            {...options}
            className="flex items-center xl:hidden xl:border-none border border-tech-blue rounded-lg xl:p-10"
          >
            {platforms.map((platform, index) => {
              return (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xl:border xl:border-tech-blue flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <span className="text-lg font-semibold text-gray-700">
                    {platform.name}
                    <a
                      href={platform.link}
                      target="_blank"
                      className="flex text-tech-blue"
                    >
                      Read more <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </span>
                </a>
              );
            })}
          </OwlCarousel>
        </Element>
      </div>
    </section>
  );
};

export default FeaturePage;
