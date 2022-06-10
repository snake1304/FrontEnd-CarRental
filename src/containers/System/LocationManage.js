import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LocationManage.scss';
import {handleCreateNewCarServie} from'../../services/carService';
import axios from 'axios';
class LocationManage extends Component {

    constructor(props){
        super(props);
        this.state={
            lists:[],
            Location_name:"",
            location_rental:"",
            location_return:""
        }
    }

    componentDidMount() {

        axios.get(`${process.env.REACT_APP_API}/api/get-all-locations?id=All`)
        .then(res => {
            const lists = res.data.data;
            this.setState({ lists });
             console.log(lists)
          })

    }

    handleOnChangeIput=(event, id)=>{
        let copyState={...this.state};
        copyState[id]= event.target.value;
        this.setState({
            ...copyState
        },()=>{
          
        })
    }
    handleAddLocation=()=>{
        try {
            axios.post('${process.env.REACT_APP_API}/api/create-new-location',this.state)            
            console.log("Respone create car", this.state,6000)
        } catch (error) {
            
        }
        
    }
    handleDeleteLocation=async(location)=>{
        console.log("clicked",location.id)
        try {
            axios.get(`${process.env.REACT_APP_API}/api/delete-location?id=${location.id}`)
            alert("Your location infor has been deleted!");

        } catch (error) {
            
        }
    }
  
   



    render() {
        let listLocation= this.state.lists 
        return (
            <div className='containern'>
                <div className='form-location'>
                    <h4 className='title'>Thêm địa điểm</h4>
                    <div className='label5'>
                            <label>Location name: </label>
                        </div>
                        <div className='box5'>
                        <input className='box5' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"Location_name")}} value={this.state.Location_name}/>
                    </div>
                    <div className='label5'>
                            <label>Location rental: </label>
                        </div>
                        <div className='box5'>
                        <input className='box5' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"location_rental")}} value={this.state.location_rental}/>
                    </div>
                    <div className='label5'>
                            <label>Locatin return: </label>
                        </div>
                        <div className='box5'>
                        <input className='box5' type='text' onChange={(event)=>{this.handleOnChangeIput(event,"location_return")}} value={this.state.location_return}/>
                    
                    </div>
                    <div className='label5'>
                    <button type="button"
                     onClick={()=>{this.handleAddLocation()}}
                    >Save</button>

                    </div>

                </div>
                <div className='list'>
                <h4 className='title'>Danh sách các địa điểm địa điểm</h4>

                <div className='top'>
                    <div className='mot'>
                        <h5>Location name</h5>

                    </div>
                    <div className='hai'>
                    <h5>Location rental</h5>
                    </div>
                    <div className='ba'>
                    <h5>Location return</h5>
                    </div>
                    <div className='bon'>
                    </div>
                    <div className='nam'>
                    </div>
                </div>
                {listLocation
            .map(location =>
                <div className='bot'>
                    <div className='mot'>
                    <h5>{location.Location_name} (Id: {location.id})</h5>
                    </div>
                    <div className='hai'>
                    <h5>{location.location_rental}</h5>
                    </div>
                    <div className='ba'>
                    <h5>{location.location_return}</h5>
                    </div>
                    <div className='bon'>
                    <button type="button">Edit</button>
                    </div>
                    <div className='nam'>
                    <button type="button" onClick={()=>{this.handleDeleteLocation(location)}}>Delete</button>
                    </div>
                </div>)}


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

export default connect(mapStateToProps, mapDispatchToProps)(LocationManage);
