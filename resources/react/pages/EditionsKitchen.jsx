import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
import bus from "../../assets/images/icons/bus.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import maps from "../../assets/images/icons/maps.png";
import resources from "../../assets/images/icons/resources.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import whatismarketer from "../../assets/images/whatismarketer.png";
import ideaa from "../../assets/images/ideaa.png";
import logos from "../../assets/images/logos.png";

import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EditionsKitchen() {
    const blocks = [
        {
            iconPath: bus,
            title: "Everything included",
            subtitle:
                "Partners prepare amazing food for their customers - we look after everything else, including delivery",
        },
        {
            iconPath: maps,
            title: "Hand-picked locations",
            subtitle:
                "Our data helps us bring global favourites and the best independents to more customers than ever",
        },
        {
            iconPath: resources,
            title: "High, high standards",
            subtitle:
                "100% of our kitchens are 5-star EHO rated or equivalent, we're hot on hygiene and safety",
        },
    ];
    return (
        <div className="layout">
            
            <section className="EditionsKitchenHeroSection">
                <div className="heroContainer container">
                    <h2>Editions, our delivery-only ‘dark’ kitchens</h2>
                    <p>
                        Editions connects growing businesses with hungry
                        customers, in brand new areas
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
                        What is an 'Editions kitchen'?
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
                    </div>
                </div>
            </section>

            <section className="primaryBg py-5">
                <h3 className="text-center text-white mb-5">
                    Take a look inside
                </h3>
                <div className="container">
                    <p className="text-white">
                        With Editions restaurants in 5 countries, we can now
                        fulfil even more delivery orders with affordable,
                        custom, delivery-only kitchens.
                        <br /> <br />
                        Watch the video below, to see what goes on inside an
                        Editions site.
                    </p>
                    <img src={whatismarketer} className="img-fluid" />
                </div>
            </section>
            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <p className="fs-2 mb-1 text-center">
                        Success with Marketer offers
                    </p>
                    <p className="smtxt text-center mb-5">
                        Trusted by restaurants and takeaways all over the world
                    </p>

                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                                <img
                                    src={ideaa}
                                    className="img-fluid mb-4"
                                    width={150}
                                />
                                <p className="smtxt">
                                    “We’ve been on Marketer since it first
                                    launched, and from our very early stages we
                                    saw massive increases in traffic. The first
                                    offer we did for 30% off, we saw a 110%
                                    increase. Every time we use Marketer on
                                    average we will see about a 50% increase in
                                    order volumes and the amazing thing is that
                                    actually, most of the customers then stay to
                                    continue buying from the Athenian.”
                                </p>
                                <p className="smtxt greyC mt-4">
                                    Tim Vlassis, The Athenian
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img src={Deliveroo} className="deliveroImg" />
                        </div>
                    </div>
                    <img src={logos} className="mt-5 img-fluid m-auto" />
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
                <div className="container mt-5 my-3">
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
export default EditionsKitchen;
