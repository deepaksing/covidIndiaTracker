import React from 'react';
import './State.css';

import { ArrowUpOutlined} from '@ant-design/icons';

const State = (props) => {
   
    return (
            <tr>
                <td className="states">
                    <p className="increase">
                        <ArrowUpOutlined/>
                        {props.confirmedChanged}
                    </p>
                    {props.name}
                    
                    </td>
                <td className="confirmes">
                    {props.confirmed}
                </td>
                <td className="actives">
                    <p className="increase recovereds">
                        <ArrowUpOutlined/>
                        {props.activeChanged}
                    </p>
                    {props.active}
                </td>
                <td className="recovereds">
                    <p className="increase actives">
                        <ArrowUpOutlined/>
                        {props.recoveredChanged}
                    </p>
                    {props.recovered}
                </td>
                <td className="death">
                    <p className="increase confirmes">
                        <ArrowUpOutlined/>
                        {props.deathChanged}
                    </p>
                    {props.death}
                </td>
            </tr>
    )
}

export default State;