import React, { useState, useEffect, useLayoutEffect } from 'react';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import OptionPart from './OptionPart';

export default function ListPart(props)
{
    const clsName = `material-icons prefix fa fa-${ props.el.iconName } fa-lg`;

    function onChangeItem() {
            let select = document.querySelector('.' + props.el.clsName);
            let item = M.FormSelect.getInstance(select);

            console.log('item: ' + select.selectedIndex);
            if(props.type === 'object')
            {
                props.mass.map((value) => {
                    if(item.input.value === value[0])
                    {
                        props.method( { type: 'DATE_START_UPDATE', date: value[1] } );
                        props.method( { type: 'DATE_END_UPDATE', date: value[2] } );
                    }
                });
            }
            console.log([item.input.value, select.selectedIndex]);
            props.method( { type: props.el.type, date: [item.input.value, select.selectedIndex] } );
    }

    useEffect(() => {
        console.log('change')
        M.FormSelect.init(document.querySelector('.' + props.el.clsName));
        $('.' + props.el.clsName).on('change', onChangeItem);
        return () => { 
                $('.' + props.el.clsName).off('change', onChangeItem);
            }
    }, [props.lang]);

    return( 
        <React.Fragment>
            <div className="divider special"></div>
                <div className="input-field" id = { props.el.idName }>
                <i className = { clsName }></i>
                    <select className = { props.el.clsName } >
                        <option value = "" defaultValue>{ props.el.hint }</option>
                        { (props.type === 'array') ? props.mass.map((part) => <OptionPart key = { part } item = { part } />) : props.mass.map((part) => <OptionPart key = { part[0] } item = { part[0] } />) }
                    </select> 
                    <label className="blue-text">{ props.el.title }</label>
                    <small>{ props.elSmall[0] }</small>
                </div>
        </React.Fragment>
    );
}