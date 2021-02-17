import React, { Fragment } from 'react';


const Footer = () =>{
    return(
        <Fragment>
            <footer style={footerStyle}>
                <h3>Made with love by saifeddin</h3>
            </footer>
        </Fragment>
    )
}

const footerStyle = {
    textAlign:'center',
    backgroundColor:'#555',
    padding: '5%',
    color: '#fff',
    verticalAlign: 'center',
}

export default Footer;