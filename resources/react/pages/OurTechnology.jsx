import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import screen from "../../assets/images/icons/screen.png";
import track from "../../assets/images/icons/track.png";
import time from "../../assets/images/icons/time.png";
import inshights from "../../assets/images/icons/insights.png";
import owndevice from "../../assets/images/icons/owndevice.png";
import commandedevice from "../../assets/images/icons/commandedevice.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OurTechnology() {
    const blocks = [
        {
            iconPath: track,
            title: "170,000+",
            subtitle: "Restaurant partners globally",
        },
        {
            iconPath: time,
            title: "10,000,000+",
            subtitle: "Meals delivered globally",
        },
        {
            iconPath: inshights,
            title: "30 min",
            subtitle: "Average meal delivery time",
        },
    ];
    return (
        <div className="layout">
            
            <section className="OurTechnologyHeroSection">
                <div className="heroContainer container">
                    <h2>Our Technology</h2>
                    <p>
                        World-class tech to help you streamline operations and
                        manage <br />
                        your business more easily
                    </p>
                    <a className="btn btn-primary">Signup</a>
                </div>
            </section>
            <ThreeBlocks
                blocks={blocks}
                noTitle={true}
                classes={"negativeTop"}
            />

            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <h3 className="text-center mb-5">
                        Our state of the art technology
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
                <div className="container mt-5">
                    <div className="createAccount d-flex justify-content-between align-items-center">
                        <p className="fs-4 text-white ms-5 mb-0">
                            Not a Commande partner yet?
                        </p>
                        <a className="btn btn-primary mx-5">Create Account</a>
                    </div>
                </div>
            </section>

            <section className="pt-5">
                <div className="container my-5">
                    <div className="text-center mb-5">
                        <p className="fs-3 mb-2">
                            Getting your Deliveroo orders
                        </p>
                        <p className="fs0p9">
                            Whether you use a Deliveroo tablet or your own
                            device, our algorithm ‘Frank’ keeps things running
                            smoothly. Using realtime info Frank calculates your
                            prep time, so riders arrive at just the right time.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                <div className="deliverooOrder1">
                                        <div className="secBg gap-4 py-4 text-center">
                                            <img src={owndevice} height={70} />
                                            <h5 className="text-white mt-4 mb-0">
                                                Your own device
                                            </h5>
                                        </div>
                                        <div className="p-4 br-1">
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16} /> 24
                                                hr tablet support
                                            </p>
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16}/> 24
                                                hr tablet support
                                            </p>
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16}/> 24
                                                hr tablet support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="deliverooOrder2">
                                        <div className="blueBg gap-4 py-4 text-center">
                                            <img src={commandedevice} height={70}/>
                                            <h5 className="text-white mt-4 mb-0">
                                                Your own device
                                            </h5>
                                        </div>
                                        <div className="p-4">
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16}/> 24
                                                hr tablet support
                                            </p>
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16}/> 24
                                                hr tablet support
                                            </p>
                                            <p className="smtxt">
                                                <FaCheck color="#059372" fontSize={16}/> 24
                                                hr tablet support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <h2>Pickup</h2>
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
export default OurTechnology;
