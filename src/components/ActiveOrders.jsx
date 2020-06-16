import React, { Component } from "react";
import ExpenseCards from './ExpenseCards';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import Product from './Product'

class ActiveOrders extends Component {

constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        orders: [],
        status: "accepted",
        _id:""
    }
    this.onChange = this.onChange.bind(this)
    this.handle = this.handle.bind(this)
 }
 
 componentDidMount() {   
        
  toast.configure()
  axios.get('http://localhost:5000/homechef/orders/active', {
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

onChange(e) {
  this.setState({ [e.target.name]: e.target.value})
}

handle(e) {
  console.log(this.state.status);
  console.log(localStorage.id);
  console.log("clicked");
  axios.put(`http://localhost:5000/homechef/orderstatus/${this.state.status}/${localStorage.id}`,{},
        {
            headers: {
              'auth-token': localStorage.usertoken
            }},
            )
            .then(res => {
                if(res.data.status==true){
                   alert(res.data.data)
                }
                else{
                    alert(res.data.error)
                }
            })
            .catch(err => {
                console.log("err")
            })

}
 
 renderTableData() {
    return this.state.orders.map((order, index) => {
       const { _id, catogary, subcatogary,paymentType,totalCost,serviceboyid } = order //destructuring
       return (
         <tr key={_id}>
         <td>{_id}
         <Nav >
         <p ><Link exact to={'/Product'} className="nav-link "><b>details</b></Link></p>
         <p ><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></p>
         </Nav>
         </td>
         <td>{catogary}</td>
         <td>{subcatogary}</td>
         <td>{paymentType}</td>
         <td>{totalCost}</td>
         <td>{serviceboyid}</td>
         <td>
         {localStorage.setItem("id",_id)}
         <Form >
           {/* <label>
             status
             <Select value={this.state.vaue} onChange={this.state.handleChange}>
              <option value="accepted"></option>
              <option value="preparing"></option>
              <option value="dispatch"></option>
              <option value="rejected"></option>
             </Select>
           </label> */}

        <FormGroup onSubmit={this.handle}>
            
            {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
            <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                    <option value="accepted">Accepted</option>
                    <option value="deliverd">Delivered</option>
                    <option value="dispatch">Dispatch</option>
                    <option value="rejected">Rejected</option>
            </select>
        </FormGroup>
         </Form>
        
         </td>
         <td><Button type="Button" onClick={this.handle}>Set</Button></td>
         </tr>
       )
    })
 }
  render(){
    return(
      <div>
      <div>
      {/* <ExpenseCards/> */}
        </div>
    
        <div className="table-responsive-md" >
        <table className="table table-hover">
        <thead className="">
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">Category</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Payment Type</th>
            <th scope="col">Total-Amount</th>
            <th scope="col">Service Boy Id</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {this.renderTableData()}
        </tbody>
      </table>
      <Route>
      <Switch>
         <Route path='/Product' component={Product} />
         <Route path='/' />
         </Switch>  
         </Route>
        </div>
        </div>
    );
  }
}

export default ActiveOrders
