import Item from './Item';

function List() {
    return (
        <ul className="nav__list">
            <Item linkName="Home" link="/" />
            <Item linkName="Chat Room" link="/chat" />
            <Item linkName="Login" link="/login" />
        </ul>
    )
}

export default List;