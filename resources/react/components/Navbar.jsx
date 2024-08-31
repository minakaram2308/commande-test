import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import greenLogo from "../../assets/images/greenLogo.png";

function Navbar() {
    const location = useLocation();
    const isLogin = location.pathname === "/Login";
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-fadeBlack ${
                isLogin ? "position-relative" : ""
            }`}
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="logoImg" />
                </Link>
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
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Get Started
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/FoodDelivery"
                                    >
                                        Delivery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/SalesWithPickup"
                                    >
                                        Pickup
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Business Type
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/GroceryPartner"
                                    >
                                        Grocery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/RestaurantPartner"
                                    >
                                        Restaurant
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                to="#"
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
                                    <Link
                                        className="dropdown-item"
                                        to="/MarketingandPromotions"
                                    >
                                        Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/SalesWithPickup"
                                    >
                                        Packaging
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/OurTechnology"
                                    >
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/ProfessionalPhotography"
                                    >
                                        Food Photography
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/EditionsKitchen"
                                    >
                                        Restaurant Hub
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Support
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/Contact">
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Contact">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Contact">
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {!isLogin && (
                                <Link className="btn btn-white" to="/Login">
                                    Login
                                </Link>
                            )}
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-primary"
                                onClick={openModal}
                            >
                                Become a partner
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <div className="mt-3 text-center">
                        <img src={greenLogo} className="mb-4" />
                        <p className="fs-4 mb-1">Business owner details</p>
                        <p>
                            We'll use personal details of the business owner to
                            <br />
                            get intouch when we need to
                        </p>
                    </div>
                    <form>
                        <input
                            type="hidden"
                            name="_token"
                            value="V4Z3vdFi8EoGgEMdmGofBX6OGUvMOe1v7jnZEKCj"
                            autoComplete="off"
                        />
                        <div className="row">
                            <div className="mb-3 col-sm-6">
                                <label htmlFor="f_name">First name *</label>
                                <input
                                    className="form-control"
                                    name="f_name"
                                    id="f_name"
                                    type="text"
                                    placeholder="E.g: Joes"
                                    required=""
                                />
                            </div>
                            <div className="mb-3 col-sm-6">
                                <label htmlFor="l_name">Last name *</label>
                                <input
                                    className="form-control"
                                    name="l_name"
                                    id="l_name"
                                    type="text"
                                    placeholder="E.g: Bourdin"
                                    required=""
                                />
                            </div>
                            <div className="mb-3 col-sm-12">
                                <label htmlFor="phone">
                                    Restaurant or shop phone number *
                                </label>
                                <input
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    type="text"
                                    pattern="^\+\d{12}$"
                                    placeholder="+440000000000"
                                    required=""
                                />
                            </div>
                            <div className="mb-3 col-sm-12">
                                <label htmlFor="email">Email address *</label>
                                <input
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    type="text"
                                    required=""
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    placeholder="E.g : Example@example.com"
                                />
                                <span className="text-muted">
                                    We’ll use this email address to contact you
                                    directly
                                </span>
                            </div>
                            <div className="mb-3 col-sm-12">
                                <label htmlFor="password">
                                    Create a password*
                                </label>
                                <input
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    type="password"
                                    required=""
                                    placeholder="E.g : ****************"
                                    minLength="10"
                                />
                                <span className="text-muted">
                                    Minimum 10 characters
                                </span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-primary  w-100">
                                Next
                            </button>
                            <p className="text-center my-2">
                                <span>Already have an account?</span>
                                <a
                                    href="javascript:"
                                    className="link"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Log in
                                </a>
                            </p>
                            <hr />
                            <span className="my-2">
                                For details on our processing of your personal
                                information please see our
                                <a className="link">Privacy Policy.</a>
                            </span>
                        </div>
                        <div className="mt-2">
                            {/* <div
                                className="progress mt-2"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div
                                    className="progress-bar"
                                ></div>
                            </div> */}
                        </div>
                    </form>
                </div>
            </Modal>
        </nav>
    );
}
export default Navbar;
