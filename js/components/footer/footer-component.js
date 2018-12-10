import React, { Component } from 'react';
import { CompatContactComponent } from '../compact-contact/compact-contact-component';
import { FollowMeComponent } from '../follow-me/follow-me-component';
import { CompanyMissionComponent } from '../company-mission/company-mission-component';
import { FooterLinksComponent } from '../footer-links/footer-links-component';
import { CopyRightComponent } from '../copyright/copyright-component';
class FooterComponent extends Component {
    render() {
        let markup = (
            <footer id="footer" className="top-space">

                <div className="footer1">
                    <div className="container">
                        <div className="row">

                            <CompatContactComponent />

                            <FollowMeComponent />

                            <CompanyMissionComponent />

                        </div>
                    </div>
                </div>

                <div className="footer2">
                    <div className="container">
                        <div className="row">

                            <FooterLinksComponent />

                            <CopyRightComponent />

                        </div>
                    </div>
                </div>

            </footer>
        );
        return markup;
    }
}

export {
    FooterComponent
};