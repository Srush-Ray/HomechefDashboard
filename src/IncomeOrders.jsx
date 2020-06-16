import React, { Component } from "react";

class IncomeOrders extends Component {
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
             <td scope="col">{id}</td>
             <td scope="col">{name}</td>
             <td scope="col">{category}</td>
             <td scope="col">{subcategory}</td>
             <td scope="col">{deliveryTo}</td>
             <td scope="col">{amount}</td>
            <td scope="col"><button className="btn btn-primary" style={{margin:'2% 2% '}}>Accept</button>
            <button className="btn btn-primary">Reject</button></td>
          </tr>
       )
    })
 }
  render(){
    return(
        <div className="table-responsive" >
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
    );
  }
}

export default IncomeOrders
