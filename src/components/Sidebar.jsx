import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import * as ServFunc from './Service/SpecialFunc';
import M from 'materialize-css';
import Sidefone from '@assets/sidebar_fone.jpg';
import Logo from '@assets/icon.png';

function Sidebar(props)
{
    useEffect(() => {
        M.Sidenav.init(document.querySelector('.sidenav'));
    }, [])

    async function sendAllMessage()
    {
        let messages = ServFunc.parseJsonArr(ServFunc.getFromLocal());
        if(messages.length != 0) {
            let s = props.succ;
            let f = props.fail;
            for(let i = 0; i < messages.length; i++) {
                try {
                   await ServFunc.sendMsg(messages[i]);
                   console.log();
                   props.setMethSucc(++s);
                   props.setMethFail(--f);
                   messages.splice(i, 1);
                   --i;
                   props.msgForUser(1, '');
                   props.setSending(false);
                }
                    catch(error) {
                        props.msgForUser(2, error.message);
                        props.setSending(false);
                    } 
            }
            ServFunc.saveLocalStorage(messages);
        }
            else {
                props.msgForUser(6, error.message);
            }
    }

    function deleteAllMessage()
    {
        let messages = ServFunc.parseJsonArr(ServFunc.getFromLocal());
        if(messages.length != 0) {
            ServFunc.deleteFromLocal();
            props.setMethFail(0);
            props.msgForUser(5, '');
        }
            else {
                props.msgForUser(6, '');
            }
    }

    return(
        <div>
            <ul id="slide-out" className="sidenav"> 
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src = { Sidefone } />
                        </div>
                        <a href="#"><img className="large circle" src = { Logo } /></a>
                        <a href="#"><span className="white-text name"><i className="material-icons left">email</i>magemailer</span></a>
                        <a href="#"><span className="white-text email">MAGE 2020 ©</span></a>
                    </div>
                </li>         
                <li>
                    <table>
                        <tbody>
                            <tr>
                                <td><span className="blue-text name valign-wrapper sidecell"><i className="material-icons prefix specialicon">sms</i>{ props.langBlock.msgTitle }</span></td> 
                            </tr>
                            <tr>
                                <td><span className="green-text name valign-wrapper sidecell"><i className="material-icons prefix specialicon">sentiment_very_satisfied</i>{ props.langBlock.msgAccess } {props.succ}</span></td>    
                            </tr>
                            <tr>
                                <td><span className="red-text name valign-wrapper sidecell"><i className="material-icons prefix specialicon">sentiment_very_dissatisfied</i>{ props.langBlock.msgFail } {props.fail}</span></td>
                            </tr>
                            <tr>
                                <td className="center-align valign-wrapper"><button onClick = { sendAllMessage } className="btn blue darken-1 sidebtn"><i className="material-icons left">autorenew</i>{ props.langBlock.sendBtn }</button></td>   
                            </tr>
                            <tr>
                                <td className="center-align valign-wrapper"><button onClick = { deleteAllMessage } className="btn blue darken-1 sidebtn"><i className="material-icons left">delete</i>{ props.langBlock.clearBtn }</button></td>
                            </tr>
                        </tbody>
                    </table>          
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;