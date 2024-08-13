import React from "react";
import english from "../../assets/images/icons/english.png";
function Footer() {
    return (
        <footer>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footerBlock">
                            <p className="fs-5 mb-2">Deliveroo Restaurents</p>
                            <a>Editions</a>
                            <a>Signature</a>
                            <a>Marketing</a>
                            <a>Packaging</a>
                            <a>Restaurent Hub</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerBlock">
                            <p className="fs-5 mb-2">Legal</p>
                            <a>Privacy </a>
                            <a>Policies </a>
                            <a>Cookies </a>
                            <a>Terms and conditions </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerBlock">
                            <p className="fs-5 mb-2">Help</p>
                            <a>Help Center</a>
                            <a>COVID-19</a>
                            <a>Log in to Restaurent Hub</a>
                            <a>Contact us</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerBlock">
                            <p className="fs-5 mb-2">
                                Want your business on Commandee?
                            </p>
                            <p className="fs0p9">
                                Send us your information and we'll reach out to
                                help you become a Commande Partner
                            </p>
                            <a className="btn btn-primary d-inline-block">Become a partner</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                <a className="ms-auto me-0 text-decoration-none text-white my-4">
                    <img src={english} width={16} /> United Kingdom
                </a>
            </div>
            </div>
          
        </footer>
    );
}
export default Footer;
