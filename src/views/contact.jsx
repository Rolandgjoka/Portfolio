import React, {Component} from 'react';
import Header from "../components/Header";

import '../assets/styles/contact-view.scss';
import Footer from "../components/Footer";

class ContactView extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={'contact-container'}>
                    <div className="container">
                        <form className="p-5">
                            <h1><b>Contact</b></h1>
                            <div className={"link-container"}>
                                <a className="btn btn-primary btn-lg ml-5 mr-5" href="https://github.com/Rolandgjoka"
                                   target="_blank" role="button">My GitHub Profile</a>
                                <a className="btn btn-primary btn-lg mr-5"
                                   href="https://www.linkedin.com/in/roland-gjoka-57942555/" target="_blank" role="button">My
                                    LinkedIn Profile</a>
                                <a className="btn btn-primary btn-lg mr-5"
                                   href="mailto:rolandgjoka@hotmail.com.com?subject = Touching%20Base&body = Message"
                                   role="button">E-mail Me</a>
                                <a className="btn btn-primary btn-lg"
                                   href="https://docs.google.com/document/d/1RHx0NbkaPU7dzlraKcc18AbpKv8Xj_qkEenBAKyFtpQ/edit?usp=sharing"
                                   target="_blank" role="button">View My Resume</a>
                            </div>
                            <hr />
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="name" className="form-control" id="exampleInputName"
                                           aria-describedby="nameHelp" placeholder="Enter name" />
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group3" id="message">
                                    <label htmlFor="exampleInputMessage">Message</label>
                                    <input type="Message" className="form-control" id="exampleInputMessage"
                                           placeholder="Message" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>)
    }
}

export default ContactView;
