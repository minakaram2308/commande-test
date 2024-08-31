import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/app.css";
import CommandePartner from "./pages/CommandePartner";
import GroceryPartner from "./pages/GroceryPartner";
import RestaurantPartner from "./pages/RestaurantPartner";
import FoodDelivery from "./pages/FoodDelivery";
import SalesWithPickup from "./pages/SalesWithPickup";
import MarketingandPromotions from "./pages/MarketingandPromotions";
import OurTechnology from "./pages/OurTechnology";
import ProfessionalPhotography from "./pages/ProfessionalPhotography";
import ManageBusiness from "./pages/ManageBusiness";
import GetInTouch from "./pages/GetInTouch";
import PartnerSuccess from "./pages/PartnerSuccess";
import EditionsKitchen from "./pages/EditionsKitchen";
import SignatureService from "./pages/SignatureService";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
    const location = useLocation();
    const noNavFooterRoutes = ['/Contact', '/PageWithoutNavFooter2'];
    const shouldRenderNavFooter = !noNavFooterRoutes.includes(location.pathname);

    return (
        <>
            {shouldRenderNavFooter && <Navbar />}
            <Routes>
                <Route path="/" element={<CommandePartner />} />
                <Route path="/EditionsKitchen" element={<EditionsKitchen />} />
                <Route path="/FoodDelivery" element={<FoodDelivery />} />
                <Route path="/GetInTouch" element={<GetInTouch />} />
                <Route path="/GroceryPartner" element={<GroceryPartner />} />
                <Route path="/ManageBusiness" element={<ManageBusiness />} />
                <Route path="/MarketingandPromotions" element={<MarketingandPromotions />} />
                <Route path="/OurTechnology" element={<OurTechnology />} />
                <Route path="/PartnerSuccess" element={<PartnerSuccess />} />
                <Route path="/ProfessionalPhotography" element={<ProfessionalPhotography />} />
                <Route path="/RestaurantPartner" element={<RestaurantPartner />} />
                <Route path="/SalesWithPickup" element={<SalesWithPickup />} />
                <Route path="/SignatureService" element={<SignatureService />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            {shouldRenderNavFooter && <Footer />}
        </>
    );
}

export default Layout;
