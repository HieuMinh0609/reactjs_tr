import React,{Component,Fragment} from 'react';
import './../../commons/css/common.css';
import './../../commons/css/competition.css';
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
 
 

class ListRoundTestItem extends Component {

    constructor(props){
        super(props);
        this.state  = {
            
        }
      }

      confirmRoundTest = (idRound) => {
         var {confirmRoundTest} = this.props;
         console.log(idRound);
         confirmRoundTest(idRound);
      }
 
    render() {
        var {item}= this.props;
 
        return ( 
    
                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                             <div className="container-fluid boder-box">
                                <div className="pd-10">
                                    {item.nameRound}
                                </div>
                                <hr/>
                                <div className="box-content-round">
                                    <div>
                                        <span><i className="fa fa-clock-o color-ore" aria-hidden="true"></i>&nbsp;
                                        <span  >Thời gian làm bài:&nbsp;</span>
                                        <span  >{item.timeRound /60} phút</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span ><i className="fa fa-calendar color-ore" aria-hidden="true"></i>&nbsp;
                                        <span  >Thời gian bắt đầu:&nbsp;</span>
                                        <span >{item.timeStart?`${new Date(item.timeStart).toLocaleString()} -> ${ new Date(item.timeEnd).toLocaleString()} `:'Không giới hạn thời gian' }</span>
                                        </span>
                                    </div>
                               
                                </div>
                                <hr/>
                                <div className="text-center pd-10">
                                        
                                        <button onClick={() => { this.props.confirmRoundTest(item.id) }} type="button" className="btn btn-warning ">Tham gia vòng thi</button>
                                        
                                </div>
                             </div>

                         </div>
                        
       )
  }
 
}

export default  ListRoundTestItem;
