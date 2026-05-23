/**
 * Footer.jsx
 *
 * Site-wide footer rendered at the bottom of every page via App.jsx.
 *
 * Layout: three equal-width columns:
 *   1. E-Shop brand column  — About, Contact, FAQs, Terms links
 *   2. Footer menu column   — policy links (Shipping, Terms, Privacy, Refund)
 *   3. Contact info column  — address, email, phone
 *
 * All internal links use React Router's <Link> to stay within the SPA.
 * Policy pages (e.g. /shipping_policy) exist as standalone HTML files in
 * the project root and are not yet wired up as React routes.
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer
 * Purely presentational — no props or state required.
 */
const Footer = () => {
    return (
        <footer className="text-white">
            <div className="block1 container-fluid text-md-left pt-3">
                <div className="row text-center text-md-left pb-3">

                    {/* Column 1: Brand links */}
                    <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 text-start goodboy">
                        <h5 className="mb-4 font-weight-bold text-warning">E-Shop</h5>
                        <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
                        <p><Link to="/contact" className="text-white text-decoration-none">Write about us</Link></p>
                        <p><Link to="/questions" className="text-white text-decoration-none">FAQs</Link></p>
                        {/* TODO: /terms route is not yet defined in App.jsx */}
                        <p><Link to="#" className="text-white text-decoration-none">Terms and Conditions</Link></p>
                    </div>

                    {/* Column 2: Policy links — these point to standalone HTML files, not React routes */}
                    <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 text-start goodboy">
                        <h5 className="mb-4 font-weight-bold text-warning">Footer menu</h5>
                        <p><Link to="/shipping_policy" className="text-white text-decoration-none">Shipping policy</Link></p>
                        <p><Link to="/terms" className="text-white text-decoration-none">Terms of service</Link></p>
                        <p><Link to="/privacy_policy" className="text-white text-decoration-none">Privacy policy</Link></p>
                        <p><Link to="/refund_policy" className="text-white text-decoration-none">Refund policy</Link></p>
                    </div>

                    {/* Column 3: Contact info — update if business details change */}
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

                {/* Bottom bar: legal links and copyright notice */}
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
