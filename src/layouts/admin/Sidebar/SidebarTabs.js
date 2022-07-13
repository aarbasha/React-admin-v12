import React from 'react'

const SidebarTabs = () => {
    return (
        <>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-dashboards" type="button">
                        <i className="bi bi-house-door-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-application" type="button">
                        <i className="bi bi-grid-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-widgets" type="button">
                        <i className="bi bi-briefcase-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-ecommerce" type="button">
                        <i className="bi bi-bag-check-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Components">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-components" type="button">
                        <i className="bi bi-bookmark-star-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-forms" type="button">
                        <i className="bi bi-file-earmark-break-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-tables" type="button">
                        <i className="bi bi-file-earmark-spreadsheet-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-authentication" type="button">
                        <i className="bi bi-lock-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-icons" type="button">
                        <i className="bi bi-cloud-arrow-down-fill" />
                    </button>
                </li>

                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-charts" type="button">
                        <i className="bi bi-pie-chart-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-maps" type="button">
                        <i className="bi bi-pin-map-fill" />
                    </button>
                </li>
                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" >
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-pages" type="button">
                        <i className="bi bi-award-fill" />
                    </button>
                </li>

                

            </ul>
        </>
    )
}

export default SidebarTabs