import React, { Component } from 'react';
import axios from 'axios'
import Logo from '../../../../assets/images/box.png';
import tick from '../../../../assets/images/accept.png';

import './CarBooking2.scss'
import Footer from '../../../Footer/Footer'


import HeaderHomepage from '../../../HomePage/HeaderHomepage'

class CarBooking2 extends Component {

    constructor(props) {
        super(props)
        this.state={
            cars:[],
            StartDate:new Date(),
            EndDate:new Date(),
            pay:0,
            pickLocation:"",
            dropLocation:"",
            fullName:'',
            phoneL:'',
            Email:'',
            car_id:'',
            owner_id:'',
        }
    }
    componentDidMount(){
        const queryParam = new URLSearchParams(this.props.location.search)

        

        let id= this.props.match.params.id
        let start= queryParam.get("start")
        let end= queryParam.get("end")
        let payT= queryParam.get("total")
        let pick= queryParam.get("pick")
        let drop= queryParam.get("drop")
        let fullname=queryParam.get("name")
        let phone=queryParam.get("phone")
        let email=queryParam.get("email")
        





  

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

            this.setState({fullName:fullname})
            this.setState({phoneL:phone})
            this.setState({Email:email})
            this.setState({car_id:cars.id})
            this.setState({owner_id:cars.Owner.id})



            

        



    
            

        })

    }
   
    handleContinue=()=>{
       
    }

    handleAddRental=()=>{
        try {
            axios.post('http://localhost:5000/api/create-new-rental',this.state)            
            console.log("Respone create rental", this.state,6000)
            alert("Your car rental information has been saved!");
            this.props.history.push(`/home`)
        } catch (error) {
            
        }
        
    }

    render() {
        console.log("proppppppp-----------",this.props)
        console.log("state", this.state)

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

                    <div className='ContactDetails'>
                        <h5>{this.state.fullName}</h5>
                        <div className='phone-mail'>
                            <div className='left'>
                                <label>Mobile number</label>
                                <h4>+{this.state.phoneL}</h4>
                            </div>
                            <div className='right'>
                                <label>Email</label>
                                <h4>{this.state.Email}</h4>

                            </div>
                        </div>

                        <h5 className='pickup'>Pickup Location</h5>
                        <div className='form'>
                            <h6>{this.state.pickLocation}</h6>
                        </div>
                        <h5 className='pickup'>Drop-off Location</h5>
                        <div className='form'>
                            <h6>{this.state.dropLocation}</h6>
                        </div>


                        <h5 className='pickup'>Car Rental Special Request (optional)</h5>
                        <div className='form1'>
                            <h6>NOTE: Special requests are subject to the availability of the rental provider.</h6>


                            <textarea className="w3review" rows="6" cols="70"></textarea>
                        </div>
                       
                        <h5 className='pickup'>Car Rental Terms & Conditions</h5>
                        <div className='form2'>
                            <input className='check' type="checkbox" id=""/>
                            <h6>By checking this box, I have read, understood and agreed to Traveloka Car Rental Terms & Conditions.</h6>

                        </div>


                        <h5 className='pickup'>Price Details</h5>
                        <div className='form3'>
                            <div className='price'><h7>Price you pay</h7></div>
                            <h3>{this.state.pay}</h3>

                        </div>
                        <div className='button'>
                    <button
                     type="button" className="btn btn-primary"
                     onClick={()=>{this.handleAddRental()}}

                     >Continue to payment</button>

                    </div>

                    </div>

                       


                    

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
                <Footer/>
                </>
                
            </div>
        );
    }

}


export default CarBooking2;
