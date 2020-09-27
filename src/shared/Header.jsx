// Header.js
import React  from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render = () => (
        <nav className="main-header navbar navbar-expand navbar-white navbar-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" data-widget="pushmenu" exact to="/" role="button"><i className="fas fa-bars"></i></NavLink>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}
