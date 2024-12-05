

// src/Layout/HomeLayout.jsx

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
               <Outlet></Outlet>
               <br />
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;