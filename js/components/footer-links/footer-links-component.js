import React, { Component } from 'react';
class FooterLinksComponent extends Component {
    render() {
        let markup = (
            <div className="col-md-6 widget">
                <div className="widget-body">
                    <p className="simplenav">
                        <a href="#">Home</a> |
                <a href="about.html">About</a> |
                <a href="sidebar-right.html">Sidebar</a> |
                <a href="contact.html">Contact</a> |
                <b><a href="signup.html">Sign up</a></b>
                    </p>
                </div>
            </div>
        );
        return markup;
    }
}

export {
    FooterLinksComponent
};