import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./style/auth.css"
const Login = () => {
  const Rediract = useNavigate();
  const setLoding = () => {
    document.querySelector("#login").setAttribute('disabled', '');
    document.querySelector("#inputEmailAddress").setAttribute('disabled', '');
    document.querySelector("#inputChoosePassword").setAttribute('disabled', '');
    document.querySelector(".spinner-border").classList.remove("d-none")
    document.querySelector(".error").classList.add('d-none')
  }
  const setError = () => {
    document.querySelector("#login").removeAttribute('disabled');
    document.querySelector("#inputEmailAddress").removeAttribute('disabled');
    document.querySelector("#inputChoosePassword").removeAttribute('disabled');
    document.querySelector(".spinner-border").classList.add('d-none')
    document.querySelector(".error").classList.remove('d-none')
    setTimeout(() => {
      document.querySelector(".error").classList.add('d-none')
    }, 4000)
    Rediract("/login");
  }

  const handelLogin = () => {
    setLoding()

    setTimeout(() => {

      const name = "x"

      if (name === "x") {
        localStorage.setItem("auth", "Anas")
        Rediract("/");
      } else {
        setError();
        Rediract("/login");
      }

    }, 3000)

  };
  return (
    <>
      <main className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 40, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
        >
          <div className="container">
            <div className="loginCard">
              <div className="card rounded-0 overflow-hidden shadow-none border mb-lg-0">
                <div className="row g-0">
                  <div className="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                    {/* <img src="assets/images/error/auth-img-7.png" className="img-fluid" alt /> */}
                  </div>
                  <div className="col-12 col-xl-4 order-xl-2">

                    <div className="d-none error position-relative">
                      <div className="bg-danger text-white text-center w-100 position-absolute py-2 px-2 text-center">
                        ... يرجى التأكد من البيانات والمحاولة من جديد

                      </div>
                    </div>

                    <div className="card-body p-4 p-sm-5">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title mb-4">Login</h3>
                        <div
                          className="mb-4 d-none spinner-border text-primary"
                          role="status"
                        >
                          {" "}
                          <span className="visually-hidden">Loading...</span>
                        </div>


                      </div>
                      {/* <p className="card-text mb-4"></p> */}

                      <form className="form-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <label
                              htmlFor="inputEmailAddress"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-envelope-fill" />
                              </div>
                              <input
                                type="email"
                                className="form-control radius-30 ps-5"
                                id="inputEmailAddress"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-lock-fill" />
                              </div>
                              <input
                                type="password"
                                className="form-control radius-30 ps-5"
                                id="inputChoosePassword"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-6 text-end">
                            <Link to={'/forgetPassword'}>
                              Forgot Password ?
                            </Link>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                // disabled
                                type="button"
                                onClick={handelLogin}
                                className="btn btn-primary radius-30"
                                id="login"
                              >
                                Login
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="login-separater text-center">
                              {" "}
                              <span>OR SIGN IN WITH EMAIL</span>
                              <hr />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex align-items-center gap-3 justify-content-center">
                              <button
                                type="button"
                                className="btn btn-dark text-danger"
                              >
                                <i className="bi bi-google me-0" />
                              </button>

                              <button
                                type="button"
                                className="btn btn-dark text-white"
                              >
                                <i className="bi bi-github me-0" />
                              </button>

                              <button
                                type="button"
                                className="btn btn-dark text-primary"
                              >
                                <i className="bi bi-linkedin me-0" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark text-info"
                              >
                                <i className="bi bi-facebook me-0" />
                              </button>
                            </div>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0">
                              <Link to="/singup">
                                Don't have an account yet?{" "}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Login;
