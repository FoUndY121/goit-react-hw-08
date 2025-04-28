import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
function AuthNav() {
    return (
        <nav className={s.nav} style={{ display: 'flex', gap: '20px' }}>
            <NavLink className={({ isActive }) => isActive ? `${s.link} ${s.linkActive}` : s.link}
                to="/register">Register</NavLink>
            <NavLink  className={({ isActive }) => isActive ? `${s.link} ${s.linkActive}` : s.link}
                to="/login">Login</NavLink>
        </nav>
    );
}

export default AuthNav;
