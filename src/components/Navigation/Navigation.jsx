import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav style={{ display: 'flex', gap: '20px' }}>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
    );
}

export default Navigation;
