import './carList.scss'
import axios from 'axios'
import { useLocation, withRouter } from 'react-router'
import valiLogo from '../../assets/images/vali.png';
import seatLogo from '../../assets/images/vacuum.png';
import { Card, Input } from 'semantic-ui-react'

import { useParams,useHistory } from "react-router-dom";



import React, { Component, useEffect,useState,FC } from 'react'

class CarsList1 extends Component {
  
   // Constructor
   constructor(props) {
     super(props)
     this.state={
       cars:[],
       list:[]
     }
   }

  componentDidMount() {

     let diadiem= this.props

    axios.get(`http://localhost:5000/api/get-detail-car-by-id?id=All`)
    .then(res => {
        const cars = res.data.data;
        const diadiem= "Thanh pho Ho Chi Minh";
        const list = cars.filter(car => car.Owner.Location.Location_name == diadiem)
        this.setState({ list });
        // console.log(list)
      })
  }
  
  handleViewCarDetail=(cars)=>{
    // console.log('detail: ',cars)
    this.props.history.push(`/detail-cars/${cars.id}`)    
    
  }  
  render (){
    let arrCars= this.state.list  
      return(
        arrCars
        .map(car =>
            <div className='car-container'> 
            <div className='left'>
                <img className='img-car' src={car.car_image}/>  
            </div>
            <div className='center'>
                <div className='name-car'> {car.car_name}</div>
                <div className='choNgoi'> {car.capacity}
                <img className='img-vali' src={seatLogo} alt="React Logo" />
                </div>
                <div className='hanhLy'>{car.luggage_storage}
                <img className='img-vali' src={valiLogo} alt="React Logo" />
                </div>
            </div>
            <div className='right'>
                <div className='basic-rental'>Basic rental from</div>
                <div className='price-by-day'>
                  <div className='price'>{car.car_price}</div>
                  <div className='day'> /day</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>this.handleViewCarDetail(car)}>Continue</button>
            </div>
        </div>
        )
      );
  }
   
}

export const CarsList:FC<{}>=({})=>{


  const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = lists.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(lists)
          console.log("list----------------",lists)
      }
  }
  
  let history = useHistory();
  const [cars, setCars] = useState([]);
  const [lists, setLists] = useState([]);
  const { search } = useLocation();
  const queryParam = new URLSearchParams(search);

  const handleViewCarDetail=(cars)=>{
    // console.log('detail: ',cars)
    history.push(`/detail-cars/${cars.id}${search}`)    
    
  }  

  console.log("searparams", new URLSearchParams(search).get("city"))
  useEffect(()=>{

  

    // let diadiem= this.props
    // console.log("Dia diem",diadiem)

   axios.get(`http://localhost:5000/api/get-detail-car-by-id?id=All`)
   .then(res => {
       const cars = res.data.data;
       const diadiem= queryParam.get("city");
       console.log("diadiem",diadiem)
       const list = cars.filter(car => car.Owner.Location.Location_name == diadiem)
       setLists(list);
       // console.log(list)
     })

  },[])

  return (
    <>
      <Input className='search' icon='search'
                placeholder='  Search your favorite vehicle...'
                onChange={(e) => searchItems(e.target.value)}
            />          
    {searchInput.length > 1 ? (filteredResults.map(  
      car =>
      <div className='car-container'> 
      <div className='left'>
          <img className='img-car' src={car.car_image}/>  
      </div>
      <div className='center'>
          <div className='name-car'> {car.car_name}</div>
          <div className='choNgoi'> {car.capacity}
          <img className='img-vali' src={seatLogo} alt="React Logo" />
          </div>
          <div className='hanhLy'>{car.luggage_storage}
          <img className='img-vali' src={valiLogo} alt="React Logo" />
          </div>
      </div>
      <div className='right'>
          <div className='basic-rental'>Basic rental from</div>
          <div className='price-by-day'>
            <div className='price'>{car.car_price}</div>
            <div className='day'> /day</div>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>handleViewCarDetail(car)}>Continue</button>
      </div>
  </div>
    ))
    :
    (lists.map(  
      car =>
      <div className='car-container'> 
      <div className='left'>
          <img className='img-car' src={car.car_image}/>  
      </div>
      <div className='center'>
          <div className='name-car'> {car.car_name}</div>
          <div className='choNgoi'> {car.capacity}
          <img className='img-vali' src={seatLogo} alt="React Logo" />
          </div>
          <div className='hanhLy'>{car.luggage_storage}
          <img className='img-vali' src={valiLogo} alt="React Logo" />
          </div>
      </div>
      <div className='right'>
          <div className='basic-rental'>Basic rental from</div>
          <div className='price-by-day'>
            <div className='price'>{car.car_price}</div>
            <div className='day'> /day</div>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>handleViewCarDetail(car)}>Continue</button>
      </div>
  </div>
    )) }  
    </>  
  )

}


export default CarsList
