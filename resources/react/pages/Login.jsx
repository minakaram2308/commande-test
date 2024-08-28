import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
import stone from "../../assets/images/icons/stone.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import clients from "../../assets/images/icons/clients.png";
import grow from "../../assets/images/icons/grow.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import whatismarketer from "../../assets/images/whatismarketer.png";
import ideaa from "../../assets/images/ideaa.png";
import login from "../../assets/images/login.png";
import greenLogo from "../../assets/images/greenLogo.png";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
    const blocks = [
        {
            iconPath: stone,
            title: "Everything included",
            subtitle:
                "Partners prepare amazing food for their customers - we look after everything else, including delivery",
        },
        {
            iconPath: clients,
            title: "Hand-picked locations",
            subtitle:
                "Our data helps us bring global favourites and the best independents to more customers than ever",
        },
        {
            iconPath: grow,
            title: "High, high standards",
            subtitle:
                "100% of our kitchens are 5-star EHO rated or equivalent, we're hot on hygiene and safety",
        },
    ];
    return (
        <div className="layout">
            <section className="servicesSection d-flex h100vh">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <img src={login} className="img-fluid my-auto" />
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="loginContainer my-auto p-5">
                                <img src={greenLogo} className="mb-4" />
                                <h2>Welcome to <br /> Restaurent hub</h2>
                                <p>
                                    Tap into data that helps you grow, check on
                                    sales, chart your progeress and attract new
                                    customers with special offers
                                </p>

                                <div className="form-group mb-3">
                                    <label>Email address *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password *</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <Link className="btn btn-primary mt-5 w-100 " to="/Login">Login</Link>
                                <Link className="mt-3 text-dark text-decoration-none d-block" to="/Login">forget password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login;
