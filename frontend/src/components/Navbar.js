import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Friends Simplified </h1>
                </Link>
                <nav>
                    <div onClick={handleClick}>Log out</div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;