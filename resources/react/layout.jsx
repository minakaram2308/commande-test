import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/app.css";
import CommandePartner from "./pages/CommandePartner";
import GroceryPartner from "./pages/GroceryPartner";

function layout() {
    return (
        <div className="layout">
            {/* <CommandePartner /> */}
            <GroceryPartner />
        </div>
    );
}
export default layout;
