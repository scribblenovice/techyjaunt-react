import "./App.css";
import { lazy, useEffect } from "react";
import Homepage from "./homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LaunchPad = lazy(() => import("./launchpad/Launchpad"));
const Checkout = lazy(() => import("./checkout-page/Checkout"));
const ThankYou = lazy(() => import("./thank-you/ThankYou"));
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
const TechyjauntEvent = lazy(() => import("./event/TechyjauntEvent"));
import ReactPixel from "react-facebook-pixel";
const LaunchPadThankyou = lazy(() => import("./launchpad/LaunchpadThankyou"));

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
            <ProtectedRoute route="/launchpad" param="isRegistered">
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
