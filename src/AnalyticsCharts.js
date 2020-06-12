import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default class AnalyticsCharts extends Component {

constructor(props){
    super(props);
    this.state={
        chartData:{
            labels:['Dish 1', 'Dish 2', 'Dish 3', 'Dish 4', 'Dish 5'],
            datasets:[{
                label:'sales',
                data:[50,70,25,47,90],
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
    tooltips:{
        enabled: true
    }}}
        />


<Pie
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
    tooltips:{
        enabled: true
    }}}
        />

<Line
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
    tooltips:{
        enabled: true
    }}}
        />
      </div>
    );
  }
}
