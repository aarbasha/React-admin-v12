import React from 'react'
import { Link, useNavigate } from "react-router-dom"

import Avatar from "../../../images/avatars/avatar-1.png"
const NavbarList = () => {
    const Rediract = useNavigate()
    const Logout = () => {
        localStorage.removeItem('auth')
        Rediract('/login')
    }

    return (
        <>
            <div className="top-navbar-right ms-3">
                <ul className="navbar-nav align-items-center">

                    <li className="nav-item dropdown dropdown-large">
                        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div className="projects">
                                <i className="bi bi-grid-3x3-gap-fill" />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <div className="row row-cols-3 gx-2">
                                <div className="col">
                                    <a href="ecommerce-orders.html">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-primary bg-gradient">
                                                <i className="bi bi-cart-plus-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Orders</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="javascript:;">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-danger bg-gradient">
                                                <i className="bi bi-people-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Users</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="ecommerce-products-grid.html">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-success bg-gradient">
                                                <i className="bi bi-bank2" />
                                            </div>
                                            <p className="mb-0 apps-name">Products</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="component-media-object.html">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-orange bg-gradient">
                                                <i className="bi bi-collection-play-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Media</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="pages-user-profile.html">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-purple bg-gradient">
                                                <i className="bi bi-person-circle" />
                                            </div>
                                            <p className="mb-0 apps-name">Account</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="javascript:;">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-dark bg-info bg-gradient">
                                                <i className="bi bi-file-earmark-text-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Docs</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="ecommerce-orders-detail.html">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-pink bg-gradient">
                                                <i className="bi bi-credit-card-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Payment</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="javascript:;">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-white bg-bronze bg-gradient">
                                                <i className="bi bi-calendar-check-fill" />
                                            </div>
                                            <p className="mb-0 apps-name">Events</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="javascript:;">
                                        <div className="apps p-2 radius-10 text-center">
                                            <div className="apps-icon-box mb-1 text-dark bg-warning bg-gradient">
                                                <i className="bi bi-book-half" />
                                            </div>
                                            <p className="mb-0 apps-name">Story</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/*end row*/}
                        </div>
                    </li>

                    <li className="nav-item dropdown dropdown-large">
                        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div className="messages">
                                <span className="notify-badge">5</span>
                                <i className="bi bi-messenger" />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end p-0">
                            <div className="p-2 border-bottom m-2">
                                <h5 className="h5 mb-0">Messages</h5>
                            </div>
                            <div className="header-message-list p-2">
                                <div className="dropdown-item bg-light radius-10 mb-1">
                                    <form className="dropdown-searchbar position-relative">
                                        <div className="position-absolute top-50 start-0 translate-middle-y px-3 search-icon">
                                            <i className="bi bi-search" />
                                        </div>
                                        <input className="form-control" type="search" placeholder="Search Messages" />
                                    </form>
                                </div>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/images/avatars/avatar-1.png" alt className="rounded-circle" width={52} height={52} />
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                Amelio Joly
                                                <span className="msg-time float-end text-secondary">1 m</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">The standard chunk of lorem...</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/images/avatars/avatar-2.png" alt className="rounded-circle" width={52} height={52} />
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                Althea Cabardo
                                                <span className="msg-time float-end text-secondary">7 m</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Many desktop publishing</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/images/avatars/avatar-3.png" alt className="rounded-circle" width={52} height={52} />
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                Katherine Pechon
                                                <span className="msg-time float-end text-secondary">2 h</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Making this the first true</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/images/avatars/avatar-4.png" alt className="rounded-circle" width={52} height={52} />
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                Peter Costanzo
                                                <span className="msg-time float-end text-secondary">3 h</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">It was popularised in the 1960</small>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div className="p-2">
                                <div><hr className="dropdown-divider" /></div>
                                <a className="dropdown-item" href="#">
                                    <div className="text-center">View All Messages</div>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown dropdown-large d-none d-sm-block">
                        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div className="notifications">
                                <span className="notify-badge">8</span>
                                <i className="bi bi-bell-fill" />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end p-0">
                            <div className="p-2 border-bottom m-2">
                                <h5 className="h5 mb-0">Notifications</h5>
                            </div>
                            <div className="header-notifications-list p-2">
                                <div className="dropdown-item bg-light radius-10 mb-1">
                                    <form className="dropdown-searchbar position-relative">
                                        <div className="position-absolute top-50 start-0 translate-middle-y px-3 search-icon">
                                            <i className="bi bi-search" />
                                        </div>
                                        <input className="form-control" type="search" placeholder="Search Messages" />
                                    </form>
                                </div>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="notification-box">
                                            <i className="bi bi-basket2-fill" />
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                New Orders
                                                <span className="msg-time float-end text-secondary">1 m</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">You have recived new orders</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="notification-box">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                New Customers
                                                <span className="msg-time float-end text-secondary">7 m</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5 new user registered</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="notification-box">
                                            <i className="bi bi-file-earmark-bar-graph-fill" />
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                24 PDF File
                                                <span className="msg-time float-end text-secondary">2 h</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">The pdf files generated</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="notification-box">
                                            <i className="bi bi-collection-play-fill" />
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                Time Response
                                                <span className="msg-time float-end text-secondary">3 h</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5.1 min avarage time response</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="notification-box">
                                            <i className="bi bi-cursor-fill" />
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                            <h6 className="mb-0 dropdown-msg-user">
                                                New Product Approved
                                                <span className="msg-time float-end text-secondary">1 d</span>
                                            </h6>
                                            <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Your new product has approved</small>
                                        </div>
                                    </div>
                                </a>


                            </div>
                            <div className="p-2">
                                <div><hr className="dropdown-divider" /></div>
                                <a className="dropdown-item" href="#">
                                    <div className="text-center">View All Notifications</div>
                                </a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item dropdown dropdown-large ml-5">
                        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div className="user-setting d-flex align-items-center gap-1">
                                <img src={Avatar} className="user-img" alt />
                                <div className="user-name d-none d-sm-block">Jhon Deo</div>
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src={Avatar} alt className="rounded-circle" width={60} height={60} />
                                        <div className="ms-3">
                                            <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                                            <small className="mb-0 dropdown-user-designation text-secondary">HR Manager</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="pages-user-profile.html">
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                            <i className="bi bi-person-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                            <span>Profile</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                            <i className="bi bi-gear-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                            <span>Setting</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link to="/" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                            <i className="bi bi-speedometer" />
                                        </div>
                                        <div className="setting-text ms-3">
                                            <span>Dashboard</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                            <i className="bi bi-piggy-bank-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                            <span>Earnings</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                            <i className="bi bi-cloud-arrow-down-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                            <span>Downloads</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <button className="dropdown-item" onClick={Logout}>
                                    <div className="d-flex align-items-center">
                                        <div className="setting-icon bg-danger">
                                            <i className="bi bi-lock-fill text-white" />
                                        </div>
                                        <div className="setting-text ms-3"><span>Logout</span></div>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default NavbarList