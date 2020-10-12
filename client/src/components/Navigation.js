import React from 'react';
import {Link} from 'react-router-dom';
// import '../css/Navigation.css';


function Navigation() {

    return (
      <>
        <nav className="navbar navbar-dark bg-dark .collapse.navbar-collapse">
          

          <Link to="/"> Home </Link>
          <Link to="/newPosting">New Posting</Link>

        </nav>

        {/* Navbar collapse */}

        {/* <div className="fixed-top">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <Link to="/"> Home </Link>
              <Link to="newPosting">New Posting</Link>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div> */}
      </>
    )
}

export default Navigation;
