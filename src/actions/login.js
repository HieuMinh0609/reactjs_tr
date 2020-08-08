import * as types from './../constants/actionTypes'



export const onLogin = (data) => {
    return {
        type: types.ON_LOGIN,
        data
    }
};

 