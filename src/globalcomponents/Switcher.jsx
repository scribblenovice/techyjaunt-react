import Vid1 from "../homepage/videos/Vid1";
import Vid2 from "../homepage/videos/Vid2";
import Vid3 from "../homepage/videos/Vid3";

const Switcher = ({renderVid}) =>{
    switch (renderVid) {
      case 0:
        return <Vid1 />;
        break;
      case 1:
        return <Vid2 />;
        break;
      case 2:
        return <Vid3 />;
        break;
      default:
        return <Vid1/>
        break;
    }
}
export default Switcher