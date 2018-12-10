import React, { Component } from 'react';
class CompatContactComponent extends Component {
    render() {
        let markup = (
            <div className="col-md-3 widget">
                <h3 className="widget-title">Contact</h3>
                <div className="widget-body">
                    <p>+234 23 9873237<br />
                        <a href="mailto:#">some.email@somewhere.com</a><br />
                        <br />
                        234 Hidden Pond Road, Ashland City, TN 37015
                </p>
                </div>
            </div>
        );
        return markup;
    }
}

export {
    CompatContactComponent
};