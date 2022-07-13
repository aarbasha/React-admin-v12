import React from 'react'
import { motion } from 'framer-motion'

const Dashborde = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Orders</p>
                  <h4 className="my-1">4805</h4>
                  <p className="mb-0 font-13 text-success">
                    <i className="bi bi-caret-up-fill" /> 5% from last week
                  </p>
                </div>
                <div className="widget-icon-large bg-gradient-purple text-white ms-auto">
                  <i className="bi bi-basket2-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Revenue</p>
                  <h4 className="my-1">$24K</h4>
                  <p className="mb-0 font-13 text-success">
                    <i className="bi bi-caret-up-fill" /> 4.6 from last week
                  </p>
                </div>
                <div className="widget-icon-large bg-gradient-success text-white ms-auto">
                  <i className="bi bi-currency-exchange" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Customers</p>
                  <h4 className="my-1">5.8K</h4>
                  <p className="mb-0 font-13 text-danger">
                    <i className="bi bi-caret-down-fill" /> 2.7 from last week
                  </p>
                </div>
                <div className="widget-icon-large bg-gradient-danger text-white ms-auto">
                  <i className="bi bi-people-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Bounce Rate</p>
                  <h4 className="my-1">38.15%</h4>
                  <p className="mb-0 font-13 text-success">
                    <i className="bi bi-caret-up-fill" /> 12.2% from last week
                  </p>
                </div>
                <div className="widget-icon-large bg-gradient-info text-white ms-auto">
                  <i className="bi bi-bar-chart-line-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-8 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-body">
              <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Sales Figures</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                    <div className="font-13">
                      <i className="bi bi-circle-fill text-primary" /><span className="ms-2">Sales</span>
                    </div>
                    <div className="font-13">
                      <i className="bi bi-circle-fill text-success" /><span className="ms-2">Orders</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="chart1" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-header bg-transparent">
              <div className="row g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Statistics</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div className="dropdown">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="chart2" />
            </div>
            <ul className="list-group list-group-flush mb-0">
              <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                New Orders<span className="badge bg-primary badge-pill">25%</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                Completed<span className="badge bg-orange badge-pill">65%</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                Pending<span className="badge bg-success badge-pill">10%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-6 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-header bg-transparent">
              <div className="row g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Statistics</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div className="dropdown">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-lg-flex align-items-center justify-content-center gap-2">
                <div id="chart3" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-circle-fill text-purple me-1" />
                    Visitors:<span className="me-1">89</span>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-circle-fill text-info me-1" />
                    Subscribers:<span className="me-1">45</span>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-circle-fill text-pink me-1" />
                    Contributor:<span className="me-1">35</span>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-circle-fill text-success me-1" />
                    Author:<span className="me-1">62</span>
                  </li>
                </ul>
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
                    <div className="font-13">
                      <i className="bi bi-circle-fill text-primary" /><span className="ms-2">Views</span>
                    </div>
                    <div className="font-13">
                      <i className="bi bi-circle-fill text-pink" /><span className="ms-2">Clicks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="chart4" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-4 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-header bg-transparent">
              <div className="row g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Top Categories</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div className="dropdown">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="categories">
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Electronic <span className="float-end">85%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-purple" role="progressbar" style={{ width: '85%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Furniture <span className="float-end">70%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '70%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Fashion <span className="float-end">66%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-success" role="progressbar" style={{ width: '66%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Mobiles <span className="float-end">76%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '76%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Accessories <span className="float-end">80%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{ width: '80%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Watches <span className="float-end">65%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-voilet" role="progressbar" style={{ width: '65%' }} />
                  </div>
                </div>
                <div className="my-3 border-top" />
                <div className="progress-wrapper">
                  <p className="mb-2">
                    Sports <span className="float-end">45%</span>
                  </p>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-gradient-royal" role="progressbar" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-header bg-transparent">
              <div className="row g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Best Products</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div className="dropdown">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="best-product p-2 mb-3">
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/01.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">White Polo T-Shirt</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">245 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/02.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Formal Coat Pant</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">325 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/03.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Blue Shade Jeans</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">189 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/04.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Yellow Winter Jacket</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">102 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/05.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Men Sports Shoes</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">137 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/06.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Fancy Home Sofa</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">453 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/07.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Sports Time Watch</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">198 Sales</p>
                    </div>
                  </div>
                </div>
                <div className="best-product-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img src="assets/images/products/08.png" alt />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">Women Blue Heals</h6>
                      <div className="product-rating mb-0">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    <div className="sales-count ms-auto">
                      <p className="mb-0">98 Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-4 d-flex">
          <div className="card radius-10 w-100">
            <div className="card-header bg-transparent">
              <div className="row g-3 align-items-center">
                <div className="col">
                  <h5 className="mb-0">Top Sellers</h5>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div className="dropdown">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-sellers-list p-2 mb-3">
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-1">Thomas Hardy</h6>
                  <p className="mb-0 font-13">Customer ID #84586</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    5.0 <i className="bi bi-star-fill text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-2.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Pauline Bird</h6>
                  <p className="mb-0 font-13">Customer ID #86572</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    5.0 <i className="bi bi-star-fill text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-3.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Ralph Alva</h6>
                  <p className="mb-0 font-13">Customer ID #98657</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    4.8 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-4.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">John Roman</h6>
                  <p className="mb-0 font-13">Customer ID #78542</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    4.7 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-5.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">David Buckley</h6>
                  <p className="mb-0 font-13">Customer ID #68574</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    5.0 <i className="bi bi-star-fill text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-6.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Maria Anders</h6>
                  <p className="mb-0 font-13">Customer ID #86952</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    4.8 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Martin Loother</h6>
                  <p className="mb-0 font-13">Customer ID #83247</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    5.0 <i className="bi bi-star-fill text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-8.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Victoria Hardy</h6>
                  <p className="mb-0 font-13">Customer ID #67523</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    3.9 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-9.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">David Buckley</h6>
                  <p className="mb-0 font-13">Customer ID #94256</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    3.5 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 sellers-list-item">
                <img src="assets/images/avatars/avatar-10.png" className="rounded-circle" width={50} height={50} alt />
                <div>
                  <h6 className="mb-0">Victoria Hardy</h6>
                  <p className="mb-0 font-13">Customer ID #48759</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                  <p className="mb-0">
                    3.4 <i className="bi bi-star-half text-warning" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="card radius-10">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-lg-4 col-xl-4 d-flex">
              <div className="card mb-0 radius-10 border shadow-none w-100">
                <div className="card-body">
                  <h5 className="card-title">Top Sales Locations</h5>
                  <h4 className="mt-4">
                    $36.2K <i className="flag-icon flag-icon-us rounded" />
                  </h4>
                  <p className="mb-0 text-secondary font-13">
                    Our Most Customers in US
                  </p>
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
          </div>
          {/*end row*/}
        </div>
      </div>
      <div className="card radius-10">
        <div className="card-header bg-transparent">
          <div className="row g-3 align-items-center">
            <div className="col">
              <h5 className="mb-0">Recent Orders</h5>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                <div className="dropdown">
                  <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#ID</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#89742</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/11.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Smart Mobile Phone</h6>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$214</td>
                  <td>Apr 8, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#68570</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/07.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Sports Time Watch</h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$185</td>
                  <td>Apr 9, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#38567</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/17.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Women Red Heals</h6>
                      </div>
                    </div>
                  </td>
                  <td>3</td>
                  <td>$356</td>
                  <td>Apr 10, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#48572</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/04.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">
                          Yellow Winter Jacket
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$149</td>
                  <td>Apr 11, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#96857</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/10.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">
                          Orange Micro Headphone
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$199</td>
                  <td>Apr 15, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#68527</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                        <img src="assets/images/products/05.png" alt />
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">
                          Men Sports Shoes Nike
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$124</td>
                  <td>Apr 22, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill" /></a>
                      <a href="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill" /></a>
                      <a href="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashborde