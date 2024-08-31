import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
import Driver from "../../assets/images/icons/driver.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import bill from "../../assets/images/icons/bill.png";
import chat from "../../assets/images/icons/chat.png";
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
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

function MarketingandPromotions() {
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
            <section className="MarketingsHeroSection">
                <Fade bottom duration={1500}>
                    {" "}
                    <div className="heroContainer container">
                        <h2>Marketing and Promotions</h2>
                        <p>
                            Reach new, local customers with our marketing and
                            promote <br /> your business in a couple of clicks
                        </p>
                        <a className="btn btn-primary">Signup</a>
                    </div>
                </Fade>
            </section>

            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <h3 className="text-center mb-5">
                        Helping your business to grow
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

            <section className="primaryBg py-5">
                <Fade bottom duration={1500}>
                    {" "}
                    <h3 className="text-center text-white mb-5">
                        What is Marketer?
                    </h3>
                </Fade>

                <div className="container">
                    <Fade bottom duration={1500}>
                        {" "}
                        <p className="text-white">
                            Marketer is a tool our partners can use to attract
                            customers looking for deals and the best value for
                            money. <br /> <br />
                            Promote your restaurant and implement marketing
                            strategies by creating offers for specific menu
                            items or your whole menu, and set a minimum spend.{" "}
                            <br /> <br />
                            Whoever you want to reach, you’ll get valuable
                            insights from every offer. From sales data and how
                            many new customers you've gained, to how many people
                            saw your menu
                        </p>
                    </Fade>

                    <img src={whatismarketer} className="img-fluid" />
                </div>
            </section>
            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <Fade bottom duration={1500}>
                        {" "}
                        <p className="fs-2 mb-1 text-center">
                            Success with Marketer offers
                        </p>
                        <p className="smtxt text-center mb-5">
                            Trusted by restaurants and takeaways all over the
                            world
                        </p>
                    </Fade>

                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 d-flex">
                                <div className="my-auto">
                                    <img
                                        src={ideaa}
                                        className="img-fluid mb-4"
                                        width={150}
                                    />
                                    <p className="smtxt">
                                        “We’ve been on Marketer since it first
                                        launched, and from our very early stages
                                        we saw massive increases in traffic. The
                                        first offer we did for 30% off, we saw a
                                        110% increase. Every time we use
                                        Marketer on average we will see about a
                                        50% increase in order volumes and the
                                        amazing thing is that actually, most of
                                        the customers then stay to continue
                                        buying from the Athenian.”
                                    </p>
                                    <p className="smtxt greyC mt-4">
                                        Tim Vlassis, The Athenian
                                    </p>
                                </div>
                            </div>
                        </Slide>

                        <Slide right>
                            {" "}
                            <div className="col-md-6 d-flex">
                                <img src={Deliveroo} className="deliveroImg" />
                            </div>
                        </Slide>
                    </div>
                    <img src={logos} className="mt-5 img-fluid m-auto" />
                </div>
            </section>
            <ThreeBlocks blocks={blocks} noTitle={true} />

            <section>
                <div className="container">
                    <div className="createAccount d-flex justify-content-between align-items-center">
                        <Fade bottom duration={1500}>
                            {" "}
                            <p className="fs-4 text-white ms-5 mb-0">
                                Not a Commande partner yet?
                            </p>
                            <a className="btn btn-primary mx-5">
                                Create Account
                            </a>
                        </Fade>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container my-3">
                    <Fade bottom duration={1500}>
                        {" "}
                        <div className="text-center mb-5">
                            <p className="fs-3 mb-2">
                                Ways to grow and support your business
                            </p>
                            <p className="fs0p9">
                                Products, services and information for your
                                success as a Deliveroo partner
                            </p>
                        </div>
                    </Fade>

                    <div className="row">
                        <Fade bottom duration={1500}>
                            {" "}
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
                        </Fade>
                        <Fade bottom duration={1500}>
                            {" "}
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
                        </Fade>
                        <Fade bottom duration={1500}>
                            {" "}
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
                        </Fade>
                    </div>
                </div>
            </section>

            <section className="primaryBg py-5">
                <div className="container my-3">
                    <Fade bottom duration={1500}>
                        {" "}
                        <div className="text-center mb-5">
                            <p className=" text-white fs-3 mb-2">
                                Ways to grow and support your business
                            </p>
                        </div>
                    </Fade>

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
export default MarketingandPromotions;
