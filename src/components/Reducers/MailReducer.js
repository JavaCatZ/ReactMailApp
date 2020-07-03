export const initialMsgState = {
    vessel: '',
    lat : '',
    longi : '',
    course : '',
    speed : '',
    crew : '',
    fuel : '',
    oil : '',
    water : '',
    prev_bunker : '',
    bunker : '',
    temp : '',
    wind : '',
    wind_direct : '',
    wave : '',
    iceset: '',
    project: '',
    dateStart : '',
    dateEnd :'',
    vstatus: '',
    comment : ''
}

export const initialHintStateRU = {
    smVessel: 'Укажите судно',
    smLat: "Укажите широту в формате: 000°00'00\"",
    smLongi: "Укажите долготу в формате: 000°00'00\"",
    smCourse: 'Укажите текущий курс (°)',
    smSpeed: 'Укажите текущую скорость (в узлах)',
    smCrew: 'Укажите количество экипажа (чел.)',
    smFuel: 'Укажите остаток топлива (т)',
    smOil: 'Укажите остаток масла (т)',
    smWater: 'Укажите остаток воды (т)',
    smPrevBunker: 'Укажите дату предыдущей бункеровки',
    smBunker: 'Укажите дату следующей бункеровки',
    smTemp: 'Укажите текущую температуру (С°)',
    smWind: 'Укажите скорость ветра (м/с)',
    smWindDirect: 'Укажите направление ветра (°)',
    smWave: 'Укажите высоту волны (м)',
    smIceSet: ['Укажите ледовую обстановку', 0],
    smProject: ['Укажите проект', 0],
    smStatus: ['Укажите статус судна', 0],
    smComment: 'Укажите примечание'
}

export const initialHintStateEN = {
    smVessel: 'Enter vessel',
    smLat: "Enter latitude in format: 000°00'00\"",
    smLongi: "Enter longitude in format: 000°00'00\"",
    smCourse: 'Enter current course (°)',
    smSpeed: 'Enter current speed (in knots)',
    smCrew: 'Enter number of crew members value (num.)',
    smFuel: 'Enter fuel remaining value (t)',
    smOil: 'Enter oil residue value (t)',
    smWater: 'Enter the rest of the water value (t)',
    smPrevBunker: 'Enter the date of the previous bunker',
    smBunker: 'Enter the date of the next bunker',
    smTemp: 'Enter the current temperature (С°)',
    smWind: 'Enter the wind speed value (m/s)',
    smWindDirect: 'Enter the direction of the wind (°)',
    smWave: 'Enter the wave height value (m)',
    smIceSet: ['Enter the ice setting variant', 0],
    smProject: ['Enter the project', 0],
    smStatus: ['Enter the ship status', 0],
    smComment: 'Enter the comment'
}

export function msgInit(initialCount) {
    return Object.assign({}, initialCount);
}

export function msgReducer(state, action)
{
    switch(action.type)
    {
        case 'VESSEL_UPDATE':
            return Object.assign({}, state, { vessel: action.date });
        case 'LAT_UPDATE':
            return Object.assign({}, state, { lat: action.date });
        case 'LONGI_UPDATE':
            return Object.assign({}, state, { longi: action.date });
        case 'COURSE_UPDATE':
            return Object.assign({}, state, { course: action.date });
        case 'SPEED_UPDATE':
            return Object.assign({}, state, { speed: action.date });
        case 'CREW_UPDATE':
            return Object.assign({}, state, { crew: action.date });
        case 'FUEL_UPDATE':
            return Object.assign({}, state, { fuel: action.date });
        case 'OIL_UPDATE':
            return Object.assign({}, state, { oil: action.date });
        case 'WATER_UPDATE':
            return Object.assign({}, state, { water: action.date });
        case 'PREV_BUNKER_UPDATE':
            return Object.assign({}, state, { prev_bunker: action.date });
        case 'BUNKER_UPDATE':
            return Object.assign({}, state, { bunker: action.date });
        case 'TEMP_UPDATE':
            return Object.assign({}, state, { temp: action.date });
        case 'WIND_UPDATE':
            return Object.assign({}, state, { wind: action.date });
        case 'WIND_DIRECT_UPDATE':
            return Object.assign({}, state, { wind_direct: action.date });
        case 'WAVE_UPDATE':
            return Object.assign({}, state, { wave: action.date });
        case 'ICESET_UPDATE':
            return Object.assign({}, state, { iceset: action.date });
        case 'PROJECT_UPDATE':
            return Object.assign({}, state, { project: action.date });
        case 'DATE_START_UPDATE':
            return Object.assign({}, state, { dateStart: action.date });
        case 'DATE_END_UPDATE':
            return Object.assign({}, state, { dateEnd: action.date });
        case 'STATUS_UPDATE':
            return Object.assign({}, state, { vstatus: action.date });
        case 'COMMENT_UPDATE':
            return Object.assign({}, state, { comment: action.date });
        case 'RELOAD_MSG_STATE':
            return msgInit(initialMsgState);
        default:
            throw new Error();
    }
}

export function hintInit(initialCount) {
    return Object.assign({}, initialCount);
}

export function hintReducer(state, action)
{
    switch(action.type)
    {
        case 'SM_VESSEL_UPDATE':
            return Object.assign({}, state, { smVessel: action.date });
        case 'SM_LAT_UPDATE':
            return Object.assign({}, state, { smLat: action.date });
        case 'SM_LONGI_UPDATE':
            return Object.assign({}, state, { smLongi: action.date });
        case 'SM_COURSE_UPDATE':
            return Object.assign({}, state, { smCourse: action.date });
        case 'SM_SPEED_UPDATE':
            return Object.assign({}, state, { smSpeed: action.date });
        case 'SM_CREW_UPDATE':
            return Object.assign({}, state, { smCrew: action.date });
        case 'SM_FUEL_UPDATE':
            return Object.assign({}, state, { smFuel: action.date });
        case 'SM_OIL_UPDATE':
            return Object.assign({}, state, { smOil: action.date });
        case 'SM_WATER_UPDATE':
            return Object.assign({}, state, { smWater: action.date });
        case 'SM_PREV_BUNKER_UPDATE':
            return Object.assign({}, state, { smPrevBunker: action.date });
        case 'SM_BUNKER_UPDATE':
            return Object.assign({}, state, { smBunker: action.date });
        case 'SM_TEMP_UPDATE':
            return Object.assign({}, state, { smTemp: action.date });
        case 'SM_WIND_UPDATE':
            return Object.assign({}, state, { smWind: action.date });
        case 'SM_WIND_DIRECT_UPDATE':
            return Object.assign({}, state, { smWindDirect: action.date });
        case 'SM_WAVE_UPDATE':
            return Object.assign({}, state, { smWave: action.date });
        case 'SM_ICESET_UPDATE':
            return Object.assign({}, state, { smIceSet: action.date });
        case 'SM_PROJECT_UPDATE':
            return Object.assign({}, state, { smProject: action.date });
        case 'SM_STATUS_UPDATE':
            return Object.assign({}, state, { smStatus: action.date });
        case 'SM_COMMENT_UPDATE':
            return Object.assign({}, state, { smComment: action.date });
        case 'CHECK_LANG_RU':
            return hintInit(initialHintStateRU);
        case 'CHECK_LANG_EN':
            return hintInit(initialHintStateEN);
        default:
            throw new Error();
    }
}