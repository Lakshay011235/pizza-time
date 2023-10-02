import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import Login from "./Login";
import Register from "./Register";

function DetailedRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // const RegisterToast = ({ message }) => (
    //     <div>
    //         Register Success Sent
    //         <br />
    //         {/* {toast.success(message)} */}
    //         {message}
    //     </div>
    // );

    // Form submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address }
            );
            if (res.data.success) {
                // toast.custom(<RegisterToast message={res.data.message}/>);
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"Register | Pizza-time App"}>
            {/* <div className="page-container">
                <div className="form-container-animation-holder"></div>
                <div className="form-container">
                    <h1 className="text-center">User Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="Enter Your Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                placeholder="Enter Your Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        {/* <div className="mt-3">
                    <label htmlFor="role">Role:</label>
                    <select
                        className="form-control"
                        id="role"
                        name="role"
                        // value={this.state.role}
                        // onChange={this.handleChange}
                    >
                        <option value="0">User</option>
                        <option value="1">Admin</option>
                    </select>
                </div> */}
            {/*}
                        <button type="submit" className="btn btn-primary mt-3">
                            Register
                        </button>
                    </form>
                </div>
            </div> */}
            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3">
                                    <span>Log In </span>
                                    <span>Sign Up</span>
                                </h6>
                                <input
                                    class="checkbox"
                                    type="checkbox"
                                    id="reg-log"
                                    name="reg-log"
                                />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <Login />
                                        <Register />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DetailedRegister;
