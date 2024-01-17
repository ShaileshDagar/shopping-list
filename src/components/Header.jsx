import { Link, NavLink } from "react-router-dom";
import '../styles/header'

export default function Header() {
    const loggedIn = localStorage.getItem("loggedIn")
    return <>
        <NavLink to="/list" className={({isActive}) => isActive ? "active-link" : null}>List</NavLink>
        {!loggedIn && <NavLink to="/login" className={({isActive}) => isActive ? "active-link" : null}>Login</NavLink>}
    </>
}