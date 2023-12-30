import { AvatarImg } from "../resources/resources";
const Avatars = () => {
  return (
    <div className="flex -space-x-2 mr-5 mb-5 sm:mb-0">
      {AvatarImg.map((el) => {
       return (
         <img
           key={el.id}
           className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
           src={el.src}
           alt=""
         />
       ); 
      })}
    </div>
  );
};
export default Avatars;
