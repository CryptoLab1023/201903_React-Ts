import * as React from 'react'
import Logo from '../../../../cmn/images/logo.png';
import {IOwnProps} from "./interface";

const Left = (props: IOwnProps) => {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            {props.children}
        </div>
    );
};

export default Left;