import React, { useState } from "react";

const NavbarSerch = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive((current) => !current);
    };

    const handleClickClose = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive((current) => !current);
    };

    //position-absolute top-50 translate-middle-y d-block d-xl-none search-close-icon
    //searchbar d-none d-xl-flex ms-auto full-searchbar

    return (
        <>
            <div
                className="search-toggle-icon d-xl-none ms-auto"
                onClick={handleClick}
            >
                <i className="bi bi-search" />
            </div>
            <form
                className={
                    isActive
                        ? "searchbar d-none d-xl-flex ms-auto full-searchbar"
                        : "searchbar d-none d-xl-flex ms-auto"
                }
            >
                <div className="position-absolute top-50 translate-middle-y search-icon ms-3">
                    <i className="bi bi-search" />
                </div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Type here to search"
                />
                <div className="position-absolute top-50 translate-middle-y d-block d-xl-none search-close-icon">
                    <i className="bi bi-x-lg" onClick={handleClickClose} />
                </div>
            </form>
        </>
    );
};

export default NavbarSerch;
