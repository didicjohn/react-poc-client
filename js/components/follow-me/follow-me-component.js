import React, { Component } from 'react';
class FollowMeComponent extends Component {
    render() {
        let markup = (
            <div className="col-md-3 widget">
                <h3 className="widget-title">Follow me</h3>
                <div className="widget-body">
                    <p className="follow-me-icons">
                        <a href=""><i className="fa fa-twitter fa-2"></i></a>
                        <a href=""><i className="fa fa-dribbble fa-2"></i></a>
                        <a href=""><i className="fa fa-github fa-2"></i></a>
                        <a href=""><i className="fa fa-facebook fa-2"></i></a>
                    </p>
                </div>
            </div>
        );
        return markup;
    }
}

export {
    FollowMeComponent
};