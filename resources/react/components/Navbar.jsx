import React from "react";
import logo from '../../assets/images/logo.png';
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
    );
}
export default Navbar;
