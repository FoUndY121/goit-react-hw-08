import { NavLink } from 'react-router-dom';

function AuthNav() {
    return (
        <nav style={{ display: 'flex', gap: '20px' }}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    );
}

export default AuthNav;
