import React from 'react'
import { Outlet } from "react-router-dom";
import NavbarUser from '../public/NavbarUser';
import "../public/Style/Frontend.css"
import ThemisAdmin from '../../admin/ThemisAdmin';

const MasterUsers = () => {
  return (
    <>
      <div className="wrapper">
        <NavbarUser />
        {/*start content*/}
        <main className="authentication-content container">
          <Outlet />
        </main>
        {/*end page main*/}

        <ThemisAdmin />
        {/* <FooterUser /> */}
      </div>

    </>
  )
}

export default MasterUsers