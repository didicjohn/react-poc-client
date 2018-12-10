import React, { Component } from 'react';
class SocialLinkComponent extends Component {
    render() {
        let markup = (
            <div >
                <section id="social">
                    <div className="container">
                        <div className="wrapper clearfix">
                            <div className="addthis_toolbox addthis_default_style">
                                <a className="addthis_button_facebook_like" layout="button_count"></a>
                                <a className="addthis_button_tweet"></a>
                                <a className="addthis_button_linkedin_counter"></a>
                                <a className="addthis_button_google_plusone" size="medium"></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
        return markup;
    }
}

export {
   SocialLinkComponent
};