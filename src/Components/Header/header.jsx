import './header.css';

function Header() {
    return (
        <>

            <div className="header">
                <h3>Trodo</h3>
                <div className="dropdown-content">
                    <select>
                        <option value="UserName">Bladimir</option>
                        <option value="Logout">Logout</option>
                        <option value="Newsource">New Sources</option>
                    </select>
                </div>
            </div>

        </>
    );
}

export default Header;