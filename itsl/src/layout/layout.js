import React, { Component } from 'react';
import Sidebar from '../displays/sidebar';
import DashBoard from '../displays/dashboard';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';


//import '../styling/layout.css'; 

const styles = theme => ({ 
    root: {
        flexGrow: 1
    }
});


let Layout = ({ classes }) => {
    return (
        <>
            <div className="wrapper">
                <DashBoard />
            </div>
        </>
    );
}

export default Layout;