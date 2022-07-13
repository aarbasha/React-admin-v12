import React from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { BsSuitHeart } from "react-icons/bs"
import Logo from "../../../images/brand-logo-2.png";
import "../../frontend/public/Style/Navbar.css"


const NavbarUser = () => {

    const Rediract = useNavigate()
    const Logout = () => {
        localStorage.removeItem('auth')
        Rediract('/login')
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-user navbar-expand-lg fixed-top rounded-0 border-bottom">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} width={140} />
                        </a>
                        <button
                            id='toogle'
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                        href=''
                                        data-bs-toggle="dropdown"
                                    >
                                        Services
                                        <i className="bi bi-chevron-down align-middle ms-2" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/user/card">
                                                Action
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>



                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    localStorage.getItem("auth") ? (
                                        <>


                                            <div className=' d-flex justify-content-center'>


                                                <li className="nav-item dropdown mx-4">
                                                    <a
                                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        {localStorage.getItem('auth')}
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <Link to="/admin/index" className="dropdown-item btn-info">
                                                                Admin Dashboard
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <button onClick={Logout} className="dropdown-item btn-danger">
                                                                Logout
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <ul className='navbar-nav d-flex justify-content-center'>
                                                    <li className='nav-item mx-2 '>
                                                        <NavLink to="/user/card" className="btn  btn-outline-primary position-relative me-lg-3 rounded-circle">
                                                            <FiShoppingCart />
                                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">123 <span className="visually-hidden">unread messages</span></span>
                                                        </NavLink>
                                                    </li>

                                                    <li className='nav-item mx-2 '>
                                                        <NavLink to="/user/favorite" className="btn  btn-outline-danger position-relative me-lg-3 rounded-circle">
                                                            <BsSuitHeart />
                                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">500 <span className="visually-hidden">unread messages</span></span>
                                                        </NavLink>
                                                    </li>
                                                </ul>






                                            </div>


                                        </>) : (

                                        <>

                                            <div className="d-flex justify-content-center ms-3 gap-3">
                                                <NavLink
                                                    to="/login"
                                                    className="Login btn btn-outline-primary px-3 radius-30"
                                                >
                                                    Login
                                                </NavLink>
                                                <NavLink
                                                    to="/singup"
                                                    className="Signup btn btn-outline-primary px-3 radius-30"
                                                >
                                                    Sign Up
                                                </NavLink>
                                            </div>
                                        </>)


                                }

                            </ul>



                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarUser