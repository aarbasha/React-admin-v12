import React from 'react'
import { Link } from "react-router-dom"

// import "../../layouts/frontend/Style/Frontend.css"
const Error_404 = () => {
    return (
        <>
            <div className='authentication-content'>
                {/*end breadcrumb*/}
                <div className="error-404 d-flex mt-5 align-items-center justify-content-center">
                    <div className="container">
                        <div className="card py-5">
                            <div className="row g-0">
                                <div className="col col-xl-5">
                                    <div className="card-body p-4">
                                        <h1 className="display-1"><span className="text-danger">4</span><span className="text-primary">0</span><span className="text-success">4</span></h1>
                                        <h2 className="font-weight-bold display-4">Lost in Space</h2>
                                        <p>You have reached the edge of the universe.
                                            <br />The page you requested could not be found.
                                            <br />Dont'worry and return to the previous page.</p>
                                        <div className="mt-5"> <Link to="/" className="btn btn-primary btn-lg px-md-5 radius-30">Go Home</Link>
                                        
                                            {/* <a href="#" className="btn btn-outline-dark btn-lg ms-3 px-md-5 radius-30">Back</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    {/* <img src="assets/images/error/404-error.png" className="img-fluid" alt /> */}
                                </div>
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Error_404