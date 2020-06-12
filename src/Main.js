import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo1 from './UI/logo1.png'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Maps from './Maps'
import  './Main.css';
import Profile from './Profile'
import ActiveOrders from './ActiveOrders'
import IncomeOrders from './IncomeOrders'
import PastOrders from './PastOrders'
import Financials from './Financials';
import Analytics from './Analytics';

class Main extends Component{

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
    } 

    render(){

        return (  
            
            <div>
                <Router>
                <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark" style={{ marginTop:'8px',marginRight:'10px',marginLeft:'10px', border:'solid',borderRadius:'10px',  backgroundColor:'#a7a7a7'}}>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:"#000000"}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <a class="navbar-brand" href="#"><img className='logo' src={logo1} alt='logo' style={{width:'110px', padding:'1px', borderRadius:'10px'}}/></a>
                        </Nav>
                        
                        <Nav>
                        <ul className="navbar-nav mr-auto">
                            <li><Link exact to={'/Maps'} className="nav-link text-dark"><b>Location</b></Link></li>
                            <li><Link exact to={'/'} onClick={this.logOut.bind(this)} className="nav-link text-dark"><b>Logout</b></Link></li>
                            <li><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></li>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/Maps' component={Maps} />
                    <Route path='/' />
                    <Route path='/' />
                </Switch>

                
                <hr style={{ height:'5px',borderColor:'black' }}/>

               
                <Tabs>
                    <TabList style={{marginTop:'10px', fontFamily:'serif',color:'grey', height:'auto',width:'auto'}}>
                    <b>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Profile</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Active Orders</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Incoming Orders</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Past Orders</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Financials</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Analytics</Tab>
                    </b>
                    </TabList>

                    
                
                    <TabPanel>
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'15%',marginRight:'15%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}> 
                    <Profile />
                    </div>
                    </TabPanel>

                    <TabPanel>
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                           <ActiveOrders />
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                        <IncomeOrders />
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <PastOrders />
                   </div>
                    </TabPanel>

                    <TabPanel>
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <Financials/>
                    </div>
                    </TabPanel>

                    <TabPanel>
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <Analytics/>
                    </div>
                    </TabPanel>

                    <TabPanel>
                    </TabPanel>
                </Tabs>
                
 
                
                </Router>      
  
            </div>
            
        )
    }
}



export default Main;