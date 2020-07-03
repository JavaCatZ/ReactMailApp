import React from 'react';

export default function OptionPart(props)
{
    return(
        <React.Fragment>
            <option value = { props.item } >{ props.item }</option>
        </React.Fragment>
    )
}