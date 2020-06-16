import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Addmenu extends Component {
  // state={
  //   isLoading: true,
  //   dataNew:{
  //       username:"Srushti",
  //       address:"pune",
  //       email:"s@gmail.com",
  //       phonenumber:"7896541230",
  //   },
// };

  constructor(){
    super();
    this.state = {
      items: [],
      itemId:'',
      catogaryName:'Indian',
      subcatogaryName:'North',
      description:'',
      price:''
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
         axios.put('http://localhost:5000/homechef/menu/additems/',
         {
            "itemid": this.state.itemid,
            "catogaryName": this.state.catogaryName,
            "subcatogaryName": this.state.subcatogaryName,
            "description": this.state.description,
            "price": this.state.price 
         },
         {
             headers: {
               'auth-token': localStorage.usertoken
             }},
             )
             .then(res => {
                 if(res.data.status==true){
                    // alert(res.data.data)
                    toast(res.data.data, {position: toast.POSITION.TOP_CENTER});
                 }
                 else{
                    //  alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER});
                 }
             })
             .catch(err => {
                 console.log("err")
             })
  }

  

  render(){
    return(
      <div style={{marginRight:'20%', marginLeft:'20%', marginTop:'3%'}}>
          
            <b> Menu Cooked :</b> <br/>

              <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
 
              <FormGroup>
      
              <Label >Item</Label>
              
              <Input type="text" name="itemId" value={this.state.itemId} onChange={this.onChange} required placeholder="item name" />
              
              </FormGroup>
            
              <FormGroup>
              
              <Label >Category</Label>
              
              <br />
              <select name="catogaryName" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                      <option value="Indian">Indian</option>
                      <option value="Chinese">chinese</option>
                      <option value="Italian">Italian</option>
                      <option value="Mexican">Mexican</option>
                      <option value="Thai">Thai</option>
              </select>

              </FormGroup>

              <FormGroup>
              
              <Label >Sub-Category</Label>
              
              {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
              <br />
              <select name="subcatogaryName" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
              </select>

              </FormGroup>

              <FormGroup>
    
              <Label >Description</Label>
              
              <Input type="text" name="description" value={this.state.description} onChange={this.onChange} required placeholder="description" />
              
              </FormGroup>
              
              <FormGroup>
    
              <Label >Price</Label>
              
              <Input type="text" name="price" value={this.state.price} onChange={this.onChange} required placeholder="Item price" />
              
              </FormGroup>

              <div className="d-flex justify-content-center mt-3 login_container">
              
              <Button type="submit" className="btn btn-primary">Submit</Button>
              
              </div>
              
              </Form>
          </div>
    
    );
  }
}

export default Addmenu
