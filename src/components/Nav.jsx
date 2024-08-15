import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="header" style={{justifyContent:'space-between'}}>
   <NavLink
  to="/"
   className="w-40 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
>
  <p
    className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-sm md:text-base lg:text-lg"
  >
    Mohan Sarady 
  </p>
</NavLink>


      <nav className="flex text-lg gap-7 font-semibold">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black-500'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Nav
