import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import './hello.scss';

function Hello() {
    const { email, loggedIn } = useContext(AuthContext);
    return (
        <div className="hello">
            <div className="hello-container">
                Hello,
                {loggedIn
                    ? ` ${email}`
                    : ` guest`
                }
            </div>
        </div>
    )
}

export default Hello
