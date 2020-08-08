import { combineReducers } from 'redux';
import data from './login'
import listRound from './competition/listRound'
import detailCompetition from './competition/detailCompetition'
import confirmRoundTest from './competition/confimRoundTest'
const myReducer = combineReducers({
     data,
     listRound,
     detailCompetition,
     confirmRoundTest
});

 
export default myReducer;