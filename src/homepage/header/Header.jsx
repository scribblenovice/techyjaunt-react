import Avatars from "../../globalcomponents/Avatars";
import Videos from "../videos/Videos";

const Header = () => {
  return (
    <header className="flex justify-center h-fit py-20 lg:h-[100vh] launchpad-jumbo bg-center bg-cover bg-blend-multiply bg-gray-800">
      <div className="mt-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center">
        <div className="h-full md:h-[70%] flex flex-col justify-around md:justify-evenly">
          <h1 className="font-black text-3xl md:text-5xl tracking-widest leading-[70px] mb-5 lg:mb-0">
            Guiding Africans Into Tech One Person at a Time
          </h1>
          <p className="font-extralight md:font-normal text-white mb-5 text-sm sm:text-base leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            harum placeat, explicabo, aliquam ut consectetur labore qui, tenetur
            eveniet aut consequuntur amet vitae sequi rem voluptate
            exercitationem culpa! Minima, quisquam!
          </p>
          <div className="flex items-center flex-wrap">
            <Avatars />
            <p className="text-white text-sm sm:text-base font-extralight md:font-normal">
              Over 1K+ professionals onboarded and trained
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[80%] lg:w-[40vw] py-10">
          {/* videos */}
          <Videos />
        </div>
      </div>
    </header>
  );
};
export default Header;
