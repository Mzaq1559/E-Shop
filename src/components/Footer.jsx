import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="block1 container-fluid text-md-left pt-3">
                <div className="row text-center text-md-left pb-3">
                    <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 text-start goodboy">
                        <h5 className="mb-4 font-weight-bold text-warning">E-Shop</h5>
                        <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
                        <p><Link to="/contact" className="text-white text-decoration-none">Write about us</Link></p>
                        <p><Link to="/questions" className="text-white text-decoration-none">FAQs</Link></p>
                        <p><Link to="#" className="text-white text-decoration-none">Terms and Conditions</Link></p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 text-start goodboy">
                        <h5 className="mb-4 font-weight-bold text-warning">Footer menu</h5>
                        <p><Link to="/shipping_policy" className="text-white text-decoration-none">Shipping policy</Link></p>
                        <p><Link to="/terms" className="text-white text-decoration-none">Terms of service</Link></p>
                        <p><Link to="/privacy_policy" className="text-white text-decoration-none">Privacy policy</Link></p>
                        <p><Link to="/refund_policy" className="text-white text-decoration-none">Refund policy</Link></p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 text-start goodboy">
                        <h5 className="mb-4 font-weight-bold text-warning">Contact Info</h5>
                        <div className="goodboy">
                            <p><i className="fas fa-home me-2"></i>Pakistan</p>
                            <p><i className="fas fa-envelope me-2"></i>Shop123@email.com</p>
                            <p><i className="fas fa-phone me-2"></i>+921234567890</p>
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider m-auto" />
                <div className="row block2 text-light text-center py-3">
                    <p className="mb-0">
                        <Link to="#" className="text-light mx-2">Conditions of Use</Link>
                        <Link to="#" className="text-light mx-2">Privacy Notice</Link>
                        <span className="mx-2">© 2024-2025, E-Shop.com. All rights reserved</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
