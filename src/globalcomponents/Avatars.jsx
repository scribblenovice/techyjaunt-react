import { AvatarImg } from "../resources/resources";
const Avatars = () => {
  return (
    <div className="flex items-center -space-x-2 mr-5 sm:mb-0">
      {AvatarImg.map((el) => {
       return (
         <img
           key={el.id}
           className="inline-block h-8 w-8 rounded-full ring-2 ring-yellow-400"
           src={el.src}
           alt=""
         />
       ); 
      })}
    </div>
  );
};
export default Avatars;
