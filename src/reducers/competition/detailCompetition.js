import * as types from './../../constants/actionTypes';
 


var initiaState = {}
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.GET_DETAIL_COMPETITION:
           // console.log(action);
            var data = action.data;
            if(data.code==='200'){
                state = data.data;
            }
            return [...state];
        default:
            return state;

    }
}

export default myReducer;