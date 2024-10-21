import { Fade, Zoom } from "react-reveal";
import {
  FancyUnderline,
  PartnerImg,
  PartnerImg1,
  PartnerImg2,
} from "../../../../resources/resources";
import { useEffect, useState } from "react";
import { PartnersCarousel } from "../../partners/Partners";

const LaunchpadPartners = () => {
  return (
    <div className="w-[90%] mx-auto py-20 xl:py-40">
      <Fade bottom>
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts">
          Our <span className="text-tech-blue tts">Partners</span>
          <FancyUnderline className="absolute -bottom-2 left-7" />{" "}
        </h2>
      </Fade>
      <div className="w-full pt-5">
        <PartnersCarousel />
      </div>
    </div>
  );
};
export default LaunchpadPartners;
