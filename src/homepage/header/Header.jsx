import Avatars from "../../globalcomponents/Avatars"
import Videos from "../videos/Videos"

const Header = ()=>{

    return(
        <section className="flex justify-center h-fit py-20 lg:h-[100vh] jumbo">
        <div
          className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center"
        >
          <div
            className="h-full md:h-[70%] flex flex-col justify-around md:justify-evenly"
          >
            <h1
              className="font-black text-3xl md:text-5xl tracking-widest leading-[70px] mb-5 lg:mb-0"
            >
              Guiding Africans Into Tech One Person at a Time
            </h1>
            <p className="text-white mb-5 font-poppins text-base leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              reprehenderit cumque, nihil minus eius quis quaerat veritatis
              ullam, exercitationem ipsa saepe iste id aliquid non. Quas
              perspiciatis est impedit officia.
            </p>
            <div className="flex items-center flex-wrap">
              <Avatars/>
              <p className="text-white">
                Over 1K+ professionals onboarded and trained
              </p>
            </div>
          </div>
          <div className="w-[90vw] sm:w-[80vw] lg:w-[40vw] py-10">
           {/* videos */}
           <Videos/>
          </div>
        </div>
      </section>
    )
}
export default Header