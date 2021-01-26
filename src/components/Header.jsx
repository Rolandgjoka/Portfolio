import React, {Component} from 'react';
import '../assets/styles/header.scss';
import {withRouter} from "react-router";

class Header extends Component {

    navigateTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className={'header-container'}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <nav className="navbar-brand mb-0 h1" id="roland-brand" href="#">Roland Gjoka</nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.navigateTo('contact')}>Contact <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.navigateTo('portfolio')}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.navigateTo('about-me')}>About me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);
