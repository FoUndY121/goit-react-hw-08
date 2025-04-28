import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './AppBar.module.css';
function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header} style={{ display: 'flex', justifyContent: 'space-between', padding: 20, borderBottom: '1px solid black' }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}

export default AppBar;
