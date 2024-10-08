import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import logo from "../../assets/images/logo.png";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
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
import Fade from "react-reveal/Fade";

function CommandePartner() {
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
            <section className="heroSection">
                <div className="heroContainer container">
                    <Fade bottom duration={1500}>
                        <h2>Become a Commande partner</h2>
                    </Fade>
                    <Fade bottom duration={1500}>
                        <p>Together we can hep you reach more customers</p>
                    </Fade>
                    <Fade bottom duration={1500}>
                        <a className="btn btn-primary">Create account</a>
                    </Fade>
                </div>
            </section>
            <section className="servicesSection negativeTop">
                <h3 className="text-center mb-5 text-white">
                    Learn about our services for business like yours
                </h3>
                <div className="container">
                    <div className="row">
                        <Fade bottom duration={1500}>
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
                        </Fade>
                        <Fade bottom duration={1500}>
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
                        </Fade>
                    </div>
                </div>
            </section>
            <ThreeBlocks blocks={blocks} />
            <section className="deliveroo my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="my-auto">
                            <Fade bottom duration={1500}>    <p className="fs-2">
                                    How can Deliveroo help your business?
                                </p>
                                <p className="smtxt">
                                    When you become a Deliveroo partner, we’ll
                                    send you everything you need to get started,
                                    including signage, a tablet and a wireless
                                    printer.
                                </p></Fade>
                            
                                <Fade bottom duration={1500}>
                                    
                                    <p className="smtxt">
                                        <FaCheck color="#059372" /> 24 hr tablet
                                        support
                                    </p>
                                </Fade>
                                <Fade bottom duration={1700}>
                                    
                                    <p className="smtxt">
                                        <FaCheck color="#059372" /> Flexible
                                        payment plan
                                    </p>
                                </Fade>
                                <Fade bottom duration={1900}>
                                    
                                    <p className="smtxt">
                                        <FaCheck color="#059372" /> Use
                                        Deliveroo's rider network or your own
                                    </p>
                                </Fade>
                                <Fade bottom duration={2100}>
                                    
                                    <p className="smtxt">
                                        <FaCheck color="#059372" /> Help
                                        marketing your business with savings on
                                        photography and websites
                                    </p>
                                </Fade>
                                <Fade bottom duration={2300}>
                                    
                                    <p className="smtxt">
                                        <FaCheck color="#059372" /> Create loyal
                                        customers with Hub insights and tools
                                    </p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <Fade bottom duration={1500}>
                                
                                <img src={Deliveroo} className="deliveroImg" />
                            </Fade>
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
                                    <Fade bottom duration={1500}>
                                        <h2>Grocery</h2>
                                        <p>
                                            We'll increase your sales with new,
                                            online customers
                                        </p>
                                        <a className="btn btn-primary mt-3">
                                            Find out more
                                        </a>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="servicesBlock serviesPickup">
                                <div className="servicesContainer">
                                    <Fade bottom duration={1500}>
                                        <h2>Grocery</h2>
                                        <p>
                                            We'll increase your sales with new,
                                            online customers
                                        </p>
                                        <a className="btn btn-primary mt-3">
                                            Find out more
                                        </a>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="servicesBlock serviesMarketing">
                                <div className="servicesContainer">
                                    <Fade bottom duration={1500}>
                                        
                                        <h2>Grocery</h2>
                                        <p>
                                            We'll increase your sales with new,
                                            online customers
                                        </p>
                                        <a className="btn btn-primary mt-3">
                                            Find out more
                                        </a>
                                    </Fade>
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
                                        <Fade bottom duration={1500}>
                                            
                                            <p className="fs-5">Sign up</p>
                                            <p className="smtxt">
                                                Partner with Deliveroo and tell
                                                us about your business - you'll
                                                need your FSA rating to get
                                                started
                                            </p>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="stepBlock d-flex py-2 position-relative">
                                    <div>
                                        <div className="step-circle"></div>
                                        <div className="dashed-line"></div>
                                    </div>
                                    <div className="ms-4 mt-1">
                                        <Fade bottom duration={1500}>
                                            
                                            <p className="fs-5">Set up</p>
                                            <p className="smtxt">
                                                Upload a menu and share your
                                                store hours
                                            </p>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="stepBlock d-flex py-2 position-relative">
                                    <div>
                                        <div className="step-circle"></div>
                                    </div>
                                    <div className="ms-4 mt-1">
                                        <Fade bottom duration={1500}>
                                            
                                            <p className="fs-5">Sell</p>
                                            <p className="smtxt">
                                                Watch the orders come in and
                                                track them via Hub
                                            </p>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
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
            <section className="joinCommunity pt-5">
                <p className="text-center fs-3 my-5">
                    Join a community of businesses partnered with Deliveroo
                </p>
                <div className="d-flex position-relative h-300">
                    <Fade bottom duration={1500}>
                        <img src={partnersLogos} className="partnersLogos" />
                    </Fade>

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
        </div>
    );
}
export default CommandePartner;
