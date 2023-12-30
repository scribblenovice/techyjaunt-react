import vidSrc from "../../images/videos/header/vid1.mp4";
import thumbSrc from "../../images/videos/header/thumbnail/thumb1.jpg";
import VideoChanger from "../../globalcomponents/VideoChanger";

const Vid1 = () => {;
  return (
    <VideoChanger
    fullName="Balogun Juliana" thumbNail="thumb1" vidSrc={vidSrc}/>
    
  );
};
export default Vid1;
