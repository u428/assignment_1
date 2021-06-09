import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {

    return(
        <div className="container mb-3">
            <h3>
                UR Tech
            </h3>
            <ul className="nav nav-tabs justify-content-end" role="tablist">

                <li className="nav-item mr-sm-5">
                    <Link className="nav-link"  to="/">
                        Home
                    </Link >
                </li>
                
                <li className="nav-item mr-sm-5">
                    <Link className="nav-link "  to="/list">
                        List
                    </Link >
                </li>
                
            </ul>
        </div>
    )

}

export default Nav;
