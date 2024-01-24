import "./App.css";
import { useEffect } from "react";
import Homepage from "./homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LaunchPad from "./launchpad/Launchpad";
import Checkout from "./checkout-page/Checkout";
import ThankYou from "./thank-you/ThankYou";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
import TechyjauntEvent from "./event/TechyjauntEvent";
import ReactPixel from "react-facebook-pixel";
import LaunchPadThankyou from "./launchpad/LaunchpadThankyou";

function App() {
  useEffect(() => {
    // Initialize Facebook Pixel with your Pixel ID
    ReactPixel.init("219032204013009");
    // Track a page view (optional)
    ReactPixel.pageView("PageView");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        {/* LAUNCHPAD */}
        <Route path="/launchpad" element={<LaunchPad />}></Route>
        <Route
          path="/launchpad/thank-you"
          element={
            <ProtectedRoute route="/launchpad" param="isRegistered">.0
              <LaunchPadThankyou />
            </ProtectedRoute>
          }
        ></Route>
        {/* CHECKOUT */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/checkout/thank-you"
          element={
            <ProtectedRoute route="/checkout" param="isPaid">
              <ThankYou />
            </ProtectedRoute>
          }
        ></Route>
        {/* EVENT */}
        <Route path="/event" element={<TechyjauntEvent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
