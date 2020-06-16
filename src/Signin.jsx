import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';

import { Row,Col } from 'react-bootstrap';

import { login } from './components/login/UserFunctions';

import './Signup.css';

import axios from 'axios';

import back1 from './UI/food.jpg'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
          username:'',
          password:'',
          status:'customer',
    
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e){
        this.setState({[e.target.name]: e.target.value})
      }
    
      onSubmit(e){
        e.preventDefault()
    
        const user = {
          username: this.state.username,
          password: this.state.password,
          status: this.state.status,
        }
        console.log(user)
        login(user).then(res => {
          if(res) {
          this.props.history.push('/ActiveOrders')
          }
        })

      }
    
    render() {
    
    return (
    
    <div style={{backgroundImage:`url(${back1})`}}>
    
    <div className="container">
    
    <div className="row">

    <div className="col-md-4 login-sec">
    
    <h2 className="text-center">Login</h2>
    
    <Form onSubmit={this.onSubmit}>
    
    <FormGroup>
    
    <Label for="exampleName">User Name</Label>
    
    <Input type="text" name="username" value={this.state.username} onChange={this.onChange} required placeholder="Enter a name" />
    
    </FormGroup>
    
    <FormGroup>
    
    <Label >Password</Label>
    
    <Input type="password" name="password" value={this.state.password} onChange={this.onChange} required placeholder="Enter a password" />
    
    </FormGroup>

    <FormGroup>
    
    <Label >Status</Label>
    
     {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
    <br />
    <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
            <option value="customer">customer</option>
            <option value="homechef">homechef</option>
            <option value="homechef">delivery boy</option>
    </select>

    </FormGroup>
    
    <div className="d-flex justify-content-center mt-3 login_container">
    
    <Button type="submit" className="btn btn-login">Login</Button>
    
    </div>
    
    </Form>
    
    </div>

    {/* <div className="col-md-8 banner-sec"><img src={logi} alt='login image' style={{width:'80%', paddingTop:'20%',height:'60%', borderRadius:'10px' }}/></div> */}

    </div>

    </div>
    
    </div>
    
    
    
    
    )
    
    }
    
    }