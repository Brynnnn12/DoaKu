import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Doa from "../components/Doa";
import LoadingFallback from "../components/LoadingFallback";
import AppLayouts from "../layouts/AppLayouts";

// Lazy load prayer components
const PrayerList = lazy(() => import("../components/PrayerList"));
const PrayerDetail = lazy(() => import("../components/PrayerDetail"));
const PrayerSearch = lazy(() => import("../components/PrayerSearch"));
const PrayerRandom = lazy(() => import("../components/PrayerRandom"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayouts />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <About />
            <Doa />
          </>
        ),
      },
      {
        path: "doa",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PrayerList />
          </Suspense>
        ),
      },
      {
        path: "doa/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PrayerDetail />
          </Suspense>
        ),
      },
      {
        path: "doa/search/:doa",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PrayerSearch />
          </Suspense>
        ),
      },
      {
        path: "doa/random",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PrayerRandom />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
