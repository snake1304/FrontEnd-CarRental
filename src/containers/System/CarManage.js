import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateCar.scss';
import {handleCreateNewCarServie} from'../../services/carService';
import axios from 'axios';
class CarManage extends Component {

    constructor(props){
        super(props);
        this.state={
            carName:'',
            carDescription:'',
            carModelYear	:'',
            carBrand:'',
            carColor:'',
            carCapacity:'',
            luggageStorage:'',
            carStatus:'',
            carOwnerId:'',
            carImage:'',
            carPrice:''
        }
    }

    componentDidMount() {
    }

    handleOnChangeIput=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          
        })
    }
    
    handleAddCar=()=>{
        try {
            axios.post('${process.env.REACT_APP_API}/api/create-new-car',this.state)            
            console.log("Respone create car", this.state,6000)
        } catch (error) {
            
        }
        
    }

   



    render() {
        return (
            <form>
                <div className='container'>
                    <div className='left'>
                        <div className='content'>
                        <div className='label'>
                            <label>Name: </label>
                        </div>
                        <div className='box'>
                            <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carName")}} value={this.state.carName}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Description: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carDescription")}} value={this.state.carDescription}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Model year: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carModelYear")}} value={this.state.carModelYear}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Brand: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carBrand")}} value={this.state.carBrand}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Color: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carColor")}} value={this.state.carColor}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Car's price per day: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carPrice")}} value={this.state.carPrice}/>
                        </div>
                        </div>
                    </div>
                    <div className='right'>
                    <div className='content'>
                        <div className='label'>
                            <label>Car Capacity: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carCapacity")}} value={this.state.carCapacity}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Luggage Storage: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text'onChange={(event)=>{this.handleOnChangeIput(event,"luggageStorage")}} value={this.state.luggageStorage}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Car Status: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carStatus")}} value={this.state.carStatus}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Car Owner Id: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carOwnerId")}} value={this.state.carOwnerId}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='label'>
                            <label>Car Image URL: </label>
                        </div>
                        <div className='box'>
                        <input className='box' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"carImage")}} value={this.state.carImage}/>
                        </div>
                        </div>
                        <div className='content'>
                        <div className='button'>
                        <button type="submit" className="btn btn-primary"
                         onClick={()=>{this.handleAddCar()}}
                            >Save</button>                         </div>
                        </div>
                    </div>
                </div>
                <div className='list-car'>

                </div>



            </form>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(CarManage);
