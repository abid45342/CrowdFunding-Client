
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
import CampaignDetails from "../pages/CampaignDetails";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import Error from "../pages/Error";

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
    path:'login',
    element:<Login></Login>
  }
      ,  {
    path:'register',
    element:<Register></Register>
  }
      ,  {
    path:'addCampaign',
    element:  <div>
    <PrivateRoute> 
    <AddNewCampaign></AddNewCampaign>
     </PrivateRoute>
    
    </div>

  },
  {
    path:'campaigns',
    element:<AllCampaigns></AllCampaigns>,
    loader : ()=> fetch('http://localhost:5000/campaigns')
  }
  ,{
    path:'campaigns/:id',
    element: <PrivateRoute><CampaignDetails></CampaignDetails>,</PrivateRoute>,
    loader:({params})=> fetch(`http://localhost:5000/campaigns/${params.id}`)
    
  }
  ,{
    path:'myCampaign/:email',
    element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
    loader:({params})=> fetch(`http://localhost:5000/myCampaign/${params.email}`)
  }
  ,
  {
    path:'myDonation/:email',
    element:<PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/myDonation/${params.email}`)
  }
    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }

]);

export default router;
