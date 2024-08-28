import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
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
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
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
                                    <a className="dropdown-item" href="#">
                                        Delivery
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Pickup
                                    </a>
                                </li>
                            </ul>
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
                                Business Type
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/grocery"
                                    >
                                        Grocery
                                    </Link>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Restaurant
                                    </a>
                                </li>
                            </ul>
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
                                        Marketing
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Packaging
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Technology
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Food Photography
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Restaurant Hub
                                    </a>
                                </li>
                            </ul>
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
                                Support
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-white">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary">Become a partner</a>
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
    );
}
export default Navbar;
