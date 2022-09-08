import React from 'react'
// import newsLogo from '../utils/newsLogo'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div >
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                {/* <nav className="navbar navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={newsLogo} width="30" height="30" className="d-inline-block align-top mx-2" alt=""/>
                            Raftaar News
                        </Link>
                    </nav> */}
                <Link className="navbar-brand mx-1" to="/"> <strong>Morning Mist</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="/"><strong>Home</strong> <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/business"><strong>Business</strong> </Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/entertainment"><strong>Entertainment</strong> </Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/general"><strong>General</strong> </Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/health"><strong>Health</strong> </Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/science"> <strong>Science</strong></Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/sports"><strong>Sports</strong> </Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="/technology"> <strong>Technology</strong></Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar