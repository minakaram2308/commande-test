import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import screen from "../../assets/images/icons/screen.png";
import bill from "../../assets/images/icons/bill.png";
import plate from "../../assets/images/icons/plate.png";
import foodimage from "../../assets/images/icons/foodimage.png";
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

function ProfessionalPhotography() {
    const blocks = [
        {
            iconPath: foodimage,
            title: "Get noticed",
            subtitle: "Restaurant partners globally",
        },
        {
            iconPath: plate,
            title: "Showcase your food",
            subtitle: "Meals delivered globally",
        },
        {
            iconPath: bill,
            title: "Increase orders",
            subtitle: "Average meal delivery time",
        },
    ];
    return (
        <div className="layout">
            
            <section className="ProfessionalPhotographyHeroSection">
                <div className="heroContainer container">
                    <h2>Professional Restaurant Photography</h2>
                    <p>Boost sales by up to 24% by adding menu imagery</p>
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
                        Make sure your digital shopfront shines
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

            <section className="PhotographyBg py-5">
                <div className="container my-auto">
                    <div className="row justify-content-end">
                        <div className="col-md-4">
                            <div className="primaryBg text-white p-4">
                                <h5>Great first impressions</h5>
                                <p className="mt-3 mb-0 smtxt text-white">
                                    Deliveroo connects customers with the best
                                    food in their area - and like a bustling
                                    food hall, the competition is hot.
                                    <br />
                                    <br /> Professional food photography helps
                                    more customers to choose your restaurant.
                                    Showcasing your best dishes brings your menu
                                    to life and lets hungry customers decide
                                    what to order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4">
                <div className="container mt-5">
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

                    <div className="row justify-content-center">
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
export default ProfessionalPhotography;
