import React, { useState, useEffect, useReducer } from 'react';
import 'jquery-mask-plugin';
import 'materialize-css/dist/css/materialize.min.css';
import '@material/react-material-icon/dist/material-icon.css';
import '../styles/styles.css';
import * as SC from './Service/SpecialConst';
import * as SF from './Service/SpecialFunc';
import * as MailReducer from './Reducers/MailReducer';
import InputPart from './Parts/InputPart';
import ListPart from './Parts/ListPart';
import ListIconPart from './Parts/ListIconPart';
import DatePart from './Parts/DatePart';
import Spinner from './Spinner.jsx';
import Sidebar from './Sidebar.jsx';

function CustomCard()
{
    let [msgState, msgDispatch] = useReducer(MailReducer.msgReducer, MailReducer.initialMsgState);
    let [hintState, hintDispatch] = useReducer(MailReducer.hintReducer, MailReducer.initialHintStateRU);
    let [sending, setSending] = useState(false);
    let [blocked, setBlocked] = useState(true);
    let failedval = 0;
    let [msucc, setMSucc] = useState(0);
    let [mfail, setMFail] = useState(failedval);
    let ansArr = new Array();
    let [lang, setLang] = useState('ru');
    let [prevLang, setPrev] = useState('ru');

    useEffect(() => {
        SF.entryAnalys(setMFail);      
    }, []);

    useEffect(() => {
        ansArr = [];
        if(prevLang === lang) {
            ansArr.push(SF.checkSelect(msgState.vessel, SC.selectBlocks.VESSELS.hint, hintDispatch, SC.selectBlocks.VESSELS.type_hint));
            ansArr.push(SF.checkSelect(msgState.iceset, SC.selectBlocks.ICESETTINGS.hint, hintDispatch, SC.selectBlocks.ICESETTINGS.type_hint));
            ansArr.push(SF.checkSelect(msgState.project, SC.selectBlocks.PROJECTS.hint, hintDispatch, SC.selectBlocks.PROJECTS.type_hint));
            ansArr.push(SF.checkSelect(msgState.vstatus, SC.selectBlocks.STATUSES.hint, hintDispatch, SC.selectBlocks.STATUSES.type_hint));
            ansArr.push(SF.validCoords(msgState.lat, SC.inputBlocks.LAT.msg_s, hintDispatch, SC.inputBlocks.LAT.type_hint));
            ansArr.push(SF.validCoords(msgState.longi, SC.inputBlocks.LONGI.msg_s, hintDispatch, SC.inputBlocks.LONGI.type_hint));
            ansArr.push(SF.fullCheck(msgState.course, SC.inputBlocks.COURSE.msg_s, SC.inputBlocks.COURSE.msg_b, SC.inputBlocks.COURSE.msg_m, hintDispatch, SC.inputBlocks.COURSE.type_hint));
            ansArr.push(SF.fullCheck(msgState.speed, SC.inputBlocks.SPEED.msg_s, SC.inputBlocks.SPEED.msg_b, SC.inputBlocks.SPEED.msg_m, hintDispatch, SC.inputBlocks.SPEED.type_hint));
            ansArr.push(SF.fullCheck(msgState.crew, SC.inputBlocks.CREW.msg_s, SC.inputBlocks.CREW.msg_b, SC.inputBlocks.CREW.msg_m, hintDispatch, SC.inputBlocks.CREW.type_hint));
            ansArr.push(SF.fullCheck(msgState.fuel, SC.inputBlocks.FUEL.msg_s, SC.inputBlocks.FUEL.msg_b, SC.inputBlocks.FUEL.msg_m, hintDispatch, SC.inputBlocks.FUEL.type_hint));
            ansArr.push(SF.fullCheck(msgState.oil, SC.inputBlocks.OIL.msg_s, SC.inputBlocks.OIL.msg_b, SC.inputBlocks.OIL.msg_m, hintDispatch, SC.inputBlocks.OIL.type_hint));
            ansArr.push(SF.fullCheck(msgState.water, SC.inputBlocks.WATER.msg_s, SC.inputBlocks.WATER.msg_b, SC.inputBlocks.WATER.msg_m, hintDispatch, SC.inputBlocks.WATER.type_hint));
            ansArr.push(SF.fullCheck(msgState.temp, SC.inputBlocks.TEMP.msg_s, SC.inputBlocks.TEMP.msg_b, SC.inputBlocks.TEMP.msg_m, hintDispatch, SC.inputBlocks.TEMP.type_hint));
            ansArr.push(SF.fullCheck(msgState.wind, SC.inputBlocks.WIND.msg_s, SC.inputBlocks.WIND.msg_b, SC.inputBlocks.WIND.msg_m, hintDispatch, SC.inputBlocks.WIND.type_hint));
            ansArr.push(SF.fullCheck(msgState.wind_direct, SC.inputBlocks.WIND_DIRECT.msg_s, SC.inputBlocks.WIND_DIRECT.msg_b, SC.inputBlocks.WIND_DIRECT.msg_m, hintDispatch, SC.inputBlocks.WIND_DIRECT.type_hint));
            ansArr.push(SF.fullCheck(msgState.wave, SC.inputBlocks.WAVE.msg_s, SC.inputBlocks.WAVE.msg_b, SC.inputBlocks.WAVE.msg_m, hintDispatch, SC.inputBlocks.WAVE.type_hint));
            ansArr.push(SF.baseCheck(msgState.prev_bunker, SC.dateBlocks.PREV_BUNKER.msg_s, hintDispatch, SC.dateBlocks.PREV_BUNKER.type_hint));
            ansArr.push(SF.baseCheck(msgState.bunker, SC.dateBlocks.BUNKER.msg_s, hintDispatch, SC.dateBlocks.BUNKER.type_hint));
            ansArr.push(SF.baseCheck(msgState.comment, SC.inputBlocks.COMMENT.msg_s, hintDispatch, SC.inputBlocks.COMMENT.type_hint));
        }
            else {
                setPrev(lang);
            }

        let i = 0;
        ansArr.map((item) => {
            if(!item) 
                i++;
        });

        if(i != 0)
            setBlocked(true);
        else
            setBlocked(false);

    }, [msgState, msucc, mfail, sending]);

    function changeLang()
    {
        switch(lang)
        {
            case 'ru':
                SC.chgLang('en');
                hintDispatch( { type: 'CHECK_LANG_EN'} );
                msgDispatch( { type: 'RELOAD_MSG_STATE'} );
                setLang('en');
            break;

            case 'en':
                SC.chgLang('ru');
                hintDispatch( { type: 'CHECK_LANG_RU'} );
                msgDispatch( { type: 'RELOAD_MSG_STATE'} );
                setLang('ru');
            break;
        }
    }

    async function onSendMsg(e) 
    {
        e.preventDefault();
        setSending(true);
        const message = SF.messageFormer(msgState);
      /*  console.log(message);
        console.log('msgState');
        Object.entries(msgState).map((item) => console.log(item));
        console.log('hintState');
        Object.entries(hintState).map((item) => console.log(item));
*/
        try
        {
            let ans = await SF.sendMsg(message);
            SC.msgForUser(1, '');
            setMSucc(++msucc);
            setSending(false);
        }
            catch(error)
            {
                SC.msgForUser(2, error.message);
                try
                {
                    SF.addToLocal(message);
                    SC.msgForUser(3, '');
                }
                    catch(error)
                    {
                        SC.msgForUser(4, error.message);
                    }
                setMFail(++mfail);
                setSending(false);     
            }
    }

    let spinner = (sending === true) ? <Spinner /> : null;
    return( 
        <div className="container">
             <div className="row">
                <div className="col s3"></div>
                <div className="col s6">
                    <div className="card blue-grey lighten-5">
                        <div className="card-content blue-text">
                            <div className="row">
                                <div className="col s8">
                                    <span className="card-title"> { SC.mainForm.title } </span>
                                </div>
                                <div className="col s3">
                                    <a className="waves-effect waves-light btn-small blue lighten-1 right" onClick = { changeLang }><i className="material-icons left">language</i>{ SC.sideBar.langTitle }</a>
                                </div>
                                <div className="col s1">
                                    <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="small material-icons">notifications</i></a>
                                </div>
                            </div> 
                                <ListIconPart el = { SC.selectBlocks.VESSELS } mass = { SC.optionIconBlocks } elSmall = { hintState.smVessel } method = { msgDispatch }/>

                                <InputPart el = { SC.inputBlocks.LAT } elSmall = { hintState.smLat }  method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.LONGI } elSmall = { hintState.smLongi }  method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.COURSE } elSmall = { hintState.smCourse } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.SPEED } elSmall = { hintState.smSpeed } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.CREW } elSmall = { hintState.smCrew } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.FUEL } elSmall = { hintState.smFuel } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.OIL } elSmall = { hintState.smOil } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.WATER } elSmall = { hintState.smWater } method = { msgDispatch }/>

                                <DatePart el = { SC.dateBlocks.PREV_BUNKER } elSmall = { hintState.smPrevBunker } pickerSet = { SC.pickerSet } method = { msgDispatch } lang = { lang } />
                                <DatePart el = { SC.dateBlocks.BUNKER } elSmall = { hintState.smBunker } pickerSet = { SC.pickerSet } method = { msgDispatch } lang = { lang } />

                                <InputPart el = { SC.inputBlocks.TEMP } elSmall = { hintState.smTemp } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.WIND } elSmall = { hintState.smWind } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.WIND_DIRECT } elSmall = { hintState.smWindDirect } method = { msgDispatch }/>
                                <InputPart el = { SC.inputBlocks.WAVE } elSmall = { hintState.smWave } method = { msgDispatch }/>     

                                <ListPart el = { SC.selectBlocks.ICESETTINGS } mass = { SC.iceSettingArr } elSmall = { hintState.smIceSet } method = { msgDispatch } type = { SC.selectType[0] } lang = { lang } />
                                <ListPart el = { SC.selectBlocks.PROJECTS } mass = { SC.projectsArr } elSmall = { hintState.smProject } method = { msgDispatch } type = { SC.selectType[1] } lang = { lang } />
                                <ListPart el = { SC.selectBlocks.STATUSES } mass = { SC.statusArr } elSmall = { hintState.smStatus } method = { msgDispatch } type = { SC.selectType[0] } lang = { lang } />

                                <InputPart el = { SC.inputBlocks.COMMENT } elSmall = { hintState.smComment } method = { msgDispatch }/>  
                        </div>
                        <div className="card-action">    
                            <button onClick = { onSendMsg } className="btn blue darken-1" disabled = { blocked }><i className="material-icons left">email</i> { SC.mainForm.btnTitle }</button>{ spinner }
                        </div>
                    </div>       
                </div>
                <div className="col s3">
                  <Sidebar succ = { msucc } fail = { mfail } setMethSucc = { setMSucc } setMethFail = { setMFail } msgForUser = { SC.msgForUser } setSending = { setSending } langBlock = { SC.sideBar } />
                </div>
            </div>
        </div>        
    ); 
}

export default CustomCard;