import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

export default function Layout() {
  return (
    <div>
      <AppNavbar/>
      <Outlet/>
      <AppFooter/>
    </div>
  )
}

