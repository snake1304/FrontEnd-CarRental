import React, { Component } from 'react'
import HeaderHomepage from '../../HomePage/HeaderHomepage'
import axios from 'axios'
import './DetailRental.scss'
import Logo from '../../../assets/images/box.png';
import tick from '../../../assets/images/accept.png';




class DetailRental extends Component {

    

    constructor(props) {
        super(props)
        this.state={
          rentals:[],
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

   
    
    
   
    componentDidMount() 
    {
      let id= this.props.match.params.id      
      axios.get(`${process.env.REACT_APP_API}/api/get-detail-rental-by-id?id=${id}`)
      .then(res => {
          const rentals = res.data.data;
          this.setState({ rentals });
          console.log("rental infor",this.state.rentals)

      })                    
    }
    handleViewCarDetail=(carId)=>{
        this.props.history.push(`/detail-car-in-list/${carId}`)    
        
    } 

  
  render (){
    let RentalDetail= this.state.rentals
    console.log("car detailll",RentalDetail)

  

      return(
        <div>
        <>
        <div className='container'>
        <div className='left'>
            <div className='top'>
                <h3>Rental Detail</h3>
                <h7></h7>
                <div className='login'>
                    <div className='left-c'>
                    {RentalDetail.Car && RentalDetail.Car.car_image &&
                        <img className='img-car' src={RentalDetail.Car.car_image}/>
                    }
                    </div>
                    <div className='right-c1'>
                        <div className='login-content'>
                        {RentalDetail.Car && RentalDetail.Car.car_name &&
                           <h6>{RentalDetail.Car.car_name}</h6>
                        }
                        </div>
                        <div className='login-content2'>
                        {RentalDetail.Car && RentalDetail.Car.Owner && RentalDetail.Car.Owner.owner_name &&
                        <h7>Provided by {RentalDetail.Car.Owner.owner_name}</h7>
                        }
                        </div>
                        <div className='log-res'>
                            {RentalDetail.Car && RentalDetail.Car.id &&
                             <span 
                             onClick={()=>this.handleViewCarDetail(RentalDetail.Car.id)}
                             >Edit status for this car</span>
                            }
                             </div>
                            

                    </div>

                </div>

            </div>
            <div className='bot'>
            <h3>Contact Details</h3>

            <div className='ContactDetails'>
                <h5>Customer's name:   {RentalDetail.fullName}</h5>
                <div className='phone-mail'>
                    <div className='left'>
                        <label>Mobile number</label>
                        <h4>+{RentalDetail.phoneL}</h4>
                    </div>
                    <div className='right'>
                        <label>Email</label>
                        <h4>{RentalDetail.Email}</h4>

                    </div>
                </div>

                <h5 className='pickup'>Pickup Location</h5>
                <div className='form'>
                    <h6>{RentalDetail.pickLocation}</h6>
                </div>
                <h5 className='pickup'>Drop-off Location</h5>
                <div className='form'>
                    <h6>{RentalDetail.dropLocation}</h6>
                </div>

                <h5 className='pickup'>Price Details</h5>
                <div className='form3'>
                    <div className='price'><h7>Total price</h7></div>
                    <h3>{RentalDetail.pay}</h3>

                </div>
                <div className='button'>
           

            </div>

            </div>                 
            </div>
          
        </div>
        <div className='right'>

            <div className='rental-detail'>
                <h3></h3>
            </div>
            <div className='rental-form'>
                <div className='Driver'>
                    <h5>Car Rental without Driver</h5>
                </div>
                <div className='name'>
                    <h6>
                    </h6>                            
                </div>
                <div className='manual'>
                    <h6>
                    Manual
                    </h6>                            
                </div>
                <div className='owner'>
                    <h6>
                    </h6>
                                              
                </div>

                <div className='rental-infor'>
                    <div className='region'>
                        <h8>Rental City/Region</h8>
                    {RentalDetail.Car && RentalDetail.Car.Owner && RentalDetail.Car.Owner.Location && RentalDetail.Car.Owner.Location.Location_name &&
                    <h6>
                      {RentalDetail.Car.Owner.Location.Location_name}
                    </h6>
                    }
                    
                    </div>
                    <div className='region'>
                        <h8>Start Date & Time</h8>
                        <h6>{RentalDetail.StartDate}</h6>
                    </div>
                    <div className='region'>
                        <h8>Pickup Location</h8>
                        <h6>{RentalDetail.pickLocation}</h6>
                    </div>
                    <div className='region'>
                        <h8>End Date & Time</h8>
                        <h6>{RentalDetail.EndDate} </h6>
                    </div>
                    <div className='region'>
                        <h8>Drop-off Location</h8>
                        <h6>{RentalDetail.dropLocation}</h6>
                    </div>
                    <div className='refundable'>
                        
                        <h6><img className='img' src={tick} alt="React Logo" />&emsp; Refundable</h6>
                        <h6><img className='img' src={tick} alt="React Logo" />&emsp; Reschedule Available</h6>
                    </div>

                </div>
                

            </div>
        </div>
    </div> 
        </>
        
    </div>
        )
    }
    
   
}

export default DetailRental
