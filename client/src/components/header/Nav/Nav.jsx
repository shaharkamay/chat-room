import List from './List';

function Nav({ isMobileNavOpen }) {
    return (
        <nav className={`nav ${isMobileNavOpen ? 'nav--visible' : ''}`}>
            <List />
        </nav>
    )
}

export default Nav;