import React,{Component} from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import FinancialCharts from './FinancialCharts';



class Financials extends Component {

  constructor(){
    super();
    this.state = {
      month:'',
      amount:0,
    }
    
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
   
    console.log("clicked");
         axios.put('http://localhost:5000/homechef/financial/add/',
         {
            "array": "expense",
            "month": this.state.month,
            "amount": this.state.amount,
         },
         {
             headers: {
               'auth-token': localStorage.usertoken
             }},
             )
             .then(res => {
                 if(res.data.status==true){
                    // alert(res.data.data)
                    toast('Expense added', {position: toast.POSITION.TOP_CENTER});
                 }
                 else{
                    //  alert(res.data.error)
                    toast('Got some error', {position: toast.POSITION.TOP_CENTER});
                 }
             })
             .catch(err => {
                 console.log("err")
             })
  }

  render(){
return(
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
      <div style={{marginRight:'20%', marginLeft:'20%', marginTop:'3%'}}>
      <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
      <FormGroup >
      <Label >Month</Label><br />
      <select name="month" id="month" style={{width:'100%', height:'40px',borderRadius:'5px'}} onChange={this.onChange}>
              <option value="JANUARY">JANUARY</option>
              <option value="FEBRUARY">FEBRUARY</option>
              <option value="MARCH">MARCH</option>
              <option value="APRIL">APRIL</option>
              <option value="MAY">MAY</option>
              <option value="JUNE">JUNE</option>
              <option value="JULY">JULY</option>
              <option value="AUGUST">AUGUST</option>
              <option value="SEPTEMBER">SEPTEMBER</option>
              <option value="OCTOBER">OCTOBER</option>
              <option value="NOVEMBER">NOVEMBER</option>
              <option value="DECEMBER">DECEMBER</option>

      </select>

      </FormGroup>      
      <FormGroup>
      <Label >Price</Label>
      <Input type="number" id="amount" name="amount" required placeholder="Month expense amount" onChange={this.onChange}/>
      </FormGroup>
      <div className="d-flex justify-content-center mt-3 login_container">
      <Button type="submit" className="btn btn-primary">Submit</Button>      
      </div>      
      </Form>
      </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
        <div className="ms-Grid-row">            
                <h1>Financials</h1>           
          </div>
          <div className="ms-Grid-row">
            <FinancialCharts />
          </div>
         
          
        </div>
      </div>
    </div>
);
}

}

export default Financials;
// addAnalyticData