import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    const isLogin = location.pathname === '/Login';
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-fadeBlack ${isLogin ? 'position-relative' : ''}`}>
            <div className="container">
                <a className="navbar-brand" to="#">
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
                                    <Link className="dropdown-item" to="/MarketingandPromotions">
                                        Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/SalesWithPickup">
                                        Packaging
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/OurTechnology">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/ProfessionalPhotography">
                                        Food Photography
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/EditionsKitchen">
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
                                    <a className="dropdown-item" to="/">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" to="/">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" to="/">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-white" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary" to="/Login">Become a partner</Link>
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
