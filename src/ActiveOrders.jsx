import React, { Component } from "react";
import {DropdownButton,Dropdown} from 'react-bootstrap';
import ExpenseCards from './ExpenseCards';
class ActiveOrders extends Component {
  state={
    isLoading: true,
    dataNew:{
        username:"Srushti",
        address:"pune",
        email:"s@gmail.com",
        phonenumber:"7896541230",
    },
};

constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        orders: [
          { id: 1, name: 'Srushti', category:'indian' ,subcategory:'gujrati', deliveryTo:'chinchwad',amount:'50' },
          { id: 2, name: 'rfv', category:'indian' ,subcategory:'south Indian', deliveryTo:'katraj',amount:'150' },
          { id: 3, name: 'tgb ', category:'chinese' ,subcategory:'', deliveryTo:'nigdi',amount:'550' },
          { id: 4, name: 'ygfdx', category:'indian' ,subcategory:'gujrati', deliveryTo:'chinchwad',amount:'250' }
       ]
    }
 }
 renderTableData() {
    return this.state.orders.map((order, index) => {
       const { id, name, category, subcategory,deliveryTo,amount } = order //destructuring
       return (
         <tr key={id}>
         <td>{id}</td>
         <td>{name}</td>
         <td>{category}</td>
         <td>{subcategory}</td>
         <td>{deliveryTo}</td>
         <td>{amount}</td>
         <td>
         <DropdownButton id="dropdown-basic-button" title="Status">
         <Dropdown.Item href="#/action-1">Preparing</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Delivering</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
         </DropdownButton>
         </td>
         </tr>
       )
    })
 }
  render(){
    return(
      <div>
      <div>
      <ExpenseCards/>
        </div>
    
        <div className="table-responsive-md" >
        <table className="table table-hover table-striped">
        <thead className="bg-midnight">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer</th>
            <th scope="col">Category</th>
            <th scope="col">SubCategory</th>
            <th scope="col">Delivery To</th>
            <th scope="col">Amount</th>

          </tr>
        </thead>
        <tbody>
        {this.renderTableData()}
        </tbody>
      </table>
        </div>
        </div>
    );
  }
}

export default ActiveOrders
