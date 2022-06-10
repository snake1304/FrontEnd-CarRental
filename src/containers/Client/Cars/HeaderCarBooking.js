import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderCarBooking.scss';
class HeaderCarBooking extends Component {

    render() {     
        return (
         <>              
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCarBooking);
