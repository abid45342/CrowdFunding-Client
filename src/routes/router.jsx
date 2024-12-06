
// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddNewCampaign from "../pages/AddNewCampaign";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "../pages/AllCampaign";
import CampaignCard from "../components/CampaignCard";

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
      ,  {
    path:'/addCampaign',
    element:  <div>
    <PrivateRoute> 
    <AddNewCampaign></AddNewCampaign>
     </PrivateRoute>
    
    </div>

  },
  {
    path:'/campaigns',
    element:<AllCampaigns></AllCampaigns>,
    loader : ()=> fetch('http://localhost:5000/campaigns')
  }
  ,{
    path:'/campaign/:id',
    element: <CampaignCard></CampaignCard>,
    loader:({params})=> fetch(`http://localhost:5000/campaign/${params.id}`)
    
  }
    ]
  },

]);

export default router;
