import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

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
        <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserMenu;
