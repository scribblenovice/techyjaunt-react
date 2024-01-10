import founderImg from "../images/founder.jpg"

const Founder = () => {
  return (
    <section className=" pt-10 bg-stone-100 font-poppins" id="about">
      <div className="w-[90%] smw-[80%] py-4 mx-auto lg:py-6">
        <div className="px-4 pl-4 mb-10 border-l-4 border-blue-500">
          <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
            MEET OUR FOUNDER
          </h2>
        </div>
        <div className="grid md:grid-cols-2 md:gap-x-10">
          <div className="rounded-lg">
            <img
              src={founderImg}
              alt=""
              className=" rounded-lg w-full h-[80%]"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-lg sm:text-xl mb-5">George Ezeudeka Ikechukwu</h2>
            <p className=" font-light md:font-normal mb-10 text-sm sm:text-base leading-7 text-gray-500">
              Meet George, the Founder/CEO of TechyJaunt. He's passionate about
              emerging technologies like Web3, Blockchain, and AI. His mission
              is to introduce Africans to the world of technology, one person at
              a time, by providing education and training to tech enthusiasts.
              Through TechyJaunt, George has already trained over 1000
              individuals in various tech skills. With a proven track record in
              team leadership and resource management, he's driven to achieve
              results. His experience includes roles as a Business Development
              Executive at Tiny Traders and as Africa Marketing Manager at
              Zenith Chain, a leading blockchain solutions company. Currently,
              George serves as a Business Development Executive at Coinstore, a
              centralized crypto exchange in Singapore. Throughout his career,
              George has promoted prominent blockchain brands like CoinW
              Exchange, Standard DAO, and Fonbnk. George holds multiple
              certifications, including the 2022 Teff Entrepreneurship Program
              and completion of Y Combinator Startup School, among others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Founder;
