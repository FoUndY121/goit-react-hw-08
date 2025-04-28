import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './Navigation.module.css';
function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={s.nav}>
            <NavLink className={({ isActive }) => isActive ? `${s.link} ${s.linkActive}` : s.link}
                to="/">Home</NavLink>
            {isLoggedIn && <NavLink
                className={({ isActive }) => isActive ? `${s.link} ${s.linkActive}` : s.link} to="/contacts">Contacts</NavLink>}
        </nav>
    );
}

export default Navigation;
