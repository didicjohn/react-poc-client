import React, { Component } from 'react';
import { NavigationComponent } from '../navigation/navigation-component';
class HeaderComponent extends Component {
    render() {
        let markup = (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top headroom" >
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                            <a className="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="Progressus HTML5 template" /></a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <NavigationComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
        return markup;
    }
}

export {
    HeaderComponent
};