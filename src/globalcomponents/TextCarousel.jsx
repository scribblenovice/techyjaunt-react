import React, { useState, useEffect } from "react";

const TextCarousel = ({ texts }) => {
  return (
    <div className="overflow-hidden w-full h-fit bg-white py-10 md:py-20">
      <div className="overflow-scroll hidescrollbar ">
        <div className={` flex w-[900%] slide`}>
          {texts.map((text, index) => {
            return (
              <div className="w-[100%] mr-20 text-center items-center text-blue-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl flex">
                <i class="ri-arrow-right-s-fill"></i>
                <p key={index} className="mx-2">
                  {text.toUpperCase()}
                </p>
                <i class="ri-arrow-left-s-fill"></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;

// const App = () => {
//   const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <TextCarousel texts={texts} />
//     </div>
//   );
// };

// export default App;
