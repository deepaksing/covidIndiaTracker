import React from 'react';
import './Table.css';
import StateList from './StateList'; 

const Table = ({data}) => {
    return (
     <div className="container">
         <div className="row">
             <div className="col-xs-12">
                 <table className="table tx">
                     <thead>
                         <tr>
                             <th>State/UT</th>
                             <th>Confirmed</th>
                             <th>Active</th>
                             <th>Recovered</th>
                             <th>Deaths</th>
                         </tr>
                     </thead>
                     {data && <StateList data = {data}/>}
                 </table>
             </div>
         </div>
     </div>
)
}

export default Table;