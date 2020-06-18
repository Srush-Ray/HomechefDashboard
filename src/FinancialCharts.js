import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import { CSVLink } from "react-csv";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


export default class AnalyticsCharts extends Component {

constructor(props){
    super(props);
    this.state={
        status: "true",
        incomeExpense : [
            
        ],
        
        profitloss : [
           
        ],
       
        chartData1:{
            labels:[],
            datasets:[{
                label:'income',
                data:[ ],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)'
                    
                ]
            },{
                label:'expense',
                data:[],
                backgroundColor: [
                    
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)'
                    
                ]
            }]
        },
        chartData2:{
            labels:[],
            datasets:[{
                label:'Profit',
                data:[],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)'
                    
                ]
            },{
                label:'Loss',
                data:[],
                backgroundColor: [
                    
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)',
                    'rgba(54,152,235,0.6)'
                    
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
        axios.get('http://localhost:5000/homechef/financial', {
            headers: {
                'auth-token': localStorage.usertoken
            }}).then(res=>{
                let array=res.data.income;
                let arrayExpense=res.data.expense;
                let data,pldata;
                let income=[],months=[],incomes=[],expense=[];
                let profits=[],loss=[],pl=[];
                for (let index = 0; index < array.length; index++) {
                    console.log(array[index][0])
                    for (let index1 = 0; index1 < arrayExpense.length; index1++) {
                        if(array[index][0].month==arrayExpense[index1][0].month){
                            data ={
                                monthN:array[index][0].month,
                                incomeN:array[index][0].amount,
                                expenseN:arrayExpense[index1][0].amount
                            }
                            expense.push(arrayExpense[index1][0].amount)           
                            months.push(array[index][0].month)
                            incomes.push(array[index][0].amount)
                            if(data.expenseN>data.incomeN){
                                loss.push(data.expenseN-data.incomeN);
                                profits.push(0);
                                pldata={
                                   month:data.monthN,
                                   profilt:0,
                                   loss: data.expenseN-data.incomeN,
                                }
                                pl.push(pldata);
                            }else{
                                    loss.push(0);
                                    profits.push(data.incomeN-data.expenseN);
                                    pldata={
                                       month:data.monthN,
                                       profilt:data.incomeN-data.expenseN,
                                       loss: 0,
                                    }
                                    pl.push(pldata);
                            }
                            income.push(data);  
                        }
                     }   
                }
               console.log(profits)
               console.log(loss)

                this.setState( {
                    chartData1:{
                    labels:months,
                    datasets:[{
                        label:'income',
                        data:incomes,
                        backgroundColor: [
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)'
                            
                        ]
                    },{
                        label:'expense',
                        data:expense,
                        backgroundColor: [
                            
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)'
                            
                        ]
                    }]
                }
            });
            this.setState({
                chartData2:{
                    labels:months,
                    datasets:[{
                        label:'Profit',
                        data:profits,
                        backgroundColor: [
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)'
                            
                        ]
                    },{
                        label:'Loss',
                        data:loss,
                        backgroundColor: [
                            
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)',
                            'rgba(54,152,235,0.6)'
                            
                        ]
                    }]
                }
            });
            this.setState({profitloss:pl});

                this.setState({incomeExpense:income});
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
      data={this.state.chartData1}
      options={{
          responsive:true,
        title:{
            display:this.props.displayTitle,
            text:'Income and Expense',
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

    <Line
          data={this.state.chartData2}
          options={{
            responsive:true,
            title:{
                display:this.props.displayTitle,
                text:'Profit and Loss',
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
    tooltips:{
        enabled: true
    }}}
        />
        <div>           
        <CSVLink data={this.state.incomeExpense}
        filename={"IncomeExpense.csv"}
        className="btn btn-primary"
        style={{margin:'1%'}}
        >
        Income and expense excel download
        </CSVLink>
        <CSVLink data={this.state.profitloss}
        filename={"ProfitLoss.csv"}
        className="btn btn-primary"
        >
        Profit Loss Excel Document
        </CSVLink>
        </div>
        <ToastContainer />
       </div>
    );
  }
}
