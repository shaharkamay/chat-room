import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import Theme from './Theme/Theme';
import './header.scss';


function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo-and-theme">
                    <Logo />
                    <Theme />
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header;