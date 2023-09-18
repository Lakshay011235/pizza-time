import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

function Policy() {
    return (
        <Layout>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 policy">
                    <h1>Privacy Policy</h1>
                    <p>
                        At Pizza-time, we take your privacy seriously. This
                        Privacy Policy outlines our practices concerning the
                        collection, use, and protection of your personal
                        information.
                    </p>
                    <h2>Information We Collect</h2>
                    <p>
                        We may collect the following types of information when
                        you visit our website or use our services:
                    </p>
                    <ul>
                        <li>
                            Your name, email address, and contact information.
                        </li>
                        <li>Information about your orders and preferences.</li>
                        <li>
                            Device and browser information for analytical
                            purposes.
                        </li>
                    </ul>
                    <h2>How We Use Your Information</h2>
                    <p>We use your information for the following purposes:</p>
                    <ul>
                        <li>To process and fulfill your orders.</li>
                        <li>To improve our website and services.</li>
                        <li>
                            To send you promotional offers and updates (if you
                            opt-in).
                        </li>
                    </ul>
                    <h2>Information Sharing</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your
                        personal information to third parties without your
                        consent.
                    </p>
                    <h2>Security</h2>
                    <p>
                        We take appropriate measures to protect your
                        information. However, no online transmission or
                        electronic storage is 100% secure.
                    </p>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any
                        changes will be posted on this page.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy
                        Policy, please <Link to={"/contact"}>contact us</Link>.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Policy;
