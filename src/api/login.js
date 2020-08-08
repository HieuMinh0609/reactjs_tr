import  callApi   from './../commons/axiosService';
import {onLogin} from './../actions/login';




export const onLoginAPI = (user) => {
    return (dispatch) => {
      //  console.log(user);
        return callApi('api/authentication','POST', user).then(res => {
            if(res){
                dispatch(onLogin(res.data));
            }
        })
        .catch(err => {
            if(err){
                console.log(err.response)
                dispatch(onLogin(err.response));
            }
        });;
    }
}