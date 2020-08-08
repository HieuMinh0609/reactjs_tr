import * as types from './../constants/actionTypes';
 


var initiaState = {}
var myReducer = (state = initiaState ,action) =>{
    switch(action.type){
        case types.ON_LOGIN:
            var data = action.data;
            //console.log(data);
            if(data.code==='200'){
               // console.log(data.code);
                localStorage.setItem('eln_token',JSON.stringify(data.data.token)); 
                state = data;
            }else{
                state = data;
            }
            
           // console.log(state);
            return state;
        default:
            return state;

    }
}

export default myReducer;