import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { CSVLink } from "react-csv";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


export default class AnalyticsCharts extends Component {

constructor(props){
    super(props);
    this.state={
        salesperdish : [
            {
                dish:'Pavbhaji',
                amount:20
            }
        ],
        chartData:{
            labels:[],
            datasets:[{
                label:'sales',
                data:[],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(255,159,100,0.6)',
                    'rgba(97,25,8,0.6)'
                ]
            }]
        }
    }

}
componentDidMount() {
    
    axios.get('http://localhost:5000/homechef/profile', {
      headers: {
        'auth-token': localStorage.usertoken
      }})
   .then(res => {
       console.log(res)
       if(res.data.status==true){
        axios.get('http://localhost:5000/homechef/analysis', {
            headers: {
                'auth-token': localStorage.usertoken
            }}).then(res=>{
                let array=res.data.data.sales;
                let data;
                let sales=[],dish=[],amounts=[];
                for (let index = 0; index < array.length; index++) {
                   console.log(array[index][0].dish);
                   console.log(array[index][0].dish);
                    data ={
                            dish:array[index][0].dish,
                            amount:array[index][0].amount
                    }
                    dish.push(array[index][0].dish)
                    amounts.push(array[index][0].amount)
                    sales.push(data);
                }
                console.log(dish);
                console.log(amounts);

                this.setState( {
                    chartData:{
                        labels:dish,
                        datasets:[{
                            label:'sales',
                            data:amounts,
                            backgroundColor: [
                                'rgba(255,99,132,0.6)',
                                'rgba(54,152,235,0.6)',
                                'rgba(75,192,192,0.6)',
                                'rgba(255,159,100,0.6)',
                                'rgba(97,25,8,0.6)'
                            ]
                        }]
                    }
            });

                this.setState({salesperdish:sales});
                console.log(this.state.chartData1.datasets.data);
            }).catch((err)=>{
                toast(err, {position: toast.POSITION.TOP_CENTER});
            })
      }
      else if(res.data.status==false){
          // alert(res.data.error)
          toast(res.data.error, {position: toast.POSITION.TOP_CENTER});
      } 
   }
   )
   .catch(error => {
      // alert("login first");
     toast("Login First!!", {position: toast.POSITION.TOP_CENTER});
    })
  }

static defaultProps={
    displayTitle:true,
    displayLegend: true,
    legendPosition: 'right'
}

  render() {
    return ( 
      <div>
        <Bar
          data={this.state.chartData}
          options={{
              responsive:true,
            title:{
                display:this.props.displayTitle,
                text:'Sales per Dish',
                fontSize:20
          },
        legend:{
            display:true,
            position: 'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },    
    tooltips:{
        enabled: true
    }}}
        />
        <div>           
        <CSVLink data={this.state.salesperdish}
        filename={"SalesPerDish.csv"}
        className="btn btn-primary"
        >
       Sales Per Dish
        </CSVLink>
        </div>
      </div>
    );
  }
}
