import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footer.scss';
import Logo from '../../assets/images/logoo.png';

class Footer extends Component {

    render() {     
        return (
         <>   
            <div className='footer'>
                <div className='logo-content'>
                    <div className='footer-logo'>
                    <img className='img-logo' src={Logo} alt="React Logo" />
                    </div>
                </div>
                <div className='left-content'>
                    <div className='about'>
                        <h4>About Traveloka</h4>
                        <h6>How to Book</h6>
                        <h6>Contact Us</h6>
                        <h6>Help Center</h6>
                        <h6>Installment</h6>
                    </div>
                </div>
                <div className='center-conten'>
                <div className='about'>
                        <h4>Products</h4>
                        <h6>Flights</h6>
                        <h6>Hotel</h6>
                        <h6>Trains</h6>
                        <h6>JR Pass</h6>
                        <h6>Eats</h6>
                        <h6>Car Rental</h6>
                        <h6>Pay later</h6>
                        <h6>Bill</h6>
                        <h6>Airport Transfer</h6>
                    </div>
                </div>
                <div className='right-content'>
                <div className='Other'>
                        <h4>Others</h4>
                        <h6>Traveloka for Corporates</h6>
                        <h6>Traveloka Affiliate</h6>
                        <h6>Flash Sale</h6>
                        <h6>Blog</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Terms & Conditions</h6>
                        <h6>Register Your Accommodation</h6>
                        <h6>Register Your Experience</h6>
                    </div>
                </div>
            </div>
        </>
            
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);