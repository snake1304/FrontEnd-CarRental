import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderHomepage.scss';
class HeaderHomepage extends Component {

    render() {     
        return (
         <>   
            <div className='above'></div>                
            <div className='home-header-container'>
                <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='child-content'>
                                <p>Download App</p>
                            </div>
                            <div className='child-content'>
                                <p>Partnet with Us</p>
                            </div>
                            <div className='child-content'>
                                <p>Save</p>
                            </div>
                            <div className='child-content'>
                                <p>My Booking</p>
                            </div>
                            <div className='child-content'>
                                <p>EN</p>
                            </div>
                            <div className='child-content'>
                                <p>Pay</p>
                            </div>
                            <div className='child-content'>
                                <p>Log In</p>
                            </div>
                            <div className='child-content'>
                            <button type="button" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className='home-header-banner'>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomepage);
