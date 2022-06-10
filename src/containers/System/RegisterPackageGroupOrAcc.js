import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ListCar.scss'
import axios from 'axios'

class RegisterPackageGroupOrAcc extends Component {

    constructor(props) {
        super(props)
        this.state={
          cars:[]
        }
    }
    componentDidMount() {
   
       axios.get(`${process.env.REACT_APP_API}/api/get-detail-car-by-id?id=All`)
       .then(res => {
           const cars = res.data.data;
           this.setState({ cars });
           console.log(cars)
         })
    }
     handleDeleteCar=(car)=>{
        console.log("clicked",car.id)
        try {
            axios.get(`${process.env.REACT_APP_API}/api/delete-car?id=${car.id}`)
            alert("Your car information has been deleted!");

        } catch (error) {
            
        }
    }
    handleViewCarDetail=(car)=>{
        this.props.history.push(`/detail-car-in-list/${car.id}`)    
        
    } 

    render() {
        let arrCars= this.state.cars  
        return (
            <div className='list-car-main'>
            <div className='label'><h5>Danh sách các phương tiện hiện có</h5></div>
            <div className='content'>

                <div className='header'>
                    <div className='mot'>
                        <h3>Car brand</h3>
                    </div>
                    <div className='hai'>
                        <h3>Model year</h3>
                    </div>
                    <div className='ba'>
                        <h3>Car's name</h3>
                    </div>
                    <div className='bon'>
                        <h3>Price per day</h3>
                    </div>
                    <div className='nam'>
                        <h3>Car's owner</h3>
                    </div>
                    <div className='sau'>
                        <span></span>
                    </div>
                    <div className='bay'>
                        <span></span>
                    </div>

                </div>
                {arrCars
        .map(car =>
                <div className='infor'>                       
                <div className='mot'>
                        <h4>{car.car_brand}</h4>
                    </div>
                    <div className='hai'>
                        <h4>{car.car_model_year}</h4>
                    </div>
                    <div className='ba'>
                        <h4>{car.car_name}</h4>
                    </div>
                    <div className='bon'>
                        <h4>{car.car_price}</h4>
                    </div>
                    <div className='nam'>
                        { car.Owner && car.Owner.owner_name&&
                        <h4>{car.Owner.owner_name}</h4>
                        }
                    </div>
                    <div className='sau'>
                    <button
                 type="button" className="btn btn-primary"
                 onClick={()=>this.handleViewCarDetail(car)}
                 >Detail</button>

                    </div>
                    <div className='bay'>
                    <button
                 type="button" className="btn btn-danger"
                 onClick={()=>{this.handleDeleteCar(car)}}>Delete</button>

                    </div>
                </div>
        )}
            </div>
        
            
        </div>
            )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPackageGroupOrAcc);
