import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/login`,
                { email, password }
            );
            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
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
        <div className="card-front">
            <div className="center-wrap">
                <form className="section text-center" onSubmit={handleSubmit}>
                    <h4 className="mb-4 pb-3">Log In</h4>
                    <div className="form-group">
                        <input
                            type="email"
                            name="logemail"
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
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn mt-4">
                        submit
                    </button>
                    <p className="mb-0 mt-4 text-center">
                        <a href="#0" className="link">
                            Forgot your password?
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
