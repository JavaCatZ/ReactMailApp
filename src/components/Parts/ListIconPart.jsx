import React, { useEffect } from 'react';
import * as $ from 'jquery';
import M from 'materialize-css';
import OptionIconPart from './OptionIconPart';

export default function ListIconPart(props)
{
    const clsName = `material-icons prefix fa fa-${ props.el.iconName } fa-lg`;

    useEffect(() => {
        M.FormSelect.init(document.querySelector('.' + props.el.clsName));

        $('.' + props.el.clsName).on('change', () =>
        {
            let select = document.querySelector('.' + props.el.clsName);
            let item = M.FormSelect.getInstance(select);
            props.method( { type: props.el.type, date: item.input.value } );
        });
    }, [])

    return( 
        <React.Fragment>
            <div className="divider special"></div>
                <div className="input-field">
                <i className = { clsName }></i>
                    <select className = { props.el.clsName } >
                        <option value = "" defaultValue>{ props.el.hint }</option>
                        { props.mass.map((part) => <OptionIconPart key = { part.key } item = { part } />) }
                    </select> 
                    <label className="blue-text">{ props.el.title }</label>
                    <small>{ props.elSmall }</small>
                </div>
        </React.Fragment>
    );
}