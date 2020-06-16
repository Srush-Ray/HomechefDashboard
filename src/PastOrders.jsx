import React, { Component } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

class PastOrders extends Component {
//   state={
//     isLoading: true,
//     dataNew:{
//         username:"Srushti",
//         address:"pune",
//         email:"s@gmail.com",
//         phonenumber:"7896541230",
//     },
// };

constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        orders: []
    }
 }

 componentDidMount() {   
        
  // toast.configure()
  axios.get('http://localhost:5000/homechef/orders/past', {
      headers: {
        'auth-token': localStorage.usertoken
      }})
   .then(res => { 
       if(res.data.status==true){
          this.setState({orders: res.data.data})
          }
          else if(res.data.status==false){
              // alert("Login First");
              toast("Login First!!", {position: toast.POSITION.TOP_CENTER});
          } 
   })
   .catch(err => {
      // alert("Login First!!")
      toast("Login First!!", {position: toast.POSITION.TOP_CENTER});
  })
}

 renderTableData() {
  return this.state.orders.map((order, index) => {
    const { _id, catogary, subcatogary, paymentType, totalCost, serviceboyid } = order //destructuring
    return (
      <tr key={_id}>
      <td>{_id}</td>
      <td>{catogary}</td>
      <td>{subcatogary}</td>
      <td>{paymentType}</td>
      <td>{totalCost}</td>
      <td>{serviceboyid}</td>
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
          <th scope="col">OrderId</th>
            <th scope="col">Category</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Payment Type</th>
            <th scope="col">Total-Amount</th>
            <th scope="col">Service Boy Id</th>
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
