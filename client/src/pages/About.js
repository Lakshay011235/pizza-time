import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

function About() {
    return (
        <Layout title={'About us | Pizza-time App'}>
            <div className="row about">
                <div className="col-lg-6">
                    <img
                        src="/images/about.jpg" // Replace with the URL of your pizza shop image
                        alt="Pizza Shop Interior"
                        height="100%"
                    />
                </div>
                <div className="col-lg-6">
                    <h1>About Our Pizza Shop</h1>
                    <p>
                        Welcome to Pizza-time, where our passion is crafting delicious pizzas for pizza lovers like you. We take pride in using the finest ingredients and traditional recipes to create mouthwatering pizzas that satisfy your cravings.
                    </p>
                    <p>
                        Our mission is simple: to deliver the perfect slice of pizza every time. With a team of talented chefs and a commitment to quality, we've been serving our community with the best pizza experience for 25 years.
                    </p>
                    <p>
                        Whether you prefer classic Margherita, pepperoni, or our signature specialty pizzas, we have something to please every palate. We also offer a variety of sides, drinks, and desserts to complete your meal.
                    </p>
                    <p>
                        We invite you to join us at our pizza shop, located at <b>221B Baker Street, London NW1 6XE</b>, or order online for pickup or delivery. If you have any questions or feedback, please don't hesitate to <Link to={"/contact"}>contact us</Link>. Thank you for choosing Pizza-time for your pizza cravings!
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About;
