import src from "../images/testimonial/testimonial3.jpg";
import { StarRating } from "../resources/resources";

const cards = [1, 2, 3, 4, 5, 6];
const CardSlider = () => {
  return (
    <div className="relative">
      <div className="w-screen overflow-scroll hidescrollbar">
        <div className="flex w-full pb-10">
          {cards.map((el) => {
            return (
              <div className="mr-5">
                <div className="bg-white shadow-2xl rounded-lg w-[310px] h-[310px] flex flex-col p-2">
                  {/* {el} */}
                  <img className="w-full h-[70%] bg-red-400 shadow-2xl" src={src}/>
                  <StarRating />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default CardSlider;
