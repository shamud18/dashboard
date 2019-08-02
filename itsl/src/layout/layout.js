import React, { Component } from 'react';
import DashBoard from '../displays/dashboard';


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