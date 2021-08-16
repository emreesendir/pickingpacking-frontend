import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { get } from '../../../global/Services'

const Div = styled.div`
    border-style: solid;
    width: 12em;
    height: 8em;
    margin: 1em;

    .p {
        margin: 0px;
    }

`;

const Counter = ( { title, endpoint } ) => {
    const [value, setValue] = useState(0)

    const refresh = (endpoint) => {
        get(endpoint).then(data => {
            setValue(data);
            setTimeout(refresh, 5000);
        })
    }

    useEffect(() => {refresh(endpoint)}, [])
    

    return (
        <Div>
            <p>{title}</p>
            <p>{value}</p>
        </Div>
    )
}

export default Counter