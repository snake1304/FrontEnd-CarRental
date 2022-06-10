import React, { Component } from 'react';
import axios from 'axios'
import Logo from '../../../assets/images/box.png';
import tick from '../../../assets/images/accept.png';
import cardLogo from '../../../assets/images/card.png';

import Footer from '../../Footer/Footer';
import './CarBooking.scss'

import HeaderHomepage from '../../HomePage/HeaderHomepage'

class CarBooking extends Component {

    constructor(props) {
        super(props)
        this.state={
            cars:[],
            StartDate:new Date(),
            EndDate:new Date(),
            pay:0,
            pickLocation:"",
            dropLocation:"",
            
        }
    }
    handleOnChangeIput=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          console.log("infor: ",copyState)
          
        }
        )
    }
    componentDidMount(){
        const queryParam = new URLSearchParams(this.props.location.search)
        console.log("props",this.props)

        

        let id= this.props.match.params.id
        let start= queryParam.get("start")
        let end= queryParam.get("end")
        let payT= queryParam.get("total")
        let pick= queryParam.get("pick")
        let drop= queryParam.get("drop")





  

        this.setState({StartDate:new Date(+start)})
        this.setState({EndDate:new Date(+end)})
        

        console.log("total",payT)

       





        axios.get(`http://localhost:5000/api/get-detail-car-by-id?id=${id}`)

        .then(res => {
            const cars = res.data.data;
            this.setState({ cars });        
            console.log("car",this.state.cars)


            this.setState({pay:+payT})
            console.log("total pay",this.state.pay)

            this.setState({pickLocation:pick})
            this.setState({dropLocation:drop})

            console.log("pick",this.state.pickLocation)
            console.log("drop",this.state.dropLocation)
    
            

        })

    }
   
    
    handleContinue=()=>{
        const list = this.state.cars
    
        this.props.history.push(`/detail-cars-booking2/${this.state.cars.id}${this.props.location.search}&name=${this.state.FullName}&phone=${this.state.Phone}&email=${this.state.Email}`)
        console.log("location in copy state:",this.state); 
    }

    render() {
        let CarDetail= this.state.cars

        console.log("car detail",CarDetail)


        return (
            <div>
                <>
                <HeaderHomepage/>
                <div className='container'>
                <div className='left'>
                    <div className='top'>
                        <h3>Your Booking</h3>
                        <h7>Fill in your details and review your booking.</h7>
                        <div className='login'>
                            <div className='left-c'>
                                <img src={Logo}/>
                            </div>
                            <div className='right-c'>
                                <div className='login-content'> <h6>Log In or register to enjoy this member-only benefit</h6> </div>
                                <div className='login-content2'> <h7>Book faster and easier with Passenger Quick Pick</h7> </div>
                                <div className='log-res'> <span>Log In or Register</span></div>

                            </div>

                        </div>

                    </div>
                    <div className='bot'>
                    <h3>Contact Details</h3>

                    <div className='contact-form'>
                        <div className='top-contact'>
                        <h5>Contact Details (for E-ticket/Voucher)</h5>
                        </div>

                        <label className='fullname'>Full Name</label>

                        <div className='box'>
                            <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"FullName")}} value={this.state.fullName}/>
                        </div>

                        <div className='phone-email'>
                            <div className='left'>
                            <label className='phone'>Mobile Number</label>
                                <div className='box'>
                                    <input className='box1' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"Phone")}} value={this.state.phone}/>
                                </div>
                            </div>
                            <div className='right'>
                            <label className='email'>Email</label>
                                <div className='box'>
                                    <input className='box1' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"Email")}} value={this.state.Email}/>
                                </div>
                            </div>
                        </div>


                    </div>

                    </div>
                    <div className='button'>
                    <button type="button" className="btn btn-primary" onClick={this.handleContinue} >Continue</button>

                    </div>
                </div>
                <div className='right'>

                    <div className='rental-detail'>
                        <h3>Rental Detail</h3>
                    </div>
                    <div className='rental-form'>
                        <div className='Driver'>
                            <h5>Car Rental without Driver</h5>
                        </div>
                        <div className='name'>
                            <h6>
                            {CarDetail.car_name}
                            </h6>                            
                        </div>
                        <div className='manual'>
                            <h6>
                            Manual
                            </h6>                            
                        </div>
                        <div className='owner'>
                        {CarDetail.Owner && CarDetail.Owner.owner_name &&
                            <h6>
                                Provided by  {CarDetail.Owner.owner_name }
                            </h6>
                            }                          
                        </div>

                        <div className='rental-infor'>
                            <div className='region'>
                                <h8>Rental City/Region</h8>
                                {CarDetail.Owner && CarDetail.Owner.Location && CarDetail.Owner.Location.Location_name &&
                            <h6>
                                {CarDetail.Owner.Location.Location_name }
                            </h6>
                            }     
                            </div>
                            <div className='region'>
                                <h8>Start Date & Time</h8>
                                <h6>{this.state.StartDate.toString()} </h6>
                            </div>
                            <div className='region'>
                                <h8>Pickup Location</h8>
                                <h6>{this.state.pickLocation}</h6>
                            </div>
                            <div className='region'>
                                <h8>End Date & Time</h8>
                                <h6>{this.state.EndDate.toString()} </h6>
                            </div>
                            <div className='region'>
                                <h8>Drop-off Location</h8>
                                <h6>{this.state.dropLocation}</h6>
                            </div>
                            <div className='refundable'>
                                
                                <h6><img className='img' src={tick} alt="React Logo" />&emsp; Refundable</h6>
                                <h6><img className='img' src={tick} alt="React Logo" />&emsp; Reschedule Available</h6>
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div> 
            <Footer className="footer-carbooking"/>
                </>
                
            </div>
        );
    }

}


export default CarBooking;
