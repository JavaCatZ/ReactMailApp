import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function DatePart(props)
{
    const clsName = `material-icons prefix fa fa-${ props.el.iconName } fa-lg`;

    useEffect(() => {
        M.Datepicker.init(document.querySelectorAll('.'+ props.el.clsName), {
            firstDay: true, 
            format: 'dd.mm.yyyy',
            i18n: {
                cancel: props.pickerSet.cancelBtn,   
                clear: props.pickerSet.clearBtn,
                months: props.pickerSet.monthArr,
                monthsShort: props.pickerSet.monthArrS,
                weekdays: props.pickerSet.weekDays,
                weekdaysShort: props.pickerSet.weekDaysS,
                weekdaysAbbrev: props.pickerSet.weekDaysAbbr
            },
            onSelect: (() => {
                let datepicker = document.querySelector('.' + props.el.clsName);
                props.method( { type: props.el.type, date: M.Datepicker.getInstance(datepicker).toString() } )               
            })
        });
    }, [props.lang]);

    return(
        <React.Fragment>
            <div className="divider"></div>
                <div className="section">
                    <i className = { clsName }></i>
                    <label className="blue-text">{ props.el.title }</label>
                    <input className = { props.el.clsName } id = { props.el.elId } type="text" required/>
                    <small>{ props.elSmall }</small>
                </div>
        </React.Fragment>
    );
}