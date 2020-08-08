import React,{Component} from 'react';
import { connect } from 'react-redux';
import   {onLoginAPI} from '../api/login'
import PropTypes from 'prop-types';
import _ from 'lodash';
import Login from '../components/login';
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
 

class  LoginContainer extends Component {
  
   
        
    
  render() {
    if(localStorage.getItem('eln_token') && localStorage.getItem('eln_token') !=="undefined" ){
        return  <Redirect to='/competition/84/list-round-test'/>       
    }
    var { onLogin} = this.props;
    var {data}  = this.props;
    var {location}  = this.props;
    
    return (
     
            <Login 
             data = {data}
             onLoginUser = {onLogin}  
             location = {location} 
            />
     
      
 
    );
  }
}

LoginContainer.propTypes = {
    onLogin : PropTypes.func.isRequired
}


const mapStateToProps = (state) =>{
     //console.log(state);
      return {
          data:state.data
      } 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (user) => {
            dispatch(onLoginAPI(user));
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps) (LoginContainer);
