import React from 'react';

export default function OptionIconPart(props)
{
    return(
        <React.Fragment>
            <option value = { props.item.value } data-icon = { require('@assets/' + props.item.icon).default } className="circle" >{ props.item.value }</option>
        </React.Fragment>
    );
}