import React, { Component } from 'react'
import HeaderHomepage from '../../HomePage/HeaderHomepage'
import './CarDetail.scss'
import axios from 'axios'
import Select from 'react-select'
import carlogo from '../../../assets/images/car.png';
import protectlogo from '../../../assets/images/encrypted.png';
import ocheckLogo from '../../../assets/images/24-hours.png';
import listLogo from '../../../assets/images/list.png';
import checkLogo from '../../../assets/images/clock.png';
import fuelLogo from '../../../assets/images/fuel.png';
import cardLogo from '../../../assets/images/card.png';
import calendarLogo from '../../../assets/images/calendar.png';
import checkLogo1 from '../../../assets/images/check1.png';
import Footer from '../../Footer/Footer'




class CarsList extends Component {

    

    constructor(props) {
        super(props)
        this.state={
            cars:[],
            location:"",
            StartDate:new Date(),
            EndDate:new Date(),
            pay:0,
            pickLocation:"",
            dropLocation:""                     
        }
    }

    handleOnChangePick=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          console.log("pick name: ",copyState.PickLocation)
        }
        )
    }
    
    handleOnChangeDrop=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          console.log("drop name: ",copyState.DropLocation)
        }
        )
    }
   
    componentDidMount() {
        const queryParam = new URLSearchParams(this.props.location.search)

        

        let id= this.props.match.params.id
        let start= queryParam.get("start")
        let end= queryParam.get("end")
       

        this.setState({StartDate:new Date(+start)})
        this.setState({EndDate:new Date(+end)})

       

        function calculateDate (d1, d2) {
            var t2 = d2;
            var t1 = d1;
            
            return Math.floor((t2-t1)/(24*3600*1000));
            }
        
            let countDate= calculateDate(start,end)

        console.log("count day",countDate)

        


        function calculatPrice (d1, d2) {
            var t2 = d2;
            var t1 = d1;
            
            return Math.floor((t1*t2));
            }       
        axios.get(`http://localhost:5000/api/get-detail-car-by-id?id=${id}`)

        .then(res => {
            const cars = res.data.data;
            this.setState({ cars });
             console.log("detail price",cars.car_price);    
             let totalPrice= calculatPrice(countDate,cars.car_price)
            
            
            this.setState({pay:+totalPrice})
            console.log("total pay",this.state.pay)

        })

        
            
      }
    handleViewBooking=()=>{
    const list = this.state.cars
    console.log("List---------",list);


    this.props.history.push(`/detail-cars-booking/${this.state.cars.id}${this.props.location.search}&total=${this.state.pay}&pick=${this.state.PickLocation}&drop=${this.state.DropLocation}`)
    console.log("location in copy state:",this.state);    


    
   
  

}
      
  
  render (){
    let CarDetail= this.state.cars
    let startDate= this.state.StartDate
    let endDate= this.state.EndDate
    let DetailOwner= this.state.cars.Owner

   console.log("pick loca",this.state);

    // console.log("Car detail isssssssss :",CarDetail)
    // console.log("Owner detail: ",DetailOwner)
  

    // let rentalLocation =  DetailOwner.Location.location_return;
      return(
          <>
       <HeaderHomepage/>
       <div className='car-detail-container'>
           <div className='left-content'>

               <div className='car-infor'>
                    <img className='img-car' src={CarDetail.car_image}/>  
                    <div className='infor'>
                        <div className='name'>{CarDetail.car_name}</div>
                        <div className='provider'>
                            {CarDetail.Owner && CarDetail.Owner.owner_name &&
                            <h5 className='provider-text'>
                                Provided by  {CarDetail.Owner.owner_name }
                            </h5>
                            }
                        </div>
                        <div className='year'> <img className='img-car' src={carlogo} alt="React Logo" /> 
                        <div className='model-year'>{CarDetail.car_model_year} (Model year)</div>
                        </div> 
                    </div>
               </div>
              
               <div className='rental-infor'>
                            <h3>Rental Infor</h3>
                            <div className='order-infor'>
                                <h4> Order infor</h4>
                                <h5> <img className='img-oclock' src={protectlogo} alt="React Logo" />&emsp; Vehicle insurance</h5>
                                <h5> <img className='img-oclock' src={ocheckLogo} alt="React Logo" />&emsp; 24/7 Traveloka Customer Service</h5>
                            </div>
                            <div className='policy'> 
                            <h4>Policy</h4>
                                <h5><img className='img-oclock' src={listLogo} alt="React Logo" />&emsp;Rental Requirements
                                    <div className='require-infor'>
                                        <div className='require-detail'>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;ID card (KTP or passport)</h6>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;Driver’s License (SIM A)/International Driving Permit</h6>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;Selfie with the ID card/passport</h6>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;Proof of Employment</h6>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;Proof of Employment</h6>
                                            <h6><img className='img-protect' src={checkLogo1} alt="React Logo" />&emsp;Social Media Account Name</h6>
                                        </div>
                                    </div>
                                </h5>
                                <h5><img className='img-oclock' src={checkLogo} alt="React Logo" />&emsp;Usage of up to 24 hours per rental day</h5>
                                <h5><img className='img-oclock' src={fuelLogo} alt="React Logo" />&emsp;Return the fuel as received</h5>
                                <h5><img className='img-oclock' src={cardLogo} alt="React Logo" />&emsp;Refundable</h5>
                                <h5><img className='img-oclock' src={calendarLogo} alt="React Logo" />&emsp;Reschedule Available</h5>
                                
                            </div>
               </div>

               <div className='location-rental-infor'>
                   <div className='location-rental'>
                       <h4>Select pick-up location*</h4>
                       {CarDetail.Owner && CarDetail.Owner.Location && CarDetail.Owner.Location.location_rental &&                           
                            <select 
                            onChange={(event)=>{this.handleOnChangePick(event,"PickLocation")}} value={this.state.pickLocation}
                            className="form-select" aria-label="Default select example"                        
                            >  
                            <option></option>                         
                            <option>{CarDetail.Owner.Location.location_rental}</option>                          
                          </select>                             
                        }

                       
                   </div>
                   <div className='location-return'>
                   <h4>Select drop-off location*</h4>
                       {CarDetail.Owner && CarDetail.Owner.Location && CarDetail.Owner.Location.location_return &&                           
                            <select 
                            onChange={(event)=>{this.handleOnChangeDrop(event,"DropLocation")}} value={this.state.dropLocation}
                            className="form-select" aria-label="Default select example" 
                            >  
                            <option></option>                         
                            <option>{CarDetail.Owner.Location.location_return}</option>                          
                          </select>                             
                        }

                   </div>
               </div>

           </div>
           <div className='right-content'>
                <div className='topCt'>
                    <h5 className='sumary'>Rental Summary</h5>

                    <div className='car-detail-small'>
                        <img className='img-car-small' src={CarDetail.car_image}/>  
                        <div className='car-name-small'>{CarDetail.car_name}</div>
                    </div>
                    <div className='rental-infor-small'>
                            <h8 className='location'> - {CarDetail.Owner && CarDetail.Owner.Location && CarDetail.Owner.Location.Location_name}</h8><br/><br/>
                            <h8 className='date'> - {startDate.toString()}  - {endDate.toString()}</h8>
                    </div>
                </div>
                <div className='botCt'>
                <h5 className='sumary'>Rental Details</h5>
                <h4 className='total-price'>Total price</h4>
                <h3 className='pay'>{this.state.pay}  $</h3>
                <button type="button" className="btn btn-primary" onClick={this.handleViewBooking} >Continue</button>
                <div className='inclusive'>
                    <h7 className='text'>Inclusive of taxes & fees</h7>
                </div>
                <div className='basic'>
                    <h7 className='text'>Basic rental</h7>
                    <h4 className='text2'>{this.state.pay} $</h4>
                </div>
                <div className='basic'>
                    <h7 className='text'>You pay</h7>
                    <h4 className='text2'>{this.state.pay} $</h4>
                </div>

                </div>
           </div>
                   
       </div>
       <div className='PriceDetail'>
                        <div className='lbPay'>
                            <label className='labelPay'> Price Details </label>
                            <div className='youPay'>
                                <div className='payL'>
                                    You pay
                                </div>
                                <div className='payR'>
                                {this.state.pay}  $
                                </div>

                            </div>
                        </div>
                        <div className='btnContinue'>
                        <button type="button" className="btn btn-primary" onClick={this.handleViewBooking} >Continue</button>
                        
                        </div>
       </div>
       <div className='footer-all'>
                <Footer/>
           </div>
       </>
        )
    }
    
   
}

export default CarsList
