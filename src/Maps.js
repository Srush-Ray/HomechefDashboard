import React, { Component } from 'react';

 

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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  render() {
    
    return (
      <div style={{border:'solid', marginTop:'1%', marginBottom:'1%', marginLeft:'35%', marginRight:'35%', borderRadius:'10px'}}>
        <p><b>Co-ordinates</b></p>
        <button onClick={this.getLocation}>Set location</button>
        <p>Latitute : {this.state.latitude}</p>
        <p>Longitude : {this.state.longitude}</p>
      </div>

    )
  } 
}


export default Maps;