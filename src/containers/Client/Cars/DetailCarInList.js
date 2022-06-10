import React, { Component } from 'react'
import HeaderHomepage from '../../HomePage/HeaderHomepage'
import axios from 'axios'
import './DetailCarInList.scss'
import Logo from '../../../assets/images/box.png';
import tick from '../../../assets/images/accept.png';




class DetailCarInList extends Component {

    

    constructor(props) {
        super(props)
        this.state={
          cars:[],
        }
    }

   
    
    
   
    componentDidMount() 
    {
      let id= this.props.match.params.id      
      axios.get(`http://localhost:5000/api/get-detail-car-by-id?id=${id}`)
      .then(res => {
          const cars = res.data.data;
          this.setState({ cars });
          console.log("car infor",this.state.cars)

      })                    
    }
    handleOnChangeStatus=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          console.log("drop name: ",copyState)
        }
        )
    }
    handleEditStatus=()=>{
        try {
            axios.post('http://localhost:5000/api/put-car',this.state.status)            
            console.log("Respone create car", this.state,6000)
        } catch (error) {
            
        }
        
    }
  
  render (){
    let carDetail= this.state.cars
    console.log("car detailll",carDetail)

  

      return(
        <div>
        <>
        <div className='container'>
        <div className='left'>
            <div className='top'>
                <h3>Car Detail</h3>
                <h7></h7>
                <div className='login'>
                    <div className='left-c'>

                        <img className='img-car' src={carDetail.car_image}/>
                    
                    </div>
                    <div className='right-c1'>
                        <div className='login-content'>

                           <h6>{carDetail.car_name}</h6>
                        
                        </div>
                        <div className='login-content2'>
                        {carDetail.Owner && carDetail.Owner.owner_name &&
                        <h7>Provided by {carDetail.Owner.owner_name} </h7>
                        }
                        </div>
                        <div className='log-res'> <span></span></div>

                    </div>

                </div>

            </div>
            <div className='bot'>
            <h4>Car description</h4>

            <div className='ContactDetails'>
                <h5>{carDetail.car_description}</h5>
                <div className='phone-mail'>
                    <div className='left'>
                        <label>Capacity</label>
                        <h4>{carDetail.capacity}</h4>
                    </div>
                    <div className='right'>
                        <label>Luggage storage</label>
                        <h4>{carDetail.luggage_storage}</h4>

                    </div>
                </div>


                <h5 className='pickup'>Price Details</h5>
                <div className='form3'>
                    <div className='price'><h7>Price per day</h7></div>
                    <h3>{carDetail.car_price}</h3>

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
                    <h5>(Car Rental without Driver)</h5>
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
                        <h8>Car's brand</h8>
                        
                    <h6>
                      {carDetail.car_brand}
                    </h6>
                    
                    
                    </div>
                    <div className='region'>
                        <h8>Car's color</h8>
                        <h6>{carDetail.color}</h6>
                    </div>
                 
                    <div className='refundable'>
                        
                        <h6><img className='img' src={tick} alt="React Logo" />&emsp; Refundable</h6>
                        <h6><img className='img' src={tick} alt="React Logo" />&emsp; Reschedule Available</h6>
                        Status:
                        {carDetail.status===1 ? (
                                                    <select 
                                                    onChange={(event)=>{this.handleOnChangeStatus(event,"status")}} value={carDetail.status}
                                                    className="form-select" aria-label="Default select example" 
                                                    >  
                                                    <option>{carDetail.status}</option>                         
                                                    <option>0</option>                          
                                                  </select>    
                        ):(
                            <select 
                            onChange={(event)=>{this.handleOnChangeStatus(event,"status")}} value={carDetail.status}
                            className="form-select" aria-label="Default select example" 
                            >  
                            <option>{carDetail.status}</option>                         
                            <option>1</option>                          
                          </select>    
                        )

                        }

                        <button type="button" className="btn-edit-car-detail" onClick={()=>{this.handleEditStatus()}}>Edit</button>


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

export default DetailCarInList
