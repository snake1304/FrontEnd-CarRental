import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import './RentalManage.scss';

class RentalManage extends Component {

    constructor(props) {
        super(props)
        this.state={
          rentals:[]
        }
      }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API}/api/get-detail-rental-by-id?id=All`)
    .then(res => {
        const rentals = res.data.data;
        this.setState({ rentals });
         console.log(rentals)
      })
    }

    handleViewRentalDetail=(rentals)=>{
        this.props.history.push(`/detail-rental/${rentals.id}`)    
        
    }
    handleDeleteLocation=(rental)=>{
        console.log("clicked",rental.id)
        try {
            axios.get(`${process.env.REACT_APP_API}/api/delete-rental?id=${rental.id}`)
            alert("Your rental information has been deleted!");

        } catch (error) {
            
        }
    } 
    
    render() {
        let arrRentals= this.state.rentals  

        return (

            <>
            
            <div className='container1'>
                <div className='label'><h5>Danh sách các hợp đồng cho thuê</h5></div>
                <div className='content'>

                    <div className='header'>
                        <div className='mot'>
                            <h3>Car ID</h3>
                        </div>
                        <div className='hai'>
                            <h3>Owner ID</h3>
                        </div>
                        <div className='ba'>
                            <h3>Customer's name</h3>
                        </div>
                        <div className='bon'>
                            <h3>Customer's Phone</h3>
                        </div>
                        <div className='nam'>
                            <h3>Price</h3>
                        </div>
                        <div className='sau'>
                            <span></span>
                        </div>
                        <div className='bay'>
                            <span></span>
                        </div>

                    </div>
                    {arrRentals
            .map(rental =>
                    <div className='infor'>                       
                    <div className='mot'>
                            <h4>{rental.car_id}</h4>
                        </div>
                        <div className='hai'>
                            <h4>{rental.owner_id}</h4>
                        </div>
                        <div className='ba'>
                            <h4>{rental.fullName}</h4>
                        </div>
                        <div className='bon'>
                            <h4>{rental.phoneL}</h4>
                        </div>
                        <div className='nam'>
                            <h4>{rental.pay}</h4>
                        </div>
                        <div className='sau'>
                        <button
                     type="button" className="btn btn-primary"
                     onClick={()=>this.handleViewRentalDetail(rental)}
                     >Detail</button>

                        </div>
                        <div className='bay'>
                        <button
                     type="button" className="btn btn-danger"
                     onClick={()=>{this.handleDeleteLocation(rental)}}>Delete</button>

                        </div>
                    </div>)
                    }
                    

                </div>
                
            </div>
          
           
        </>
            
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(RentalManage);
