import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from 'components/Layout/Layout.module.css'

const Layout = () => {
  
    return <div >
         <ul className={css.list}>
          <li ><NavLink to="/" >Home</NavLink></li>
          <li ><NavLink to="/movies">Movies</NavLink></li>
        </ul>
         <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </div>
}

export default Layout;