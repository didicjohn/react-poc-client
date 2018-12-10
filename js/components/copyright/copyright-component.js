import React, { Component } from 'react';
class CopyRightComponent extends Component {
    render() {
        let markup = (
            <div className="col-md-6 widget">
                <div className="widget-body">
                    <p className="text-right">
                        Copyright &copy; 2014, Your name. Designed by <a href="http://gettemplate.com/" rel="designer">gettemplate</a>
                    </p>
                </div>
            </div>
        );
        return markup;
    }
}

export {
    CopyRightComponent
};