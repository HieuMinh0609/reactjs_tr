import * as types from './../constants/actionTypes'



 
export const getListRoundTest = (data) => {
    return {
        type: types.GET_LIST_ROUND,
        data
    }
};

export const getDetailCompetition = (data) => {
    return {
        type: types.GET_DETAIL_COMPETITION,
        data
    }
};

export const confirmRoundTest = (data) => {
    return {
        type: types.CONFIRM_ROUND_TEST,
        data
    }
};
