import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiLightningSpanner } from "react-icons/gi";
import Tandem from '../../assets/tandem.png'







import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const [activeLink, setActiveLink] = useState('/dashboard');
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  const SIDEBAR_lINKS = [
    {id:1, name: 'Delivery Request', path: '/dashboard', icon: IoHome },
    {id:2, name: 'Active Deliveries', path: '/dashboard/active', icon: FaFileInvoiceDollar },
    {id:3, name: 'Past Deliveries', path: '/dashboard/past', icon: FaUser },
    {id:4, name: 'Payment integration', path: '/dashboard/payment', icon: FaChartBar },
    {id:5, name: 'Courier Reviews', path: '/dashboard/courier', icon: FaHandHoldingUsd },
    {id:6, name: 'Account Setting', path: '/dashboard/account', icon: GiLightningSpanner },
  ]
  return (
    <div className=' h-screen w-56 md:20 fixed top-0 left-0 z-10 shadow-md border-r pt-8 px-4 bg-white font-inter'>
      <div className='flex items-center justify-center md:justify-start space-x-2'>
        <img src={Tandem} alt="logo" className='w-6 md:flex hidden' />
        <p className='text-black font-bold'>TRACKEASE</p>
        <img src="/Group_mini_.svg" alt="logo" className='w-8 md:hidden flex' />
      </div>

      <ul className='mt-6 space-y-6'>
        {SIDEBAR_lINKS.map((link, index) => (
          <li key={index} className={`font-medium rounded-md px-2 py-5 hover:bg-gray-100 hover:text-indigo-500  ${activeLink === link.path ? "bg-indigo-200 hover:text-indigo-500" : ""}`}>
            <NavLink  to={link.path}  className='flex items-center justify-center md:justify-start md: space-x-5'>
            <span className='text-gray-500' >{link.icon ()}</span>
            <span className='text-sm text-gray-500 hidden md:flex' >{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar