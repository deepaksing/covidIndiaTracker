import React from 'react';
import State from './State';




const StateList = ({data}) => {

    const items = data.map((state, idx) => {
        if(state.state !== 'Total') {
        return <State name= {state.state} confirmed = {state.confirmed} confirmedChanged = {state.deltaconfirmed} active = {state.active} activeChanged = {state.deltaconfirmed -(state.deltarecovered + state.deltadeaths)} recovered = {state.recovered} recoveredChanged = {state.deltarecovered} death = {state.deaths} deathChanged = {state.deltadeaths}/>   
    }
    })
    return (
        <tbody>
            {items}
        </tbody>
    )
}

export default StateList;