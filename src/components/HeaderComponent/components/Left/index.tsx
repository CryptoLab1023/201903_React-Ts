import * as React from 'react'
import Logo from '../../../../cmn/images/logo.png';
import {OwnProps} from "./interface";

const Left = (props: OwnProps) => {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            {props.children}
        </div>
    );
};

export default Left;