import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import headphones from "../../assets/images/icons/headphones.png";
import chat from "../../assets/images/icons/chat.png";
import fingerprint from "../../assets/images/icons/fingerprint.png";
import stone from "../../assets/images/icons/stone.png";
import time from "../../assets/images/icons/time.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import whatismarketer from "../../assets/images/whatismarketer.png";

import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GetInTouch() {
    const blocks = [
        {
            iconPath: headphones,
            title: "Live Order support",
            subtitle: "A global network of over 100,000 riders",
        },
        {
            iconPath: chat,
            title: "Quick solutions",
            subtitle: "Reach more customers and get a sales boost of up to 30%",
        },
        {
            iconPath: fingerprint,
            title: "At your fingertips",
            subtitle: "Our average delivery time for customer orders",
        },
    ];
    return (
        <div className="layout">
            
            <section className="ManageBusinessHeroSection">
                <div className="heroContainer container">
                    <h2>Get in touch</h2>
                    <p>
                        Have a question, need help or want some advice? We’re
                        here for you, and can provide support in a number of
                        ways.
                    </p>
                    <a className="btn btn-primary">Search Help Center</a>
                </div>
            </section>
            <ThreeBlocks
                blocks={blocks}
                noTitle={true}
                classes={"negativeTop"}
            />

            <section className="deliveroo my-5 pt-5">
                <div className="container">
                    <h3 className="text-center mb-5">
                        What you can do in Restaurant Hub
                    </h3>
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
            <section>
                <div className="container">
                    <div className="createAccount d-flex justify-content-between align-items-center">
                        <p className="fs-4 text-white ms-5 mb-0">
                            Not a Commande partner yet?
                        </p>
                        <a className="btn btn-primary mx-5">Create Account</a>
                    </div>
                </div>
            </section>
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
                                    <h2>Packaging</h2>
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
                            Ways to grow and support your business
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
export default GetInTouch;
