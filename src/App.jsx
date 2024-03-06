import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import GlobalBeat from "./globalcomponents/BeatLoader";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
const EventThankYou = lazy(() => import("./pages/event/EventThankYou"));
const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const LaunchPad = lazy(() => import("./pages/launchpad/Launchpad"));
const Checkout = lazy(() => import("./pages/checkout-page/Checkout"));
const CheckoutThankYou = lazy(() =>
  import("./pages/checkout-page/CheckoutThankYou")
);
const TechyjauntEvent = lazy(() => import("./pages/event/TechyjauntEvent"));
const LaunchPadThankyou = lazy(() =>
  import("./pages/launchpad/LaunchpadThankyou")
);
const Hackathon = lazy(() =>
  import("./pages/hackathon/Hackathon")
);
const HackathonThankYou = lazy(() =>
  import("./pages/hackathon/HackathonThankyou")
);
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
        <Route
          path="/"
          index={true}
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Homepage />
            </Suspense>
          }
        ></Route>
        {/* LAUNCHPAD */}
        <Route
          path="/launchpad"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <LaunchPad />
            </Suspense>
          }
        ></Route>
        <Route
          path="/launchpad/thank-you"
          element={
            <ProtectedRoute route="/launchpad" param="isRegistered">
              <Suspense fallback={<GlobalBeat />}>
                <LaunchPadThankyou />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Checkout />
            </Suspense>
          }
        ></Route>
        <Route
          path="/checkout/thank-you"
          element={
            <ProtectedRoute route="/checkout" param="isPaid">
              <Suspense fallback={<GlobalBeat />}>
                <CheckoutThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
        {/* EVENT */}
        <Route
          path="/event"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <TechyjauntEvent />
            </Suspense>
          }
        ></Route>
        <Route
          path="/event/thank-you"
          element={
            <ProtectedRoute route="/event" param="event-registered">
              <Suspense fallback={<GlobalBeat />}>
                <EventThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
        {/* HACKATHON */}
        <Route
          path="/hackathon"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Hackathon />
            </Suspense>
          }
        ></Route>
        <Route
          path="/hackathon/thank-you"
          element={
            <ProtectedRoute route="/hackathon" param="hackathon-registered">
              <Suspense fallback={<GlobalBeat />}>
                <HackathonThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
