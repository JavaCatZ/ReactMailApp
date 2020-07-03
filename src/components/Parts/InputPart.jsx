import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as $ from 'jquery';

export default function InputPart(props)
{
    const clsName = `material-icons prefix fa fa-${ props.el.iconName } fa-lg`;

    useEffect(() => {
        if(!props.el.innerMeth)
        {
            $('#' + props.el.elId).mask("X000°00'00\"", 
            {
                translation:  {'X': { pattern: /\-/, fallback: '+', reverse: true}},
                onChange: (val) => {
                    props.method({ type: props.el.type, date: val });
                }
            });
        }
    }, [])

    return( 
        <React.Fragment>
            <div className="divider"></div>
            <div className="section">
                <div className="input-field">
                    <i className = { clsName }></i>
                    <input id = { props.el.elId } type="text" onChange = { ( props.el.innerMeth) ? (e) => props.method({ type : props.el.type, date: e.target.value}) : null } required/>
                    <label htmlFor = { props.el.elId }>{ props.el.elText }</label>
                    <small>{ props.elSmall }</small>
                </div>
            </div>
        </React.Fragment>
    );
}