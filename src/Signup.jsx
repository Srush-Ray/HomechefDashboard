import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import { register } from './components/login/UserFunctions';

import logi from './login.svg'

import Signin from './Signin'

import back1 from './UI/food.jpg'

import './Signup.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
          username:'',
          phone:'',
          email: '',
          password:'',
          name:'',
          address:'',
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
          phone: this.state.phone,
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          address: this.state.address,
          status: this.state.status,
        }
    
        register(user).then(res => { if(res) {
            this.props.history.push('/Signin')
        }
      }) 

      }
    
    render() {
    
    return (
    
    <div style={{backgroundImage:`url(${back1})`}}>
    
    <div className="container">
    
    <div className="row">

    <div className="col-md-4 login-sec">
    
    <h2 className="text-center">Signup</h2>
    
    <Form onSubmit={this.onSubmit}>
    
    <FormGroup>
    
    <Label for="exampleName">User Name</Label>
    
    <Input type="text" name="username" value={this.state.username} onChange={this.onChange} required placeholder="Enter username" />
    
    </FormGroup>

    <FormGroup>
    
    <Label for="exampleName">Name</Label>
    
    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} required placeholder="Enter name" />
    
    </FormGroup>
    
    <FormGroup>
    
    <Label>Mobile No.</Label>
    
    <Input type="text" name="phone" value={this.state.phone} onChange={this.onChange} required placeholder="Enter Mobile No." />
    
    </FormGroup>
    
    <FormGroup>
    
    <Label>Email</Label>
    
    <Input type="email" name="email" value={this.state.email} onChange={this.onChange} required placeholder="Enter email" />
    
    </FormGroup>
    
    <FormGroup>
    
    <Label >Password</Label>
    
    <Input type="password" name="password" value={this.state.password} onChange={this.onChange} required placeholder="Enter password" />
    
    </FormGroup>

    <FormGroup>
    
    <Label >Address</Label>
    
    <Input type="text" name="address"  value={this.state.address} onChange={this.onChange} placeholder="Address" />
    
    </FormGroup>

    <FormGroup>
    
    <Label >Status</Label>
    
    {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="e.g. customer/homechef/serviceboy" />
     */}
    <br />
    <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
            <option value="customer">customer</option>
            <option value="homechef">homechef</option>
            <option value="delivery boy">delivary boy</option>
    </select>
    </FormGroup>
    
    <div className="d-flex justify-content-center mt-3 login_container">
    
    <Button type="submit" className="btn btn-login">Register</Button>
    
    </div>
    
    <div className="mt-4">
    
    <div className="d-flex justify-content-center links">
    
    <Link href="/Signin" to="/Signin" className="linka">Already Account Login </Link>
    
    </div>

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