import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
import basket from "../../assets/images/icons/basket.png";
import halfhour from "../../assets/images/icons/half-hour.png";
import Driver from "../../assets/images/icons/driver.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GroceryPartner() {
    const blocks = [
        {
            iconPath: Partners,
            title: "170,000+",
            subtitle: "Grocery partner sites globally",
        },
        {
            iconPath: basket,
            title: "10,000,000+",
            subtitle: "Grocery items delivered globally",
        },
        {
            iconPath: halfhour,
            title: "30 min",
            subtitle: "Average grocery delivery time",
        },
    ];
    return (
        <div className="layout">
            
            <section className="groceryHeroSection">
                <div className="heroContainer container">
                    <h2>Become a Commande Grocery partner</h2>
                    <p>
                        Let us help your grocery business reach more customers
                    </p>
                    <a className="btn btn-primary">Create account</a>
                </div>
            </section>
            <ThreeBlocks blocks={blocks} classes={"negativeTop"} />

            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                                <p className="fs-2">Increase sales</p>
                                <p className="smtxt">
                                    Reach more customers in a larger area with
                                    our grocery delivery service - more
                                    customers means more sales.
                                </p>
                                <p className="primaryC secC fw-bold">
                                    Find out more about delivery Label
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img src={Deliveroo} className="greenDeliveroImg" />
                        </div>

                        <div className="col-md-6 d-flex">
                            <img src={Deliveroo} className="greenDeliveroImg" />
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                                <p className="fs-2">Increase sales</p>
                                <p className="smtxt">
                                    Reach more customers in a larger area with
                                    our grocery delivery service - more
                                    customers means more sales.
                                </p>
                                <p className="primaryC secC fw-bold">
                                    Find out more about delivery Label
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                                <p className="fs-2">Increase sales</p>
                                <p className="smtxt">
                                    Reach more customers in a larger area with
                                    our grocery delivery service - more
                                    customers means more sales.
                                </p>
                                <p className="primaryC secC fw-bold">
                                    Find out more about delivery Label
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img src={Deliveroo} className="greenDeliveroImg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="primaryBg py-5">
                <div className="container my-3">
                    <div className="text-center mb-5">
                        <p className=" text-white fs-3 mb-2">
                            How Deliveroo works for restaurant partners
                        </p>
                        <p className="text-white fs0p9">
                            Fire up your kitchen for Deliveroo orders in a few
                            easy steps
                        </p>
                    </div>
                    <div className="container my-3">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <img src={Steps} className="deliveroImg" />
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="my-auto">
                                    <div className="stepBlock d-flex py-2 position-relative">
                                        <div>
                                            <div className="step-circle"></div>
                                            <div className="dashed-line"></div>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <p className="fs-5 text-white">
                                                Sign up
                                            </p>
                                            <p className="smtxt text-white">
                                                Tell us about your business -
                                                you'll need your FSA rating to
                                                get started
                                            </p>
                                        </div>
                                    </div>
                                    <div className="stepBlock d-flex py-2 position-relative">
                                        <div>
                                            <div className="step-circle"></div>
                                            <div className="dashed-line"></div>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <p className="fs-5 text-white">
                                                Set up
                                            </p>
                                            <p className="smtxt text-white">
                                                Upload a menu and share your
                                                store hours
                                            </p>
                                        </div>
                                    </div>
                                    <div className="stepBlock d-flex py-2 position-relative">
                                        <div>
                                            <div className="step-circle"></div>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <p className="fs-5 text-white">
                                                Sell
                                            </p>
                                            <p className="smtxt text-white">
                                                Watch the orders come in and
                                                track them via Restaurant Hub
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="servicesSection">
                <h3 className="text-center mb-5 text-white">
                    Learn about our services for business like yours
                </h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="servicesBlock serviesRestaurant">
                                <div className="servicesContainer">
                                    <h2>Restaurent</h2>
                                    <p>
                                        We can handle delivery, so you can focus
                                        on the food
                                    </p>
                                    <a className="btn btn-primary">
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="servicesBlock serviesGrocery">
                                <div className="servicesContainer">
                                    <h2>Grocery</h2>
                                    <p>
                                        We'll increase your sales with new,
                                        online customers
                                    </p>
                                    <a className="btn btn-primary">
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="createAccount d-flex justify-content-between align-items-center">
                        <p className="fs-4 text-white ms-5 mb-0">
                            Not a Commande partner yet?
                        </p>
                        <a className="btn btn-primary mx-5">Create Account</a>
                    </div>
                </div>
            </section>
            {/* end */}

            <section className="py-5">
                <div className="container my-3">
                    <div className="text-center mb-5">
                        <p className="fs-3 mb-2">
                            Ways to grow and support your business
                        </p>
                        <p className="fs0p9">
                            Products, services and information for your success
                            as a Deliveroo partner
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="servicesBlock serviesGrocery">
                                <div className="servicesContainer">
                                    <h2>Marketing</h2>
                                    <p>
                                        We'll increase your sales with new,
                                        online customers
                                    </p>
                                    <a className="btn btn-primary mt-3">
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="servicesBlock serviesPickup">
                                <div className="servicesContainer">
                                    <h2>Technology</h2>
                                    <p>
                                        We'll increase your sales with new,
                                        online customers
                                    </p>
                                    <a className="btn btn-primary mt-3">
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="servicesBlock serviesMarketing">
                                <div className="servicesContainer">
                                    <h2>Delivery</h2>
                                    <p>
                                        We'll increase your sales with new,
                                        online customers
                                    </p>
                                    <a className="btn btn-primary mt-3">
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primaryBg py-5">
                <div className="container my-3">
                    <div className="text-center mb-5">
                        <p className=" text-white fs-3 mb-2">
                            Frequently asked questions
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Do I need an FSA rating to join
                                        Deliveroo?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Our riders or your own deliveries?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        What should I do when I need support?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
export default GroceryPartner;
