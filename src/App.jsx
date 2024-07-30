import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import GlobalBeat from "./globalcomponents/BeatLoader";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
import CryptoThankyou from "./pages/crypyo-bootcamp/CyptoThankyou";
import NewLaunchpad from "./pages/homepage/new-website/new-launchpad/NewLaunchpad";
import CourseInfoPage from "./pages/homepage/new-website/courses-info/CourseInfoPage";
import AllCoursesPage from "./pages/homepage/new-website/courses-info/CourseInfoPage";
import RegistrationPage from "./pages/homepage/new-website/registration-page/RegistrationPage";

const ClosedRegister = lazy(() => import("./pages/launchpad/ClosedRegister"));
const Community = lazy(() => import("./pages/community/Community"));
const CryptoBootCamp = lazy(() =>
  import("./pages/crypyo-bootcamp/CryptoBootCamp")
);
const CommunityThankYou = lazy(() =>
  import("./pages/community/CommunityThankyou")
);
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
const Hackathon = lazy(() => import("./pages/hackathon/Hackathon"));
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
        <Route path="/">
          <Route
            index
            element={
              <Suspense fallback={<GlobalBeat />}>
                <Homepage />
              </Suspense>
            }
          />
          <Route path="launchpad">
            <Route
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <NewLaunchpad />
                </Suspense>
              }
              index
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <RegistrationPage />
                </Suspense>
              }
            />
            {/* <Route
              path="thank-you"
              element={
                <ProtectedRoute route="/launchpad" param="isRegistered">
                  <Suspense fallback={<GlobalBeat />}>
                    <LaunchPadThankyou />
                  </Suspense>
                </ProtectedRoute>
              }
            /> */}
          </Route>
          <Route path="/course/:courseName" element={<AllCoursesPage />} />
          <Route path="community">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <Community />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute route="/community" param="isRegistered">
                  <Suspense fallback={<GlobalBeat />}>
                    <CommunityThankYou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<GlobalBeat />}>
                <Checkout />
              </Suspense>
            }
          />
        </Route>

        {/* old routing */}
        {/* <Route
          path="/"
          index={true}
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Homepage />
            </Suspense>
          }
        /> */}
        {/* LAUNCHPAD */}
        {/* <Route path="/launchpad">
          <Route
            element={
              <Suspense fallback={<GlobalBeat />}>
                <NewLaunchpad />
              </Suspense>
            }
            index
          />
          <Route
            path="thank-you"
            element={
              <ProtectedRoute route="/launchpad" param="isRegistered">
                <Suspense fallback={<GlobalBeat />}>
                  <LaunchPadThankyou />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Route> */}
        {/* <Route
          path="/launchpad"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <LaunchPad />
            </Suspense>
          }
        />
        <Route
          path="/launchpad/thank-you"
          element={
            <ProtectedRoute route="/launchpad" param="isRegistered">
              <Suspense fallback={<GlobalBeat />}>
                <LaunchPadThankyou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
        {/* CHECKOUT */}
        {/* <Route
          path="/checkout"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Checkout />
            </Suspense>
          }
        />
        <Route
          path="/checkout/thank-you"
          element={
            <ProtectedRoute route="/checkout" param="isPaid">
              <Suspense fallback={<GlobalBeat />}>
                <CheckoutThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
        {/* EVENT */}
        {/* <Route
          path="/event"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <TechyjauntEvent />
            </Suspense>
          }
        />
        <Route
          path="/event/thank-you"
          element={
            <ProtectedRoute route="/event" param="event-registered">
              <Suspense fallback={<GlobalBeat />}>
                <EventThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
        {/* HACKATHON */}
        {/* <Route
          path="/hackathon"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Hackathon />
            </Suspense>
          }
        />
        <Route
          path="/hackathon/thank-you"
          element={
            <ProtectedRoute route="/hackathon" param="hackathon-registered">
              <Suspense fallback={<GlobalBeat />}>
                <HackathonThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
        {/* community */}
        {/* <Route
          path="/community"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Community />
            </Suspense>
          }
        />
        <Route
          path="/community/thank-you"
          element={
            <ProtectedRoute route="/community" param="isRegistered">
              <Suspense fallback={<GlobalBeat />}>
                <CommunityThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}

        {/* cryptobootcamp */}
        {/* <Route
          path="/crypto-bootcamp"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <CryptoBootCamp />
            </Suspense>
          }
        />
        <Route
          path="/crypto-bootcamp/thank-you"
          element={
            // <ProtectedRoute route="/crypto-bootcamp" param="cryptoRegistered">
            <Suspense fallback={<GlobalBeat />}>
              <CryptoThankyou />
            </Suspense>
            // </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
