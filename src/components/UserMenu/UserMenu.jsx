import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
function UserMenu() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    const username = useSelector((state) => {
        console.log(state.auth);
        return state.auth.user.email;
    });
    return (
        <div className={s.userMenu}>
            <p className={s.welcomeText}>Welcome, {username}!</p>
            <button onClick={handleLogout} className={s.logoutButton}>Logout</button>
        </div>
    );
}

export default UserMenu;
