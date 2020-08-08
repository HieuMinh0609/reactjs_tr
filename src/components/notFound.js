import React,{Component} from 'react';
import './../commons/css/common.css';
 
 
 

class NotFoud extends Component {

    constructor(props){
        super(props);
        this.state  = {
            redirect: false,
            user: {
              username: '',
              password: ''
            }
        }
      }

     
     
        


    render() {
      
        return ( 


            <div className="container formLogin">
                <span>404 - NOTFOUND</span>    
             
            </div>
       )
  }

 
}

export default  NotFoud;
