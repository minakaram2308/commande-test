import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
    return (
        // <div className="layout">
        //     {/* 1 */}
        //     {/* <CommandePartner /> */}
        //     {/* 2 */}
        //     {/* <GroceryPartner /> */}
        //     {/* 3 */}
        //     {/* <RestaurantPartner /> */}
        //     {/* 4 */}
        //     {/* <FoodDelivery /> */}
        //     {/* 5 */}
        //     {/* <SalesWithPickup /> */}
        //     {/* 6 */}
        //     {/* <MarketingandPromotions /> */}
        //     {/* 7 */}
        //     {/* <OurTechnology /> */}
        //     {/* 8 */}
        //     {/* <ProfessionalPhotography /> */}
        //     {/* 9 */}
        //     {/* <ManageBusiness /> */}
        //     {/* 10 */}
        //     {/* <GetInTouch /> */}
        //     {/* 11 */}
        //     {/* <PartnerSuccess /> */}
        //     {/* 12 */}
        //     {/* <EditionsKitchen /> */}
        //     {/* 13 */}
        //     <SignatureService />
        //     {/* 14 */}
        //     {/* 15 */}
        //     {/* 16 */}
        // </div>
           <Router>
           <Navbar />
           <Routes>
             <Route path="/" element={<CommandePartner />} />
             <Route path="/grocery" element={<GroceryPartner />} />
             <Route path="/pickup" element={<RestaurantPartner />} />
             {/* <Route path="/grocery" element={<Grocery />} />
             <Route path="/restaurant" element={<Restaurant />} />
             <Route path="/marketing" element={<Marketing />} />
             <Route path="/packaging" element={<Packaging />} />
             <Route path="/technology" element={<Technology />} />
             <Route path="/food-photography" element={<FoodPhotography />} />
             <Route path="/restaurant-hub" element={<RestaurantHub />} />
             <Route path="/resources" element={<Resources />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/help" element={<Help />} />
             <Route path="/login" element={<Login />} />
             <Route path="/become-a-partner" element={<BecomeAPartner />} /> */}
           </Routes>
           <Footer />
         </Router>
    );
}
export default Layout;
