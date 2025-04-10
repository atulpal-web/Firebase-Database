import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <NavLink class="navbar-brand" to="/">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-2">
                                <NavLink class="nav-link active px-2" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link px-2" to="/View">View</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}
export default Navbar