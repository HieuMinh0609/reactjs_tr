import * as types from './../../constants/actionTypes';
 


var initiaState = []
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.GET_LIST_ROUND:
            var data = action.data;
             //console.log(data);
            if(data.code==='200'){
                state = data.data;
            }
           // console.log(state);
            return [...state];
        default:
            return state;

    }
}

export default myReducer;