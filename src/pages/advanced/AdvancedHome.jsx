import { Element } from "react-scroll";
import FooterSection from "../../globalcomponents/FooterSection";
import { AdvancedNavLinks } from "../../globalcomponents/NavLinks";
import FeaturePage from "../homepage/new-website/new-homepage/FeaturePage";
import Partners from "../homepage/partners/Partners";
import AdvancedApply from "./AdvancedApply";
import AdvancedBenefit from "./AdvancedBenefit";
import AdvancedHead from "./AdvancedHead";
import AdvancedVideo from "./AdvancedVideo";

const AdvancedHome = () => {
  return (
    <>
      <AdvancedNavLinks />
      <AdvancedHead />
      <Element name="benefits">
        <AdvancedBenefit />
      </Element>
      <AdvancedApply />
      <div className="my-20 lg:my-24">
        <Element name="partners">
          <Partners />
        </Element>
      </div>
      <Element name="feature">
        <FeaturePage />
      </Element>
      <FooterSection />
    </>
  );
};
export default AdvancedHome;
