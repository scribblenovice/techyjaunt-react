import "./App.css";
import Homepage from "./homepage/Homepage";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LaunchPad from "./launchpad/Launchpad";
import Checkout from "./checkout-page/Checkout";
import ThankYou from "./thank-you/ThankYou";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
import TechyjauntEvent from "./event/TechyjauntEvent";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        <Route path="/launchpad" element={<LaunchPad />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        {/* <Route path="thank-you" element={<ThankYou/>}></Route> */}
        <Route
          path="/thank-you"
          element={
            <ProtectedRoute>
              <ThankYou />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/event" element={<TechyjauntEvent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
