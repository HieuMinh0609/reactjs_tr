import  callApi   from './../../commons/axiosService';
import {getListRoundTest,getDetailCompetition,confirmRoundTest} from './../../actions/competition';




export const  listRoundTestAPI = (id) => {
    return (dispatch) => {
    
        return callApi(`api/competition/${id}/roundTest/list`,'GET', null).then(res => {
            if(res){
                dispatch(getListRoundTest(res.data));
            }
        })
        .catch(err => {
            if(err){
                dispatch(getListRoundTest(err.response));
            }
        });;
    }
}

export const  detailCompetitionAPI = (id) => {
    return (dispatch) => {
        return callApi(`api/competition/${id}/getPoscodes`,'POST', null).then(res => {
            if(res){
                dispatch(getDetailCompetition(res.data));
            }
        })
        .catch(err => {
            if(err){
                dispatch(getDetailCompetition(err.response));
            }
        });;
    }
}

export const  confirmRoundAPI = (id) => {
    return (dispatch) => {
        return callApi(`api/roundtest/${id}/confirm`,'POST', null).then(res => {
            if(res){
                dispatch(confirmRoundTest(res.data));
            }
        })
        .catch(err => {
            if(err){
                dispatch(confirmRoundTest(err.response));
            }
        });;
    }
}

export const  ConfirmCodeAPI = (id,idRound) => {
    return (dispatch) => {
        return callApi(`api/roundtest/${idRound}/inputCode/${id}`,'POST', null).then(res => {
            if(res){
                dispatch(confirmRoundTest(res.data));
            }
        })
        .catch(err => {
            if(err){
                dispatch(confirmRoundTest(err.response));
            }
        });;
    }
}



