import Item from './Item';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function List() {
    const { loggedIn, logout } = useContext(AuthContext);
    return (
        <ul className="nav__list">
            <Item linkName="Home" link="/" />
            {loggedIn
                ? [
                    <Item linkName="Chat Room" link="/chat" key="chat" />,
                    <button className="default--button" onClick={logout} style={{ backgroundColor: 'red', padding: '.1em .5em', }} key="logout" >Logout</button>,
                ]
                : [
                    <Item linkName="Login" link="/login" key="login" />,
                    <Item linkName="Sign Up" link="/sign-up" key="sign-up" />
                ]
                
            }
        </ul>
    )
}

export default List;