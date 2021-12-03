import Item from './Item';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';

function List() {
    const { loggedIn, logout } = useContext(authContext);
    return (
        <ul className="nav__list">
            <Item linkName="Home" link="/" />
            <Item linkName="Chat Room" link="/chat" />
            <Item linkName="Login" link="/login" />
            {console.log(loggedIn)}
            {loggedIn
                ? <button className="default--button" onClick={logout} style={{ backgroundColor: 'red', padding: '.1em .5em', }} >Logout</button>
                : ''
            }
        </ul>
    )
}

export default List;