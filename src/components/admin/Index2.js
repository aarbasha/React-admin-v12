import React from 'react'
import { motion } from 'framer-motion'
const Index2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <div>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className>
                                        <p className="mb-1">Total Orders</p>
                                        <h4 className="mb-0 text-primary">8245</h4>
                                    </div>
                                    <div className="ms-auto fs-2 text-primary">
                                        <i className="bi bi-cart-check" />
                                    </div>
                                </div>
                                <div className="border-top my-2" />
                                <small className="mb-0"><span className="text-success">+2.5 <i className="bi bi-arrow-up" /></span> Compared to last month</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className>
                                        <p className="mb-1">Total Sales</p>
                                        <h4 className="mb-0 text-success">$4,562</h4>
                                    </div>
                                    <div className="ms-auto fs-2 text-success">
                                        <i className="bi bi-piggy-bank" />
                                    </div>
                                </div>
                                <div className="border-top my-2" />
                                <small className="mb-0"><span className="text-success">+3.6 <i className="bi bi-arrow-up" /></span> Compared to last month</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className>
                                        <p className="mb-1">Purchase</p>
                                        <h4 className="mb-0 text-pink">$9,482</h4>
                                    </div>
                                    <div className="ms-auto fs-2 text-pink">
                                        <i className="bi bi-bag-check" />
                                    </div>
                                </div>
                                <div className="border-top my-2" />
                                <small className="mb-0"><span className="text-danger">-1.8 <i className="bi bi-arrow-down" /></span> Compared to last month</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className>
                                        <p className="mb-1">Return</p>
                                        <h4 className="mb-0 text-orange">146</h4>
                                    </div>
                                    <div className="ms-auto fs-2 text-orange">
                                        <i className="bi bi-recycle" />
                                    </div>
                                </div>
                                <div className="border-top my-2" />
                                <small className="mb-0"><span className="text-success">+3.7 <i className="bi bi-arrow-up" /></span> Compared to last month</small>
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Sales Figures</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                                            <div className="font-13"><i className="bi bi-circle-fill text-primary" /><span className="ms-2">Sales</span></div>
                                            <div className="font-13"><i className="bi bi-circle-fill text-success" /><span className="ms-2">Orders</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-4">
                                    <div className>
                                        <span className="donut" data-peity="{ &quot;fill&quot;: [&quot;#8932ff&quot;, &quot;rgba(135, 50, 255, 0.15)&quot;], &quot;innerRadius&quot;: 28, &quot;radius&quot;: 50, &quot;width&quot;: 67, &quot;height&quot;: 67}">3/5</span>
                                    </div>
                                    <div className>
                                        <h4 className="mb-0">68%</h4>
                                        <p className="mb-1">Conversation Rate</p>
                                    </div>
                                    <div className="dropdown ms-auto">
                                        <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">Action</a>
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:;">Another action</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="border-top my-4" />
                                <div className="d-flex align-items-center gap-4">
                                    <div className>
                                        <span className="donut" data-peity="{ &quot;fill&quot;: [&quot;#ff6632&quot;, &quot;rgba(255, 101, 50, 0.15)&quot;], &quot;innerRadius&quot;: 28, &quot;radius&quot;: 50, &quot;width&quot;: 67, &quot;height&quot;: 67}">3.5/5</span>
                                    </div>
                                    <div className>
                                        <h4 className="mb-0">76%</h4>
                                        <p className="mb-1">Traffic this year</p>
                                    </div>
                                    <div className="dropdown ms-auto">
                                        <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">Action</a>
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:;">Another action</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-end">
                                    <div>
                                        <h4 className="mb-1">256.2K</h4>
                                        <p className="mb-0">Visitors this year</p>
                                    </div>
                                    <div className="ms-auto">
                                        <p className="mb-0 text-danger">1.5% <i className="bi bi-arrow-up" /></p>
                                    </div>
                                </div>
                                <div id="chart2" />
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="row g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Statistics</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex">
                                            <div className="dropdown ms-auto">
                                                <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 g-3 mt-4">
                                    <div className="col text-center">
                                        <div className="w_chart" id="chart3" data-percent={68}>
                                            <span className="w_percent" />
                                        </div>
                                        <h5 className="mt-3 mb-0">2.4K</h5>
                                        <p className="mb-0 font-13">Customers</p>
                                    </div>
                                    <div className="col text-center">
                                        <div className="w_chart" id="chart4" data-percent={78}>
                                            <span className="w_percent" />
                                        </div>
                                        <h5 className="mt-3 mb-0">1.8K</h5>
                                        <p className="mb-0 font-13">Item Sold</p>
                                    </div>
                                    <div className="col text-center">
                                        <div className="w_chart" id="chart5" data-percent={46}>
                                            <span className="w_percent" />
                                        </div>
                                        <h5 className="mt-3 mb-0">2.6K</h5>
                                        <p className="mb-0 font-13">Tickets</p>
                                    </div>
                                </div>
                                <div className="bg-light p-3 radius-10 mt-3">
                                    <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Product Actions</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                                            <div className="font-13"><i className="bi bi-circle-fill text-primary" /><span className="ms-2">Views</span></div>
                                            <div className="font-13"><i className="bi bi-circle-fill text-warning" /><span className="ms-2">Clicks</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart6" />
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="card radius-10">
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-12 col-lg-4 col-xl-4 d-flex">
                                <div className="card mb-0 radius-10 border shadow-none w-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Top Sales Locations</h5>
                                        <h4 className="mt-4">$36.2K <i className="flag-icon flag-icon-us rounded" /></h4>
                                        <p className="mb-0 text-secondary font-13">Our Most Customers in US</p>
                                        <ul className="list-group list-group-flush mt-3">
                                            <li className="list-group-item border-top">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-us" /></div>
                                                    <div>United States</div>
                                                    <div className="ms-auto">289</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-au" /></div>
                                                    <div>Malaysia</div>
                                                    <div className="ms-auto">562</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-in" /></div>
                                                    <div>India</div>
                                                    <div className="ms-auto">354</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-ca" /></div>
                                                    <div>Indonesia</div>
                                                    <div className="ms-auto">147</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-ad" /></div>
                                                    <div>Turkey</div>
                                                    <div className="ms-auto">652</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-cu" /></div>
                                                    <div>Netherlands</div>
                                                    <div className="ms-auto">287</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-is" /></div>
                                                    <div>Italy</div>
                                                    <div className="ms-auto">634</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div><i className="flag-icon flag-icon-ge" /></div>
                                                    <div>Canada</div>
                                                    <div className="ms-auto">524</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 col-xl-8 d-flex">
                                <div className="card mb-0 radius-10 border shadow-none w-100">
                                    <div className="card-body">
                                        <div className id="geographic-map" />
                                    </div>
                                </div>
                            </div>
                        </div>{/*end row*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-12 col-xxl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="row g-3 align-items-center">
                                    <div className="col-9">
                                        <h5 className="mb-0">New Customers</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <div className="dropdown ms-auto">
                                                <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="new-customer-list p-3 mb-3">
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Thomas Hardy</h6>
                                        <p className="mb-0 font-13">Customer ID #84586</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-2.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Pauline Bird</h6>
                                        <p className="mb-0 font-13">Customer ID #86572</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-3.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Ralph Alva</h6>
                                        <p className="mb-0 font-13">Customer ID #98657</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-4.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">John Roman</h6>
                                        <p className="mb-0 font-13">Customer ID #78542</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-5.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">David Buckley</h6>
                                        <p className="mb-0 font-13">Customer ID #68574</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-6.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Maria Anders</h6>
                                        <p className="mb-0 font-13">Customer ID #86952</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Martin Loother</h6>
                                        <p className="mb-0 font-13">Customer ID #83247</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-8.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Victoria Hardy</h6>
                                        <p className="mb-0 font-13">Customer ID #67523</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-9.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">David Buckley</h6>
                                        <p className="mb-0 font-13">Customer ID #94256</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 customer-list-item">
                                    <img src="assets/images/avatars/avatar-10.png" className="rounded-circle" width={50} height={50} alt />
                                    <div>
                                        <h6 className="mb-0">Victoria Hardy</h6>
                                        <p className="mb-0 font-13">Customer ID #48759</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Message" aria-label="Message"><i className="bi bi-envelope-fill" /></a>
                                        <a href="javascript:;" className="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-12 col-xxl-8 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="row g-3 align-items-center">
                                    <div className="col-9">
                                        <h5 className="mb-0">Transaction History</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <div className="dropdown ms-auto">
                                                <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive mt-4">
                                    <table className="table align-middle mb-0 table-hover" id="Transaction-History">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Payment Name</th>
                                                <th>Date &amp; Time</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Michle Jhon</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #8547846</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 10, 2021</td>
                                                <td>+256.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-2.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Pauline Bird</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #9653248</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 12, 2021</td>
                                                <td>+566.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-warning text-dark w-100">In Progress</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-3.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Ralph Alva</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #7689524</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 14, 2021</td>
                                                <td>+636.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-danger w-100">Declined</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-4.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from John Roman</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #8335884</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 15, 2021</td>
                                                <td>+246.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from David Buckley</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #7865986</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 16, 2021</td>
                                                <td>+876.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-warning text-dark w-100">In Progress</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-8.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Lewis Cruz</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #8576420</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 18, 2021</td>
                                                <td>+536.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-9.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from James Caviness</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #3775420</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 18, 2021</td>
                                                <td>+536.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-10.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Peter Costanzo</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #3768920</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 19, 2021</td>
                                                <td>+536.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-11.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Johnny Seitz</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #9673520</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 20, 2021</td>
                                                <td>+86.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-danger w-100">Declined</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-12.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Lewis Cruz</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #8576420</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 18, 2021</td>
                                                <td>+536.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-13.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from David Buckley</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #8576420</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 22, 2021</td>
                                                <td>+854.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-warning text-dark w-100">In Progress</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className>
                                                            <img src="assets/images/avatars/avatar-14.png" className="rounded-circle" width={46} height={46} alt />
                                                        </div>
                                                        <div className="ms-2">
                                                            <h6 className="mb-1 font-14">Payment from Thomas Wheeler</h6>
                                                            <p className="mb-0 font-13 text-secondary">Refrence Id #4278620</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Jan 18, 2021</td>
                                                <td>+536.00</td>
                                                <td>
                                                    <div className="badge rounded-pill alert-success w-100">Completed</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
            </div>

        </motion.div>
    )
}

export default Index2