import React from 'react';
import { initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';




const cards = [
  {
    title: 'Current Balance',
    amount: '$21 837',
    icon: 'Money',
    percentage: '2.3',
  },
  {
    title: 'Current Expanses',
    amount: '$10 927',
    icon: 'PaymentCard',
    percentage: '0.3'
  },
  {
    title: 'Current Income',
    amount: '$15 093',
    icon: 'Savings',
    percentage: '1.3'
  }
]
// s-Grid-col ms-sm3 ms-xl3
const ExpenseCards = () => {
  initializeIcons();
  return (
    <div className="container">
    <div className="row justify-content-center">{
      cards.map((card)=>(
        <div class="card" style={{width: "18re",margin:"2%", borderTop: '5px solid #0078d4'}}>
        <div class="card-body">
            <h5 class="card-title"><b>{card.title}</b></h5>
            <p class="card-text"> {card.amount}</p>
            <p style={{color:'blue'}}><b> {card.percentage} %</b></p>
          </div>
          </div>
        
      ))}
      </div>
      </div>
        );
};
    
export default ExpenseCards;