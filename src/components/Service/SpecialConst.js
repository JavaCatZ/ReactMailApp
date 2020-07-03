let T = require('@lang/ru.json');
let TS = require('@lang/en.json');
import { parseJsonMass, parseJsonArr } from './SpecialFunc';

export const URL_SEND = 'http://192.168.26.31:3030/data';

let msgSet = Object.create({
    type_1 : T.context.infoMessages.type_1,
    type_2 : T.context.infoMessages.type_2,
    type_3 : T.context.infoMessages.type_3,
    type_4 : T.context.infoMessages.type_4,
    type_5 : T.context.infoMessages.type_5,
    type_6 : T.context.infoMessages.type_6
});

export let inputBlocks = Object.create({
    LAT : {
        iconName : 'map-marked-alt',
        elId : 'input_lat',
        elText : T.context.inputText.lat.text,
        innerMeth : false, 
        type : 'LAT_UPDATE', 
        type_hint : 'SM_LAT_UPDATE',
        msg_s : T.context.inputText.lat.msg_small, 
    },
    LONGI : { 
        iconName : 'map-marked-alt', 
        elId : 'input_longi', 
        elText : T.context.inputText.longi.text, 
        innerMeth : false, 
        type : 'LONGI_UPDATE', 
        type_hint : 'SM_LONGI_UPDATE',
        msg_s : T.context.inputText.longi.msg_small,
    },
    COURSE : { 
        iconName : 'drafting-compass', 
        elId : 'input_course', 
        elText : T.context.inputText.course.text, 
        innerMeth : true, 
        type : 'COURSE_UPDATE', 
        type_hint : 'SM_COURSE_UPDATE',
        msg_s : T.context.inputText.course.msg_small,
        msg_m : T.context.inputText.course.msg_medium,
        msg_b : T.context.inputText.course.msg_big
    },
    SPEED : { 
        iconName : 'tachometer-alt', 
        elId : 'input_speed', 
        elText : T.context.inputText.speed.text, 
        innerMeth : true, 
        type : 'SPEED_UPDATE', 
        type_hint : 'SM_SPEED_UPDATE',
        msg_s : T.context.inputText.speed.msg_small,
        msg_m : T.context.inputText.speed.msg_medium,
        msg_b : T.context.inputText.speed.msg_big
    },
    CREW : { 
        iconName : 'user-friends', 
        elId : 'input_crew', 
        elText : T.context.inputText.crew.text, 
        innerMeth : true, 
        type : 'CREW_UPDATE', 
        type_hint : 'SM_CREW_UPDATE',
        msg_s : T.context.inputText.crew.msg_small,
        msg_m : T.context.inputText.crew.msg_medium,
        msg_b : T.context.inputText.crew.msg_big
    },
    FUEL : { 
        iconName : 'gas-pump', 
        elId : 'input_fuel', 
        elText : T.context.inputText.fuel.text, 
        innerMeth : true, 
        type : 'FUEL_UPDATE', 
        type_hint : 'SM_FUEL_UPDATE',
        msg_s : T.context.inputText.fuel.msg_small,
        msg_m : T.context.inputText.fuel.msg_medium,
        msg_b : T.context.inputText.fuel.msg_big
    },
    OIL : { 
        iconName : 'oil-can', 
        elId : 'input_oil', 
        elText : T.context.inputText.oil.text, 
        innerMeth : true, 
        type : 'OIL_UPDATE', 
        type_hint : 'SM_OIL_UPDATE',
        msg_s : T.context.inputText.oil.msg_small,
        msg_m : T.context.inputText.oil.msg_medium,
        msg_b : T.context.inputText.oil.msg_big
    },
    WATER : { 
        iconName : 'tint', 
        elId : 'input_water', 
        elText : T.context.inputText.water.text, 
        innerMeth : true, 
        type : 'WATER_UPDATE', 
        type_hint : 'SM_WATER_UPDATE',
        msg_s : T.context.inputText.water.msg_small,
        msg_m : T.context.inputText.water.msg_medium,
        msg_b : T.context.inputText.water.msg_big
    },
    TEMP : { 
        iconName : 'temperature-high', 
        elId : 'input_temp', 
        elText : T.context.inputText.temp.text, 
        innerMeth : true, 
        type : 'TEMP_UPDATE', 
        type_hint : 'SM_TEMP_UPDATE',
        msg_s : T.context.inputText.temp.msg_small,
        msg_m : T.context.inputText.temp.msg_medium,
        msg_b : T.context.inputText.temp.msg_big
    },
    WIND : { 
        iconName : 'wind', 
        elId : 'input_wind', 
        elText : T.context.inputText.wind.text, 
        innerMeth : true, 
        type : 'WIND_UPDATE', 
        type_hint : 'SM_WIND_UPDATE',
        msg_s : T.context.inputText.wind.msg_small,
        msg_m : T.context.inputText.wind.msg_medium,
        msg_b : T.context.inputText.wind.msg_big
    },
    WIND_DIRECT: { 
        iconName : 'compass', 
        elId : 'input_wind_direct', 
        elText : T.context.inputText.windDirect.text, 
        innerMeth : true, type : 'WIND_DIRECT_UPDATE', 
        type_hint : 'SM_WIND_DIRECT_UPDATE',
        msg_s : T.context.inputText.windDirect.msg_small,
        msg_m : T.context.inputText.windDirect.msg_medium,
        msg_b : T.context.inputText.windDirect.msg_big
    },
    WAVE : { 
        iconName : 'water', 
        elId : 'input_wave', 
        elText : T.context.inputText.wave.text, 
        innerMeth : true, 
        type : 'WAVE_UPDATE', 
        type_hint : 'SM_WAVE_UPDATE',
        msg_s : T.context.inputText.wave.msg_small,
        msg_m : T.context.inputText.wave.msg_medium,
        msg_b : T.context.inputText.wave.msg_big
    },
    COMMENT : { 
        iconName : 'comment-dots', 
        elId : 'input_comment', 
        elText : T.context.inputText.comment.text, 
        innerMeth : true, 
        type : 'COMMENT_UPDATE', 
        type_hint : 'SM_COMMENT_UPDATE',
        msg_s : T.context.inputText.comment.msg_small
    }
});

export let selectBlocks = Object.create({
    VESSELS : { 
        iconName : 'ship', 
        clsName : 'vesselIcons',
        idName : 'vesselIconsId',
        hint : T.context.inputText.vessel.msg_small, 
        title : T.context.inputText.vessel.text, 
        type : 'VESSEL_UPDATE', 
        type_hint : 'SM_VESSEL_UPDATE' },
    ICESETTINGS : { 
        iconName : 'icicles', 
        clsName : 'selectIce', 
        idName : 'selectIceId',
        hint : T.context.inputText.iceset.msg_small, 
        title : T.context.inputText.iceset.text, 
        type : 'ICESET_UPDATE', 
        type_hint : 'SM_ICESET_UPDATE' },
    PROJECTS : { 
        iconName : 'tasks', 
        clsName : 'selectProject',
        idName : 'selectProjectId', 
        hint : T.context.inputText.project.msg_small, 
        title : T.context.inputText.project.text, 
        type : 'PROJECT_UPDATE', 
        type_hint : 'SM_PROJECT_UPDATE' },
    STATUSES : { 
        iconName : 'info', 
        clsName : 'selectStatus', 
        idName : 'selectStatusId',
        hint : T.context.inputText.status.msg_small, 
        title : T.context.inputText.status.text, 
        type : 'STATUS_UPDATE', 
        type_hint : 'SM_STATUS_UPDATE' },
});

export const optionIconBlocks = new Array(
    { key : 'vessel_1', value : 'ТБС «АЛМАЗ»', icon : 'almaz.png' },
    { key : 'vessel_2', value : 'ИС «АКВАМАРИН»', icon : 'aqua.png' },
    { key : 'vessel_3', value : 'ИС «САПФИР»', icon : 'sapfir.png' },
    { key : 'vessel_4', value : 'ИС «ФЕДОР КОВРОВ»', icon : 'kovrov.png' },
    { key : 'vessel_5', value : 'ЛОЦМАНСКИЙ КАТЕР «ЯНТАРЬ»', icon : 'yantar.png' },
    { key : 'vessel_6', value : 'ИС «ГЕОЛОГ ДМИТРИЙ НАЛИВКИН»', icon : 'nalivkin.png' },
    { key : 'vessel_7', value : 'НИС «ГЕОФИЗИК»', icon : 'geofizik.png' },
    { key : 'vessel_8', value : 'НИС «НИКОЛАЙ ТРУБЯТЧИНСКИЙ»', icon : 'truba.png' }
);

export let dateBlocks = Object.create({
    PREV_BUNKER : { 
        iconName : 'calendar-check',
        clsName : 'prevBunkerDate', 
        elId : 'prevBunkerDate', 
        title : T.context.inputText.prevBunker.text, 
        type : 'PREV_BUNKER_UPDATE', 
        type_hint : 'SM_PREV_BUNKER_UPDATE',
        msg_s : T.context.inputText.prevBunker.msg_small 
    },
    BUNKER : { 
        iconName : 'calendar-alt', 
        clsName : 'bunkerDate', 
        elId : 'bunkerDate', 
        title : T.context.inputText.bunker.text, 
        type : 'BUNKER_UPDATE', 
        type_hint : 'SM_BUNKER_UPDATE',
        msg_s : T.context.inputText.bunker.msg_small
    }
});

export let mainForm = Object.create({
    title : T.context.mainform.title,
    btnTitle : T.context.mainform.sendBtn
});

export let sideBar = Object.create({
    msgTitle : T.context.sidebar.msgTitle,
    msgAccess : T.context.sidebar.msgAccess,
    msgFail : T.context.sidebar.msgFail,
    sendBtn : T.context.sidebar.sendBtn,
    clearBtn : T.context.sidebar.clearBtn,
    langTitle : T.context.sidebar.lang.title,
    RU : T.context.sidebar.lang.RU,
    EN : T.context.sidebar.lang.EN
});

export const selectType = ['array', 'object'];
export const projectsArr = new Array(['Баренц-Кар', '10.06.20', '10.06.20'], ['Баренц-Кар 2', '10.09.20', '10.12.20']);

export let statusArr = parseJsonArr(T.context.selectText.statuses);
export let iceSettingArr = parseJsonArr(T.context.selectText.ice_settings);

export let pickerSet = Object.create({
    monthArr : parseJsonMass(T.context.calendar.months),
    monthArrS : parseJsonMass(T.context.calendar.monthsSmall),
    weekDays : parseJsonMass(T.context.calendar.weekDays),
    weekDaysS : parseJsonMass(T.context.calendar.weekDaysSmall),
    weekDaysAbbr : parseJsonMass(T.context.calendar.weekDaysAbbr)
});

export function chgLang(lang)
{
    T = require('@lang/' + lang +'.json')

    inputBlocks.LAT = Object.assign({}, inputBlocks.LAT, { elText : T.context.inputText.lat.text, msg_s : T.context.inputText.lat.msg_small });
    inputBlocks.LONGI = Object.assign({}, inputBlocks.LONGI, { elText : T.context.inputText.longi.text, msg_s : T.context.inputText.longi.msg_small });
    inputBlocks.COURSE = Object.assign({}, inputBlocks.COURSE, { elText : T.context.inputText.course.text, msg_s : T.context.inputText.course.msg_small, msg_m : T.context.inputText.course.msg_medium,  msg_b : T.context.inputText.course.msg_big });
    inputBlocks.SPEED = Object.assign({}, inputBlocks.SPEED, { elText : T.context.inputText.speed.text, msg_s : T.context.inputText.speed.msg_small, msg_m : T.context.inputText.speed.msg_medium,  msg_b : T.context.inputText.speed.msg_big });
    inputBlocks.CREW = Object.assign({}, inputBlocks.CREW, { elText : T.context.inputText.crew.text, msg_s : T.context.inputText.crew.msg_small, msg_m : T.context.inputText.crew.msg_medium,  msg_b : T.context.inputText.crew.msg_big }); 
    inputBlocks.FUEL = Object.assign({}, inputBlocks.FUEL, { elText : T.context.inputText.fuel.text, msg_s : T.context.inputText.fuel.msg_small, msg_m : T.context.inputText.fuel.msg_medium,  msg_b : T.context.inputText.fuel.msg_big }); 
    inputBlocks.OIL = Object.assign({}, inputBlocks.OIL, { elText : T.context.inputText.oil.text, msg_s : T.context.inputText.oil.msg_small, msg_m : T.context.inputText.oil.msg_medium,  msg_b : T.context.inputText.oil.msg_big }); 
    inputBlocks.WATER = Object.assign({}, inputBlocks.WATER, { elText : T.context.inputText.water.text, msg_s : T.context.inputText.water.msg_small, msg_m : T.context.inputText.water.msg_medium,  msg_b : T.context.inputText.water.msg_big });
    inputBlocks.TEMP = Object.assign({}, inputBlocks.TEMP, { elText : T.context.inputText.temp.text, msg_s : T.context.inputText.temp.msg_small, msg_m : T.context.inputText.temp.msg_medium,  msg_b : T.context.inputText.temp.msg_big });
    inputBlocks.WIND = Object.assign({}, inputBlocks.WIND, { elText : T.context.inputText.wind.text, msg_s : T.context.inputText.wind.msg_small, msg_m : T.context.inputText.wind.msg_medium,  msg_b : T.context.inputText.wind.msg_big });
    inputBlocks.WIND_DIRECT = Object.assign({}, inputBlocks.WIND_DIRECT, { elText : T.context.inputText.windDirect.text, msg_s : T.context.inputText.windDirect.msg_small, msg_m : T.context.inputText.windDirect.msg_medium,  msg_b : T.context.inputText.windDirect.msg_big }); 
    inputBlocks.WAVE = Object.assign({}, inputBlocks.WAVE, { elText : T.context.inputText.wave.text, msg_s : T.context.inputText.wave.msg_small, msg_m : T.context.inputText.wave.msg_medium,  msg_b : T.context.inputText.wave.msg_big });
    inputBlocks.COMMENT = Object.assign({}, inputBlocks.COMMENT, { elText : T.context.inputText.comment.text, msg_s : T.context.inputText.comment.msg_small, msg_m : T.context.inputText.comment.msg_medium,  msg_b : T.context.inputText.comment.msg_big });
    dateBlocks.PREV_BUNKER = Object.assign({}, dateBlocks.PREV_BUNKER, { title : T.context.inputText.prevBunker.text, msg_s : T.context.inputText.prevBunker.msg_small });
    dateBlocks.BUNKER = Object.assign({}, dateBlocks.BUNKER, { title : T.context.inputText.bunker.text, msg_s : T.context.inputText.bunker.msg_small });
    selectBlocks.VESSELS = Object.assign({}, selectBlocks.VESSELS, { hint : T.context.inputText.vessel.msg_small, title : T.context.inputText.vessel.text });
    selectBlocks.ICESETTINGS = Object.assign({}, selectBlocks.ICESETTINGS, { hint : T.context.inputText.iceset.msg_small, title : T.context.inputText.iceset.text });
    selectBlocks.PROJECTS = Object.assign({}, selectBlocks.PROJECTS, { hint : T.context.inputText.project.msg_small, title : T.context.inputText.project.text });
    selectBlocks.STATUSES = Object.assign({}, selectBlocks.STATUSES, { hint : T.context.inputText.status.msg_small, title : T.context.inputText.status.text });

    mainForm = Object.create({
        title : T.context.mainform.title,
        btnTitle : T.context.mainform.sendBtn
    });

    sideBar = Object.create({
        msgTitle : T.context.sidebar.msgTitle,
        msgAccess : T.context.sidebar.msgAccess,
        msgFail : T.context.sidebar.msgFail,
        sendBtn : T.context.sidebar.sendBtn,
        clearBtn : T.context.sidebar.clearBtn,
        langTitle : T.context.sidebar.lang.title,
        RU : T.context.sidebar.lang.RU,
        EN : T.context.sidebar.lang.EN
    });

    statusArr = parseJsonArr(T.context.selectText.statuses);
    iceSettingArr = parseJsonArr(T.context.selectText.ice_settings);

    pickerSet = Object.create({
        monthArr : parseJsonMass(T.context.calendar.months),
        monthArrS : parseJsonMass(T.context.calendar.monthsSmall),
        weekDays : parseJsonMass(T.context.calendar.weekDays),
        weekDaysS : parseJsonMass(T.context.calendar.weekDaysSmall),
        weekDaysAbbr : parseJsonMass(T.context.calendar.weekDaysAbbr),
        cancelBtn : T.context.calendar.cancelBtn,
        clearBtn : T.context.calendar.clearBtn
    });

    msgSet = Object.create({
        type_1 : T.context.infoMessages.type_1,
        type_2 : T.context.infoMessages.type_2,
        type_3 : T.context.infoMessages.type_3,
        type_4 : T.context.infoMessages.type_4,
        type_5 : T.context.infoMessages.type_5,
        type_6 : T.context.infoMessages.type_6
    });
}

export function msgForUser(val, msg) {
    switch(val) {
        case 1:
            M.toast({ html: msgSet.type_1, classes: 'blue darken-1 rounded' });
        break;

        case 2:
            M.toast({ html: msgSet.type_2 + msg, classes: 'red darken-1 rounded' });
        break;

        case 3:
            M.toast({ html: msgSet.type_3, classes: 'blue darken-1 rounded' });
        break;

        case 4:
            M.toast({ html: msgSet.type_4 + msg, classes: 'red darken-1 rounded' });
        break;

        case 5:
            M.toast({ html: msgSet.type_5, classes: 'blue darken-1 rounded' });
        break;

        case 6:
            M.toast({ html: msgSet.type_6, classes: 'blue darken-1 rounded' });
        break;
    }
}