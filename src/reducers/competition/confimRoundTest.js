import * as types from './../../constants/actionTypes';
 


var initiaState = {}
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.CONFIRM_ROUND_TEST:
            
             if(action.data){
                 state = action.data
              
                return state;
             }
             return  state;
        default:
            return state;

    }
}

export default myReducer;