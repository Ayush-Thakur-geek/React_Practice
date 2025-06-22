import './Nav.css'

function Nav() {
    const styleNav = {
        display: "flex", 
        justifyContent: "center",
        alignItem: "center",
        width: "100vw"
    };

    const styleUl = {
        display: "flex", 
        justifyContent: "center",
        alignItem: "center",
        padding: "10px",
        width: "100vw"
    };

    return (
        <nav style={styleNav} className="main-nav">
            <ul className='' style={styleUl}>
                <li className="list">Home</li>
                <li className="list">Articles</li>
                <li className="list">About</li>
                <li className="list">Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;