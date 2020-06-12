import React, { Component } from "react";
import TagInput from './TagInput';
import TagInput1 from './TagInput1';
class Profile extends Component {
  state={
    isLoading: true,
    dataNew:{
        username:"Srushti",
        address:"pune",
        email:"s@gmail.com",
        phonenumber:"7896541230",
    },
};

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

  }

  editform() {
    var form = document.getElementById("form");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = !elements[i].readOnly;
    }
    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";
  }

  render(){
    return(
      <div>
      <div className="row no-gutters ">
          <div className="container text-left">
            <h4 className="mt-2"><b>My Profile</b></h4>
            <hr />
             {
              <form id="form" onSubmit={this.handleSubmit}>
                Click edit to fill in the details and update :
                <hr />
                <div className="container">
                  <div className="form-row my-2">
                    <div className="col-sm-6">
                      Username:
                      <input
                        readOnly
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder={this.state.dataNew.username}
                      />
                    </div>
                    <div className="col-sm-6">
                      Address:
                      <input
                        readOnly
                        type="text"
                        name="address"
                        id="address"
                        placeholder={this.state.dataNew.address}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row my-2">
                    <div className="col-sm-6">
                      Email:
                      <input
                        readOnly
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder={this.state.dataNew.email}
                      />
                    </div>
                    <div className="col-sm-6">
                      Phone Number:
                      <input
                      readOnly
                            maxLength="10"
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder={this.state.dataNew.phonenumber}
                            className="form-control"
                    />
                    </div>
                  </div>
                  <div className="form-row my-2">
                  
                  <div className='custom-control custom-switch'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='status'
                    readOnly
                  />
                  <label className='custom-control-label' htmlFor='status'>
                    Availabilty Status
                  </label>
                </div>

                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    id="editButton"
                    className="btn btn-secondary"
                    onClick={this.editform}
                  >
                    Edit
                  </button>
                  <button className="btn border-dark mx-2" type="reset">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Update Profile
                  </button>
                </div>
              </form>
             }
            <b> Menu Cooked :</b> <br/>
             Category :<TagInput />
             Subcategory :<TagInput1 />
          </div>
      </div>
    </div>
    );
  }
}

export default Profile
