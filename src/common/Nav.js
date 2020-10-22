import React from 'react';

const Nav = () => {
    return (          
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="text-dark"><i className="fas fa-laptop dark"></i></span>
                        <span className="badge badge-pill bg-dark">
                            Gráfico de habilidades
                        </span>
                    </a>
                </li>
                </ul>
            </div>
        </nav>               
    );
}
 
export default Nav;