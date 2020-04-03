import React from 'react';

import beaconfireLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={beaconfireLogo} alt="MyBurger" />
    </div>
);

export default logo;