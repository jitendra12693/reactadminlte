// SideBar.js

import React  from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <NavLink href="/#" exact to="/" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </NavLink>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <NavLink exact to="" className="d-block">Alexander Pierce</NavLink>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview menu-open">
                            <NavLink exact to="/" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink exact to="/3plCompanyInfo" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p> 3PL Setup  </p>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink exact to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Login</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavLink>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink exact to="" className="nav-link">
                                <i className="nav-icon far fa-plus-square"></i>
                                <p>
                                    Accounts
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink exact to="" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Login</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Register</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Forgot Password</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Recover Password</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default SideBar