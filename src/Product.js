import React, {Component} from 'react' 
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

class Product extends Component {
    
    constructor(){
        super();
        this.state = {
            orders: [],
        }
    }


    componentDidMount() {   
        
        axios.get(`http://localhost:5000/homechef/order/${localStorage.id}`, {
            headers: {
              'auth-token': localStorage.usertoken
            }})
         .then(res => {
             if(res.data.status==true){
                this.setState({orders: res.data.data.product})
                
                }
                else if(res.data.status==false){
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER});
                } 
         })
    }
    
    renderTableData() {
        return this.state.orders.map((order, index) => {
           const {itemid, quantity, totalprice,detailsifany } = order //destructuring
           return (
             <tr key={itemid}>
             <td>{itemid}</td>
             <td>{quantity}</td>
             <td>{totalprice}</td>
             <td>{detailsifany}</td>
            </tr>
           )
        })
     }
      render(){
        return(
          <div style={{alignItems:'left'}}>
          <div>
            </div>
        
            <div className="table-responsive-md" >
            <table className="table table-hover">
            <thead className="">
              <tr>
                <th scope="col">ItemId</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
            {this.renderTableData()}
            </tbody>
          </table>
            </div>
            </div>
        );
      }
}
    



export default Product;