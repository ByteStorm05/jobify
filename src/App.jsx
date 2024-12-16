import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-job";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,  // Removed ProtectedRoute
      },
      {
        path: "/jobs",
        element: <JobListing />,  // Removed ProtectedRoute
      },
      {
        path: "/post-job",
        element: <PostJob />,  // Removed ProtectedRoute
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,  // Removed ProtectedRoute
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,  // Removed ProtectedRoute
      },
      {
        path: "/job/:id",
        element: <JobPage />,  // Removed ProtectedRoute
      },
    ],
  },
]);


const App = () => {
  return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
 <RouterProvider router={router} />
  </ThemeProvider>
   
  )
}



export default App;