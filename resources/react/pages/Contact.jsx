import React from "react";
import ThreeBlocks from "../components/ThreeBlocks";
import Partners from "../../assets/images/icons/Partners.png";
import App from "../../assets/images/icons/App.png";
import stone from "../../assets/images/icons/stone.png";
import Deliveroo from "../../assets/images/Deliveroo.png";
import clients from "../../assets/images/icons/clients.png";
import grow from "../../assets/images/icons/grow.png";
import partnersLogos from "../../assets/images/partnersLogos.png";
import RightCornerBuilding from "../../assets/images/RightCornerBuilding.png";
import LeftCornerBuilding from "../../assets/images/LeftCornerBuilding.png";
import Steps from "../../assets/images/steps.png";
import article from "../../assets/images/icons/article.png";
import author from "../../assets/images/icons/author.png";
import login from "../../assets/images/login.png";
import greenLogo from "../../assets/images/greenLogo.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS

function Contact() {
    return (
        <div className="layout">
            <nav className={`navbar navbar-expand-lg navbar-light secBg`}>
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
                            <li className="nav-item">
                                <Link className="text-white" to="/">
                                    Go to Deliveroo Restaurants
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="py-3 secBg text-center text-white">
                <div className="container">
                    <h3>
                        Advice and answers from the Deliveroo Restaurants Team
                    </h3>
                    {/* //search */}
                    <div className="mt-3">
                        <div className="input-group">
                            <span
                                className="input-group-text fadePrimaryBg b-0 p-3"
                                id="search-icon"
                            >
                                <i className="fas fa-search text-white"></i>
                            </span>
                            <input
                                type="text"
                                className="searchInput form-control fadePrimaryBg b-0"
                                placeholder="Search for articles"
                                aria-label="Search"
                                aria-describedby="search-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section className="ArticlesList py-5">
                <div className="container">
                    <div className="row gap-4">
                        <div className="col-12">
                            <div className="articleItem d-flex gap-4">
                                <img src={article} className="my-auto" />
                                <div className="articleContent">
                                    <p className="fw-bold mb-2">
                                        Get started on Deliveroo
                                    </p>
                                    <p className="smtxt mb-2">
                                        Find out who to contact about general
                                        enquiries, your menu and more
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={author}
                                            style={{ width: "20px" }}
                                        />
                                        <p className="m-0">
                                            By Berian and 3 others . 10 Articles
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="articleItem d-flex gap-4">
                                <img src={article} className="my-auto" />
                                <div className="articleContent">
                                    <p className="fw-bold mb-2">
                                        Get started on Deliveroo
                                    </p>
                                    <p className="smtxt mb-2">
                                        Find out who to contact about general
                                        enquiries, your menu and more
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={author}
                                            style={{ width: "20px" }}
                                        />
                                        <p className="m-0">
                                            By Berian and 3 others . 10 Articles
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="articleItem d-flex gap-4">
                                <img src={article} className="my-auto" />
                                <div className="articleContent">
                                    <p className="fw-bold mb-2">
                                        Get started on Deliveroo
                                    </p>
                                    <p className="smtxt mb-2">
                                        Find out who to contact about general
                                        enquiries, your menu and more
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={author}
                                            style={{ width: "20px" }}
                                        />
                                        <p className="m-0">
                                            By Berian and 3 others . 10 Articles
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="articleItem d-flex gap-4">
                                <img src={article} className="my-auto" />
                                <div className="articleContent">
                                    <p className="fw-bold mb-2">
                                        Get started on Deliveroo
                                    </p>
                                    <p className="smtxt mb-2">
                                        Find out who to contact about general
                                        enquiries, your menu and more
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={author}
                                            style={{ width: "20px" }}
                                        />
                                        <p className="m-0">
                                            By Berian and 3 others . 10 Articles
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;
