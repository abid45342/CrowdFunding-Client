
// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      }
      ,  {
    path:'/login',
    element:<Login></Login>
  }
      ,  {
    path:'/register',
    element:<Register></Register>
  }
    ]
  },

]);

export default router;
