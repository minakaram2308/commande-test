import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import Driver from "../../assets/images/icons/driver.png";
import bill from "../../assets/images/icons/bill.png";
import chat from "../../assets/images/icons/chat.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

function SalesWithPickup() {
    const blocks = [
        {
            iconPath: Driver,
            title: "Rider network",
            subtitle: "A global network of over 100,000 riders",
        },
        {
            iconPath: bill,
            title: "Grow your sales",
            subtitle: "Reach more customers and get a sales boost of up to 30%",
        },
        {
            iconPath: chat,
            title: "30 minutes",
            subtitle: "Our average delivery time for customer orders",
        },
    ];
    return (
        <div className="layout">
            <section className="saleswithpickupHeroSection">
                <Fade bottom duration={1500}>
                    
                    <div className="heroContainer container">
                        <h2>Grow your sales with Pickup</h2>
                        <p>
                            Allows customers to collect orders direct from you.
                            Pickup is an additional way for customers to order
                            from your restaurant
                        </p>
                        <a className="btn btn-primary">Create account</a>
                    </div>
                </Fade>
            </section>
            <ThreeBlocks blocks={blocks} classes={"negativeTop"} />

            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <Fade bottom duration={1500}>
                        <h3 className="text-center mb-5">
                            The benefits of Pickup
                        </h3>
                    </Fade>

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

            <section className="servicesSection">
                <Fade bottom duration={1500}>
                    
                    <h3 className="text-center mb-5 text-white">
                        Learn about our services for business like yours
                    </h3>
                </Fade>

                <div className="container">
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6">
                                <div className="servicesBlock serviesRestaurant">
                                    <div className="servicesContainer">
                                        <h2>Restaurent</h2>
                                        <p>
                                            We can handle delivery, so you can
                                            focus on the food
                                        </p>
                                        <a className="btn btn-primary">
                                            Find out more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
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
                        </Slide>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <Fade bottom duration={1500}>
                        <div className="createAccount d-flex justify-content-between align-items-center">
                            <p className="fs-4 text-white ms-5 mb-0">
                                Not a Commande partner yet?
                            </p>
                            <a className="btn btn-primary mx-5">
                                Create Account
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
            {/* end */}

            <section className="py-5">
                <div className="container my-3">
                    <Fade bottom duration={1500}>
                        
                        <div className="text-center mb-5">
                            <p className="fs-3 mb-2">
                                Flexible ordering, for you and your customers
                            </p>
                            <p className="fs0p9">
                                A few more ways we can help you to generate more
                                customer orders
                            </p>
                        </div>
                    </Fade>

                    <div className="row justify-content-center">
                        <Fade bottom duration={1500}>
                            
                            <div className="col-md-4">
                                <div className="servicesBlock serviesGrocery">
                                    <div className="servicesContainer">
                                        <h2>Delivery</h2>
                                        <p>
                                            Give your customers the best
                                            possible experience and create
                                            long-term growth by offering
                                            delivery.
                                        </p>
                                        <a className="btn btn-primary mt-3">
                                            Find out more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            <section className="primaryBg py-5">
                <div className="container my-3">
                    <div className="text-center mb-5">
                        <Fade bottom duration={1500}>
                            <p className=" text-white fs-3 mb-2">
                                Frequently asked questions
                            </p>
                        </Fade>
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
export default SalesWithPickup;
