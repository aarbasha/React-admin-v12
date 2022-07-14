import React from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/brand-logo-2.png";
import "./style/auth.css";

const ResetPassword = () => {
    const Rediract = useNavigate();
    const setDisabled = () => {
        document.querySelector("#ChangePassword").setAttribute("disabled", "");
        document.querySelector("#inputNewPassword").setAttribute("disabled", "");
        document.querySelector("#inputConfirmPassword").setAttribute("disabled", "");
        document.querySelector(".spinner-border").classList.remove("d-none");
    };

    const setSuccess = () => {
        // document.querySelector("#ChangePassword").removeAttribute("disabled");
        // document.querySelector("#inputNewPassword").removeAttribute("disabled");
        // document.querySelector("#inputConfirmPassword").removeAttribute("disabled");
        document.querySelector(".spinner-border").classList.add("d-none");
        document.querySelector(".success").classList.remove("d-none");
        setTimeout(() => {
            document.querySelector(".success").classList.add("d-none");
        }, 7000);
    };

    const BtnResetPassword = () => {
        setDisabled();

        setTimeout(() => {
            setSuccess();
        }, 4000);

        setTimeout(() => {
            Rediract("/login");
        }, 6000);
    };

    return (
        <main className="authentication-content">

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 40, scale: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, y: 40, scale: 0.8 }}
            >
                <div className="container">
                    <div className="authentication-card ResetPassword">
                        <div className="card shadow rounded-0 overflow-hidden">

                            <div className="row g-0">


                                <div className="d-none success">
                                    <div className="bg-success text-white text-center w-100 position-absolute py-2 px-2 text-center">
                                        The data has been successfully sent to the email, please check
                                        Thank you
                                    </div>
                                </div>

                                <div
                                    className=" m-4 d-none loding spinner-border text-primary"
                                    role="status"
                                >
                                    <span className="visually-hidden">Loading...</span>
                                </div>




                                <div className="col-lg-6 d-flex align-items-center justify-content-center border-end">
                                    <img src={Logo} className="img-fluid" alt="logo" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-4 p-sm-5">
                                        <h3 className="card-title text-center">Genrate New Password</h3>
                                        <p className="card-text">
                                            We received your reset password request. Please enter your new password!</p>

                                        <div className="row g-3">

                                            <div className="col-12">
                                                <label htmlFor="inputNewPassword" className="form-label">
                                                    New Password
                                                </label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill" /></div>
                                                    <input type="email" className="form-control radius-30 ps-5" id="inputNewPassword" placeholder="Enter New Password" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="inputConfirmPassword" className="form-label">
                                                    Confirm Password
                                                </label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill" /></div>
                                                    <input type="password" className="form-control radius-30 ps-5" id="inputConfirmPassword" placeholder="Confirm Password" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-grid gap-3">
                                                    <button onClick={BtnResetPassword} id="ChangePassword" type="button" className="btn btn-primary radius-30">
                                                        Change Password
                                                    </button>
                                                    <Link to={"/login"} type="button" id='ChangePassword' className="btn btn-dark radius-30">
                                                        Back to Login
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </main>

    )
}

export default ResetPassword