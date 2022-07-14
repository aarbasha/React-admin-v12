import React from 'react'
import { NavLink } from "react-router-dom"
const SidebarContent = () => {


    return (
        <>
            <div className="tab-content">

                <div className="tab-pane fade active show" id="pills-dashboards">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Dashboards</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <NavLink to="/admin/index" className="list-group-item"><i className="bi bi-cart-plus" />e-Commerce</NavLink>
                        <NavLink to="/admin/app" className="list-group-item"><i className="bi bi-wallet" />Sales</NavLink>
                        <NavLink to="/admin/siles" className="list-group-item"><i className="bi bi-bar-chart-line" />Analytics</NavLink>
                        <NavLink to="/admin/economec" className="list-group-item"><i className="bi bi-archive" />Project Management</NavLink>
                        <NavLink to="/admin/ds" className="list-group-item"><i className="bi bi-cast" />CMS Dashboard</NavLink>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-application">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Application</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="app-emailbox.html" className="list-group-item"><i className="bi bi-envelope" />Email</a>
                        <a href="app-chat-box.html" className="list-group-item"><i className="bi bi-chat-left-text" />Chat Box</a>
                        <a href="app-file-manager.html" className="list-group-item"><i className="bi bi-archive" />File Manager</a>
                        <a href="app-to-do.html" className="list-group-item"><i className="bi bi-check2-square" />Todo List</a>
                        <a href="app-invoice.html" className="list-group-item"><i className="bi bi-receipt" />Invoice</a>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-widgets">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Widgets</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="widgets-static-widgets.html" className="list-group-item"><i className="bi bi-box" />Static Widgets</a>
                        <a href="widgets-data-widgets.html" className="list-group-item"><i className="bi bi-bar-chart" />Data Widgets</a>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-ecommerce">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">eCommerce</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="ecommerce-products-list.html" className="list-group-item"><i className="bi bi-box-seam" />Products List</a>
                        <a href="ecommerce-products-grid.html" className="list-group-item"><i className="bi bi-box-seam" />Products Grid</a>
                        <a href="ecommerce-products-categories.html" className="list-group-item"><i className="bi bi-card-text" />Products Categories</a>
                        <a href="ecommerce-orders.html" className="list-group-item"><i className="bi bi-plus-square" />Orders</a>
                        <a href="ecommerce-orders-detail.html" className="list-group-item"><i className="bi bi-handbag" />Orders Detail</a>
                        <a href="ecommerce-add-new-product.html" className="list-group-item"><i className="bi bi-handbag" />Add New Product</a>
                        <a href="ecommerce-add-new-product-2.html" className="list-group-item"><i className="bi bi-handbag" />Add New Product 2</a>
                        <a href="ecommerce-transactions.html" className="list-group-item"><i className="bi bi-handbag" />Transactions</a>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-components">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Components</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="component-alerts.html" className="list-group-item"><i className="bi bi-bell" />Alerts</a>
                        <a href="component-accordions.html" className="list-group-item"><i className="bi bi-arrows-collapse" />Accordions</a>
                        <a href="component-badges.html" className="list-group-item"><i className="bi bi-badge-8k" />Badges</a>
                        <a href="component-buttons.html" className="list-group-item"><i className="bi bi-menu-button" />Buttons</a>
                        <a href="component-cards.html" className="list-group-item"><i className="bi bi-card-list" />Cards</a>
                        <a href="component-carousels.html" className="list-group-item"><i className="bi bi-card-image" />Carousels</a>
                        <a href="component-list-groups.html" className="list-group-item"><i className="bi bi-list-ol" />List Groups</a>
                        <a href="component-media-object.html" className="list-group-item"><i className="bi bi-collection" />Media Objects</a>
                        <a href="component-modals.html" className="list-group-item"><i className="bi bi-binoculars" />Modals</a>
                        <a href="component-navs-tabs.html" className="list-group-item"><i className="bi bi-segmented-nav" />Navs &amp; Tabs</a>
                        <a href="component-navbar.html" className="list-group-item"><i className="bi bi-list" />Navbars</a>
                        <a href="component-paginations.html" className="list-group-item"><i className="bi bi-arrow-down-up" />Pagination</a>
                        <a href="component-popovers-tooltips.html" className="list-group-item"><i className="bi bi-droplet" />Popovers &amp; Tooltips</a>
                        <a href="component-progress-bars.html" className="list-group-item"><i className="bi bi-eject" />Progress</a>
                        <a href="component-spinners.html" className="list-group-item"><i className="bi bi-gear-wide" />Spinners</a>
                        <a href="component-notifications.html" className="list-group-item"><i className="bi bi-app-indicator" />Notifications</a>
                        <a href="component-avtars-chips.html" className="list-group-item"><i className="bi bi-person-badge" />Avatrs &amp; Chips</a>
                        <a href="component-typography.html" className="list-group-item"><i className="bi bi-person-badge" />Typography</a>


                    </div>


                </div>
                <div className="tab-pane fade" id="pills-forms">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Forms</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="form-elements.html" className="list-group-item"><i className="bi bi-award" />Form Elements</a>
                        <a href="form-input-group.html" className="list-group-item"><i className="bi bi-back" />Input Groups</a>
                        <a href="form-layouts.html" className="list-group-item"><i className="bi bi-bookmark-check" />Form Layouts</a>
                        <a href="form-validations.html" className="list-group-item"><i className="bi bi-broadcast-pin" />Form Validations</a>
                        <a href="form-file-upload.html" className="list-group-item"><i className="bi bi-cloud-upload" />File Upload</a>
                        <a href="form-date-time-pickes.html" className="list-group-item"><i className="bi bi-calendar-date" />Date Pickers</a>
                        <a href="form-select2.html" className="list-group-item"><i className="bi bi-check2-circle" />Select2</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-tables">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Tables</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="table-basic-table.html" className="list-group-item"><i className="bi bi-table" />Basic Tables</a>
                        <a href="table-advance-tables.html" className="list-group-item"><i className="bi bi-basket3" />Advance Tables</a>
                        <a href="table-datatable.html" className="list-group-item"><i className="bi bi-graph-up" />Data Tables</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-authentication">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Authentication</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="authentication-signin.html" className="list-group-item"><i className="bi bi-easel" />Sign In</a>
                        <a href="authentication-signin-with-header-footer.html" className="list-group-item d-flex align-items-center"><i className="bi bi-eject" />Sign In with Header &amp; Footer</a>
                        <a href="authentication-signup.html" className="list-group-item"><i className="bi bi-emoji-heart-eyes" />Sign Up</a>
                        <a href="authentication-signup-with-header-footer.html" className="list-group-item d-flex align-items-center"><i className="bi bi-eye" />Sign Up with Header &amp; Footer</a>
                        <a href="authentication-forgot-password.html" className="list-group-item"><i className="bi bi-file-earmark-code" />Forgot Password</a>
                        <a href="authentication-reset-password.html" className="list-group-item"><i className="bi bi-gem" />Reset Password</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-icons">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Icons</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="icons-line-icons.html" className="list-group-item"><i className="bi bi-brightness-low" />Line Icons</a>
                        <a href="icons-boxicons.html" className="list-group-item"><i className="bi bi-chat" />Boxicons</a>
                        <a href="icons-feather-icons.html" className="list-group-item"><i className="bi bi-droplet" />Feather Icons</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-charts">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Charts</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="charts-chartjs.html" className="list-group-item"><i className="bi bi-bar-chart" />Chart JS</a>
                        <a href="charts-apex-chart.html" className="list-group-item"><i className="bi bi-pie-chart" />Apex Chart</a>
                        <a href="charts-highcharts.html" className="list-group-item"><i className="bi bi-graph-up" />Highcharts</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-maps">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Maps</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="map-google-maps.html" className="list-group-item"><i className="bi bi-geo-alt" />Google Map</a>
                        <a href="map-vector-maps.html" className="list-group-item"><i className="bi bi-geo" />Vector Map</a>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-pages">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Pages</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="pages-user-profile.html" className="list-group-item"><i className="bi bi-alarm" />User Profile</a>
                        <a href="pages-timeline.html" className="list-group-item"><i className="bi bi-archive" />Timeline</a>
                        <a href="pages-faq.html" className="list-group-item"><i className="bi bi-question-diamond" />FAQ</a>
                        <a href="pages-pricing-tables.html" className="list-group-item"><i className="bi bi-tags" />Pricing</a>
                        <a href="pages-errors-404-error.html" className="list-group-item"><i className="bi bi-bug" />404 Error</a>
                        <a href="pages-errors-500-error.html" className="list-group-item"><i className="bi bi-diagram-2" />500 Error</a>
                        <a href="pages-errors-coming-soon.html" className="list-group-item"><i className="bi bi-egg-fried" />Coming Soon</a>
                        <a href="pages-blank-page.html" className="list-group-item"><i className="bi bi-flag" />Blank Page</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarContent