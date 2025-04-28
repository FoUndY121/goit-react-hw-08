import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';
function Layout() {
    return (
        <div className={s.container}>
            <AppBar />
            <main className={s.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
