import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar';
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <AppNavbar/>
      <div className="main">
        <Outlet/>
      </div>
      <AppFooter/>
    </div>
  )
}

