import React from 'react'
import { NavLink } from 'react-router-dom'
// navbar all pages
const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Invest", path: "/invest" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
]
const Navbar = () => {
  return (
    <header className='bg-accent py-6 border'>
          <nav className='container mx-auto flex justify-between px-5'>
              {/* Logo */}
              <a href="/">
                <img src="images.png" alt="" className='h-12'/>
              </a>
              <ul className='sm:flex hidden items-center gap-8'>
                  {
                      navLists.map((list, index)=>(
                          <li>
                              <NavLink to={`${list.path}`}>{list.name}</NavLink>
                          </li>
                      ))
                  }
              </ul>
          </nav>
    </header>
  )
}

export default Navbar