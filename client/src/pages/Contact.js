import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
function Contact() {
    return (
        <Layout title={"Contact us"}>
            <div className="row contact-us ">
                <div className="col-md-6 ">
                </div>
                <div className="rhs col-md-4 text-white">
                    <h1 className="p-2">
                        CONTACT US
                    </h1>
                    <p className="text-justify mt-4 mb-4">
                        Feel free to contact us at
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@pizzatimeapp.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-200-404
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
