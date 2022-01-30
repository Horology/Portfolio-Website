import React from 'react'
import {data} from './svgs/SVGIcons';

const Description = ({value}) => {


    return (
        <div className = {value? 'description-container': 'none' }>
            <h1>{value && data[value-1].description}</h1>
            <i>{value && data[value-1].icon}</i>
            <p>{value && data[value-1].notes} </p>
            
        </div>
    )
}

export default Description
