import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderHomepage.scss';
import axios from 'axios'

class HeaderHomepage extends Component {
    constructor(props) {
        super(props)
        this.state={
            token:"",
                          
        }
    }
    componentDidMount(){
        const search = new URLSearchParams(window.location.search)
        console.log("Search in header",search.get("token"));
        const getToken = search.get("token");
        console.log("get tokennn", getToken)

        
    

    }
    
    handleLogin=()=>{

        window.location.href = `https://profile.vinhphancommunity.xyz/Login?redirect=${process.env.REACT_APP_BASE_API}/home`;
    }
    hanldeLogout=()=>{
        window.location.href = `https://profile.vinhphancommunity.xyz/Login?redirect=${process.env.REACT_APP_BASE_API}/home`;

    }

    render() {
        console.log("stateeee", this.state)

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
                            <button type="button" className="btn btn-primary"
                            onClick={this.handleLogin}>Login</button>
                            </div>
                            <div className='child-content'>
                            <button type="button" className="btn btn-primary"
                            onClick={this.hanldeLogout}>Log Out</button>
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
