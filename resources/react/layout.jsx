import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/app.css";
import ThreeBlocks from "./components/ThreeBlocks";
import logo from "../assets/images/logo.png";
import Partners from "../assets/images/icons/Partners.png";
import App from "../assets/images/icons/App.png";
import Driver from "../assets/images/icons/driver.png";
import Deliveroo from "../assets/images/Deliveroo.png";
import partnersLogos from "../assets/images/partnersLogos.png";
import RightCornerBuilding from "../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../assets/images/LeftCornerBuilding.png";
import Steps from "../assets/images/steps.png";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import Footer from "./components/Footer";

function layout() {
    const blocks = [
        {
            iconPath: Partners,
            title: "170,000+",
            subtitle: "Partners globally",
        },
        {
            iconPath: App,
            title: "10,000,000+",
            subtitle: "App downloads",
        },
        {
            iconPath: Driver,
            title: "180,000+",
            subtitle: "Riders globally",
        },
    ];
    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg navbar-light bg-fadeBlack">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" className="logoImg" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Business Type
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services & Tools
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <span className="dropdown-divider"></span>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Support
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-white">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary">
                                    Become a partner
                                </a>
                            </li>
                        </ul>
                        {/* <div className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </div> */}
                    </div>
                </div>
            </nav>

            <section className="heroSection">
                <div className="heroContainer">
                    <h2>Become a Commande partner</h2>
                    <p>Together we can hep you reach more customers</p>
                    <a className="btn btn-primary">Create account</a>
                </div>
            </section>
            <section className="servicesSection negativeTop">
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
            <ThreeBlocks blocks={blocks} />
            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                                <p className="fs-2">
                                    How can Deliveroo help your business?
                                </p>
                                <p className="smtxt">
                                    When you become a Deliveroo partner, we’ll
                                    send you everything you need to get started,
                                    including signage, a tablet and a wireless
                                    printer.
                                </p>
                                <p className="smtxt">
                                    <FaCheck color="#059372" /> 24 hr tablet
                                    support
                                </p>
                                <p className="smtxt">
                                    <FaCheck color="#059372" /> Flexible payment
                                    plan
                                </p>
                                <p className="smtxt">
                                    <FaCheck color="#059372" /> Use Deliveroo's
                                    rider network or your own
                                </p>
                                <p className="smtxt">
                                    <FaCheck color="#059372" /> Help marketing
                                    your business with savings on photography
                                    and websites
                                </p>
                                <p className="smtxt">
                                    <FaCheck color="#059372" /> Create loyal
                                    customers with Hub insights and tools
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img src={Deliveroo} className="deliveroImg" />
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
                        <p className="text-white fs0p9">
                            Products, services and information for your success
                            as a Deliveroo partner
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="servicesBlock serviesGrocery">
                                <div className="servicesContainer">
                                    <h2>Grocery</h2>
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
                                    <h2>Grocery</h2>
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
                                    <h2>Grocery</h2>
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
            <section className="commandeSteps py-5">
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
                                        <p className="fs-5">Sign up</p>
                                        <p className="smtxt">
                                            Partner with Deliveroo and tell us
                                            about your business - you'll need
                                            your FSA rating to get started
                                        </p>
                                    </div>
                                </div>
                                <div className="stepBlock d-flex py-2 position-relative">
                                    <div>
                                        <div className="step-circle"></div>
                                        <div className="dashed-line"></div>
                                    </div>
                                    <div className="ms-4 mt-1">
                                        <p className="fs-5">Set up</p>
                                        <p className="smtxt">
                                        Upload a menu and share your store hours
                                        </p>
                                    </div>
                                </div>
                                <div className="stepBlock d-flex py-2 position-relative">
                                    <div>
                                        <div className="step-circle"></div>
                                    </div>
                                    <div className="ms-4 mt-1">
                                        <p className="fs-5">Sell</p>
                                        <p className="smtxt">
                                        Watch the orders come in and track them via Hub
                                        </p>
                                    </div>
                                </div>
                            </div>
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
            <section className="joinCommunity pt-5">
                <p className="text-center fs-3 my-5">
                    Join a community of businesses partnered with Deliveroo
                </p>
                <div className="d-flex position-relative h-300">
                    <img src={partnersLogos} className="partnersLogos" />
                    <img
                        src={RightCornerBuilding}
                        className="RightCornerBuilding"
                    />
                    <img
                        src={LeftCornerBuilding}
                        className="LeftCornerBuilding"
                    />
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
            <Footer />
        </div>
    );
}
export default layout;
