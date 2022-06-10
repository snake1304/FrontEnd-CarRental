import axios from 'axios'
import { withRouter } from 'react-router'
import DatePicker from '../../components/Input/DatePicker'
import './CarHome.scss'
import { TimePicker } from 'antd';
import moment from 'moment';
import React, { Component } from 'react'
import hinh1 from '../../assets/images/anh1.svg';
import hinh2 from '../../assets/images/anh2.svg';
import hinh3 from '../../assets/images/anh3.svg';



const format = 'HH:mm';
class CarHome extends Component {
   // Constructor
   constructor(props) {
    super(props)
    this.state={
        locations:[
            
        ],
        StartDate:new Date(),
        EndDate:new Date(),
        
    }
}
componentDidMount() {
    axios.get(`http://localhost:5000/api/get-all-locations?id=All`)
    .then(res => {
        const locations = res.data.data;
        this.setState({ locations });
        console.log("This is location",locations);

     

      })
  }
  
  handelOnChangeDatePickerStart=([value])=>{
        this.setState({StartDate: value});
   } 
   handelOnChangeDatePickerEnd=([value])=>{
    this.setState({EndDate: value});
   }
   
   handleOnChangeIput=(event, id)=>{
    let copyState={...this.state};
    copyState[id]= event.target.value;
    this.setState({
        ...copyState
    },()=>{
      console.log("location name: ",copyState)
    }
    )
    
}

handleSearchCar=()=>{
    const list = this.state.locations
    console.log("List---------",list);
    const loc = list.filter(list => list.Location_name == this.state.LocationName)
    this.setState({ loc });    
   
    this.props.history.push(`/search-car?city=${this.state.LocationName}&start=${this.state.StartDate.getTime()}&end=${this.state.EndDate.getTime()}`)
    console.log("location in copy state:",this.state);    
    }


render (){
    let arrLocations= this.state.locations
      return(
       
            <>
            <div className='form-search-car'>
                <div className='Driver'>
                       <h4>
                           Car rental
                       </h4>
                       <div className='WithoutD'>
                       <div className="form-check">
                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"value="" checked />
                       <label className="form-check-label" for="flexRadioDefault1">
                           Without Driver
                       </label>
                       </div>
                       </div>
                      
                </div>
                <div className='Location'>
                   <label className='label'>
                    Your Rental Location
                   </label>
                   <div className="input-group">
                        {/* <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /> */}
                                                   
                                   <select 
                                   onChange={(event)=>{this.handleOnChangeIput(event,"LocationName")}} value={this.state.LocationName}
                                   class="form-select" aria-label="Default select example">
                                       {arrLocations && arrLocations.length>0 &&
                                       arrLocations.map((location)=>{
                                           return(
                                            <option>{location.Location_name}</option>
                                           )
                                       })
                                       
                                       }  
                                   
                                 </select>                             
                               
                   </div>
                </div>
                <div className='Time'>
                    <div className='RentalStartDate'>
                        <label className='RSDlabel'>
                           Rental Start Date
                        </label>
                        <DatePicker
                           onChange={this.handelOnChangeDatePickerStart}
                           className="DatePicker"
                        />
       
                    </div>

                    <div className='RentalEndDate'>
                    <label className='RSDlabel'>
                           Rental End Date
                        </label>
                        <DatePicker
                           onChange={this.handelOnChangeDatePickerEnd}
                           className="DatePicker"
                        />
                    </div>
                   
                    <div className='ButtonSearch'>
                    <button onClick={()=>this.handleSearchCar(this.state)}>
                        <label className='lbButton'>
                        Search
                        </label>
                    </button>
                    </div>
       
                </div>
            </div>
            <div className='Infor'>
                <label className='lable1'>Why rent a car through Traveloka?</label>
                <div className='content'>
                   <div className='s1'>
                       <img className='img-car' src={hinh1}/>
                       <div className='title'>
                       Time Saver
                       </div>
                       <div className='child-content'>
                           <p className='p'>
                           Rent a car at your fingertips, anytime and anywhere. Compare cars from our trusted partners in one platform, finding the right one for you is now easier than ever.
                           </p>
                       </div>
       
                   </div>
                   <div className='s2'>
                   <img className='img-car' src={hinh2}/>
                       <div className='title'>
                       High Quality Service from Trusted Partners
                       </div>
                       <div className='child-content'>
                       <p className='p'>
                       Our trusted partners provide quality service to ensure that your trip is safe, comfortable and memorable.                    </p>
                       </div>
       
                   </div>
                   <div className='s3'>
                   <img className='img-car' src={hinh3}/>
                       <div className='title'>
                       Real User Rating
                       </div>
                       <div className='child-content'>
                       <p className='p'>
                       No more wrong decision. Real ratings from other users help you find the right car rental choice.                    </p>
                       </div>
       
                   </div>
                   <div className='s4'>
                   <img className='img-car' src={hinh1}/>
                       <div className='title'>
                       Easier Payment with PayLater
                       </div>
                       <div className='child-content'>
                       <p className='p'>
                       Book and secure car rental at any time without having to pay full immediately. Use the initial limit starting from 10 mio, then pay in 1-12 installments with low interest.                    </p>
                       </div>
       
                   </div>
       
                </div>
                
            </div>
            <div className='Driver-content'>
                <h2>Car Rental Without Driver</h2>
                <div className='driverct'>
                <h5>Traveling with family or relatives is more fun if you choose the right transportation. Car rental can be the best choice to facilitate your mobility. To further support your flexibility while traveling, Traveloka now offers Without Driver Car Rental service. You can enjoy this convenience by booking it directly through Traveloka Lifestyle SuperApp. Find a wide selection of the best cars, complete with the price list.
       
       <br/><br/>Get 24 hours of rental time for without driver car rental service in Traveloka. Make your family or business trip more efficient by using our without driver service.</h5>
       
                </div>
                <h2>Car Rental Without Driver</h2>
                <div className='driverct'>
                <h5>Ease of mobility is very important when you are on a trip. If you wish for a hassle-free trip while exploring tourist destinations, renting a car with driver service will be the right choice. As digital technology advances, you can enjoy car rental services with driver only on Traveloka Lifestyle SuperApp. You can easily compare the prices from our trusted partners and find one that suits your needs.</h5>
                </div>
            </div>
            </>
        )
      
  }
   


}
export default withRouter(CarHome)