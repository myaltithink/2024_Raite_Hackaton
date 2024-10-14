import { Link } from "react-router-dom";

function PublicHeader(){

    return (
        <div className="header flex">
            <div className="logo-container">
                <Link to="/">
                    <img src="logo.svg" alt="application logo" className="logo" />
                </Link>
            </div>

            <ol className="navigation center-parent flex">
                <Link to="/login" className="login link">
                    <li className="center-parent">LOGIN</li>
                </Link>
                <Link to="/register" className="register link">
                    <li className="center-parent">REGISTER</li>
                </Link>
            </ol>
        </div>
    )
}

export default PublicHeader;