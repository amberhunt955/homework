import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to='/'>
                <div>iStocks</div>
            </Link>

            <Link to='/stocks'>
                <div>Stocks</div>
            </Link>

            <Link to='/about'>
                <div>About</div>
            </Link>
        </nav>
    )
}

export default NavBar;