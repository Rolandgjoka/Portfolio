import React, {Component} from 'react';

class Project extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-12 col-lg-6">
                <img id="image3" src={this.props.imageSrc} alt={this.props.imageAlt} />
            </div>
        )
    }
}

export default Project;
