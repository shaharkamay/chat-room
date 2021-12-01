import { Link } from "react-router-dom"; // Link will switch <a> tag

function Logo() {
    return (
        <Link to="/" className="logo">
            <img className="logo-img" src="../favicon.ico" alt="Logo" />
        </Link>
    )
}

export default Logo;