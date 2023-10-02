import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="card-back">
            <div className="center-wrap">
                <form className="section text-center" onSubmit={handleSubmit}>
                    <h4 className="mb-4 pb-3">Sign Up</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="regname"
                            className="form-style"
                            placeholder="Your Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-user"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="email"
                            name="regemail"
                            className="form-style"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-at"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="password"
                            name="regpass"
                            className="form-style"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="text"
                            className="form-style"
                            name="regphone"
                            placeholder="Your Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="text"
                            className="form-style"
                            name="regaddress"
                            placeholder="Your Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn mt-4">
                        submit
                    </button>
                    
                </form>
            </div>
        </div>
        // {/*<Layout title={"Register | Pizza-time App"}>
        //      <div className="register">
        //         <form>
        //             <div className="mb-3">
        //                 <label for="inputEmail" className="form-label">
        //                     Email address
        //                 </label>
        //                 <input
        //                     type="email"
        //                     className="form-control"
        //                     id="inputEmail"
        //                 />
        //             </div>
        //             <div className="mb-3">
        //                 <label for="exampleInputPassword1" className="form-label">
        //                     Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     className="form-control"
        //                     id="exampleInputPassword1"
        //                 />
        //             </div> */}
        //     {/* TODO: Add keep me logged in */}
        //     {/* <div className="mb-3 form-check">
        //                 <input
        //                     type="checkbox"
        //                     className="form-check-input"
        //                     id="exampleCheck1"
        //                 />
        //                 <label className="form-check-label" for="exampleCheck1">
        //                     Check me out
        //                 </label>
        //             </div> */}
        //     {/* <button type="submit" className="btn btn-primary">
        //                 Submit
        //             </button>
        //         </form>

        //     </div> */}

        // {/*</Layout>*/}
    );
}

export default Register;
