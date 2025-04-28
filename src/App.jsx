import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <p>Refreshing user...</p>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute component={ContactsPage} redirectTo="/login" />
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
