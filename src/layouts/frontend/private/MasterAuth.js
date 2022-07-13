import React from 'react'
import { Outlet } from "react-router-dom";
import NavbarUser from '../public/NavbarUser';
import ThemisAdmin from '../../admin/ThemisAdmin';

const MasterAuth = () => {
  return (
    <div className="wrapper">
      <NavbarUser />
      {/*start content*/}
      <main className="container">
        <Outlet />
      </main>
      {/*end page main*/}
      <ThemisAdmin />
      {/* <FooterUser /> */}
    </div>
  )
}

export default MasterAuth