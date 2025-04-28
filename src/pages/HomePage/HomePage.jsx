import s from "./HomePage.module.css";
function HomePage() {
    return (
        <div className={s.pageContainer}>
            <h1 className={s.title}>Welcome to Phonebook App</h1>
            <p className={s.text}>Manage your contacts quickly and easily.</p>
        </div>
    );
}

export default HomePage;
