import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { H4, Image } from '../../AbstractElements';
import sidebar from '../../assets/images/side-bar.png';
import { BuyNow } from '../../Constant';

const SidebarSection = () => {
    return (
        <Fragment>
            <div className="sidebar-img-section">
                <div className="sidebar-img-content">
                    <Image attrImage={{ className: 'img-fluid', src: `${sidebar}`, alt: '' }} />
                    <H4>Need Help ?</H4>
                    <h5>Milton Residents Association MRA</h5>
                    {/* <Link to={'https://pixelstrap.freshdesk.com/support/home'} className='txt'>
                        Raise ticket at "support@pixelstrap.com"
                    </Link> */}
                    {/* <Link to={'https://themeforest.net/user/pixelstrap/portfolio'} className="btn btn-secondary">
                        {BuyNow}
                    </Link> */}
                    <Link to='' className="btn btn-secondary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};
export default SidebarSection;