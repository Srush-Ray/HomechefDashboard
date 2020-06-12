import React, { Component } from "react";
class PastOrders extends Component {
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
          </tr>
       )
    })
 }
  render(){
    return(
        <div className="table-responsive-md" >
        <table className="table table-hover table-striped">
        <thead className="bg-midnight">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer</th>
            <th scope="col">Category</th>
            <th scope="col">SubCategory</th>
            <th scope="col">Delivered To</th>
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

export default PastOrders
