import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import FinancialCharts from './FinancialCharts';


const Financials= () =>{
return(
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
        <div className="ms-Grid-row">            
                <h1>Financials</h1>           
          </div>
          <div className="ms-Grid-row">
            <FinancialCharts />
          </div>
         
          
        </div>
      </div>
    </div>
);


}

export default Financials;
