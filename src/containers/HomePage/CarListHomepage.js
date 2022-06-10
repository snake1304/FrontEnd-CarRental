import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderHomepage from './HeaderHomepage';
import Footer from '../Footer/Footer';
import CarsList from './CarsList';
import CarHome from './CarHome';
import './carList.scss'



class CarListHomepage extends Component {

    render() {
       
        return (
            <>
            <div className='main-cnt'>
            <HeaderHomepage/>
            <div className='listCarsBG'>
            <CarsList/>
            </div>
            <div className='footer-all'>
            <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarListHomepage);
