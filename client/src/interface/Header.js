import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {



    return (
        <Fragment>
            <h2>Investment dashboard</h2>
        
            <ul>
                <li onClick={e=>history.push('/')}>home page</li>
                <li onClick={e=>history.push('/mail-box')}>mail box</li>
                <li onClick={e=>history.push('/trello')}>trello</li>
            </ul>

            <hr />
        </Fragment>
    );
}
export default withRouter(Header);