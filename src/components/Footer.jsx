import React, {Component} from 'react';
import '../assets/styles/footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className={'footer-container'}>
                <footer className="page-footer font-small ">
                    <div className="footer-copyright text-center py-3">© Copyright</div>
                </footer>
            </div>
        )
    }
}

export default Footer;
