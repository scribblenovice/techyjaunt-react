import { AvatarImg } from "../resources/resources";
const Avatars = () => {
  return (
    <div className="flex -space-x-2 mr-5 mb-4 sm:mb-0">
      {AvatarImg.map((el) => {
       return (
         <img
           key={el.id}
           className="inline-block h-12 w-12 rounded-full ring-2 ring-yellow-400"
           src={el.src}
           alt=""
         />
       ); 
      })}
    </div>
  );
};
export default Avatars;
