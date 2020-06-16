import React, { Component } from 'react';
import axios from 'axios'
import back1 from './UI/food.jpg'
 

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  handleClick() {
    console.log(localStorage.latitude);
    axios.post('http://localhost:5000/homechef/updatelatlong',
          {
            longi: localStorage.longitude,
            lat: localStorage.latitude
          }
          ,{
          headers: {
            'auth-token': localStorage.usertoken
          }},
          
          )
        .then(res => {
            alert('Location updated!')
        })
        .catch(err => {
            console.log("err")
        })
  }

  getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates (position) {
     this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }

  

  render() {
    localStorage.setItem("latitude",this.state.latitude)
    localStorage.setItem("longitude",this.state.longitude)
    return (
      <div style={{backgroundImage:`url(${back1})`, paddingTop:'1%', paddingBottom:'1%'}}>
      <div style={{border:'solid', marginTop:'1%', marginBottom:'1%', marginLeft:'35%', marginRight:'35%', borderRadius:'10px',backgroundColor:'white'}}>
        <p><b>Co-ordinates</b></p>
        <button  onClick={this.getLocation}>Get location</button>
        <p name="latitude" >Latitute : {this.state.latitude}</p>
        <p name="longitude" >Longitude : {this.state.longitude}</p>
        <div style={{marginBottom:'3%'}}>
        <button  type="button" onClick={this.handleClick}>Set Location</button>
        </div>
      </div>
      </div>

    )
  } 
}


export default Maps;