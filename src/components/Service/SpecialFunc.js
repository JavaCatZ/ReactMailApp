import axios from 'axios';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import date from 'date-and-time';
import { URL_SEND } from './SpecialConst';

export function getTimeOrDate(par) {
    return (par === 'time') ? date.format(new Date(), 'HH:mm:ss A [GMT]Z') : date.format(new Date(), 'DD-MMM-YYYY');
}

export function addToLocal(message) {
    try {
        var messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    }
        catch(error) {
            return new Error(error);
        }
}

export function saveLocalStorage(messages) {
    localStorage.clear();
    if(messages.length != 0)
        localStorage.setItem('messages', JSON.stringify(messages));
}

export function getFromLocal() {
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    return messages;
}

export function deleteFromLocal() {
    localStorage.clear();
}
 
export function entryAnalys(setMeth) {
    let allFailMsg = getFromLocal();
    setMeth(allFailMsg.length);
}

function _validStr(str) {	
    const strC = new String(str);
    let pattern = /^-?[0-9]+$/;
    if(strC.search(pattern) == -1) 
        return false;
            else
        return true;
}

function _validNum(val) {	
    const num = Number.parseInt(val, 10);
    let answer = (num < 0) ? true : false;
    return answer;
}

export function validCoords(curState, msg, method, type) {	
    if(curState === '') {
        method({ type: type, date: msg });
        return false;
    }
        else {
            const str = new String(curState);
            let pattern = /^[-+]?[0-9]{3}\°[0-9]{2}\'[0-9]{2}\"/;
            if(str.search(pattern) == -1) {
                method({ type: type, date: msg });
                return false;
            }
                else {
                    method({ type: type, date: '' });
                    return true;
                }
        }
}

export function fullCheck(curState, msgS, msgB, msgM, method, type) {
    if(curState === '') {
        method({ type: type, date: msgS });
        return false;
    }
    else if(_validStr(curState)) {
                if(_validNum(curState)) {
                    method({ type: type, date: msgB });
                    return false;
                }
                    else {   
                        method({ type: type, date: '' });
                        return true;
                    }
            }
                else {
                    method({ type: type, date: msgM });
                    return false;
                }
}

export function baseCheck(curState, msg, method, type) {
    if(curState.length === 0) {
        method({ type: type, date: msg });
        return false;
    }
        else { 
            method({ type: type, date: '' });
            return true;
        } 
}

export function checkSelect(curState, msg, method, type) {
    if(typeof(curState[1]) !== "undefined")
    {
        if(curState[1] === 0) {
            console.log('yes')
            method({ type: type, date: msg });
            return false;
        }
            else { 
                method({ type: type, date: '' });
                return true;
            }
    } 
}

export function messageFormer(state) {
    const message = {
        vessel : state.vessel,
        time : getTimeOrDate('time'),
        date : getTimeOrDate('date'),
        lat : state.lat,
        longi : state.longi,
        course : state.course,
        speed : state.speed,
        crew : state.crew,
        fuel : state.fuel,
        oil : state.oil,
        water : state.water,
        prev_bunker : state.prev_bunker,
        bunker : state.bunker,
        temp : state.temp,
        wind : state.wind,
        wind_direct : state.wind_direct,
        wave : state.wave,
        iceset : state.iceset,
        project : state.project,
        datestart : state.dateStart,
        dateend : state.dateEnd,
        vstatus :   state.vstatus,
        comment : state.comment
    };

    return message;
}

export async function sendMsg(message) { 
    try {
        let answ = await axios.post(URL_SEND, { message }, { headers: { "content-type" : "application/json" } });
        if(answ.status !== 200)
        {
            throw new Error(error);
        }
        return answ.data.status;
    }
        catch(error) {
             throw Error(error);
        }
}

export function parseJsonMass(mass)
{
    let arr = [];
    for(let i = 0; i < mass.length; i++)
    {
        arr[i] = mass[i];
    }
    return arr;
}
  
export function parseJsonArr(mass)
{
    let arr = new Array();
    for(let i = 0; i < mass.length; i++)
    {
        arr.push(mass[i]);
    }
    return arr;
}