import React,{Component,Fragment} from 'react';
import './../../commons/css/common.css';
import './../../commons/css/competition.css';
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
 
 

class ListRoundTest extends Component {

    constructor(props){
        super(props);
        this.state  = {
          
        }
      }

      
 
    render() {
        var {data} =this.props
       
        var {unitConnections} =this.props
        var {nameCompetitionCreate} =this.props

       
        return ( 
            <Fragment>
                <div className="container-fluid">
                     <div >   
                         <span className="label label-info"><Link to="/home">Trang chủ</Link> &gt; <span>
                            Danh sách vòng thi</span></span>
                     </div>
                     <div className="content-competition text-center">
                            <h4> {data.length>0?data[0].competition.nameCompetition:''}</h4>
                            <h5 className="cl-time-competition">{data.length>0?data[0].competition.timeStart?`${new Date(data[0].competition.timeStart).toLocaleString()} - ${new Date(data[0].competition.timeEnd).toLocaleString()}`:`Không giới hạn thời gian`:``}</h5>
                             
                             
                            <h5 className="cl-time-competition mt-20" dangerouslySetInnerHTML={{__html: data.length>0?data[0].competition.describe:''}}></h5>
                            <div>
                                <div>
                                    <span ><i className="fa fa-dot-circle-o color-ore" aria-hidden="true"></i>&nbsp;
                                     Đơn vị tạo cuộc thi:&nbsp;</span>
                                    <i  className="fa fa-building-o  color-ore" aria-hidden="true">&nbsp;</i>
                                         &nbsp;<span>{nameCompetitionCreate}</span>
                                   

                                </div>
                                <div>
                                <span >&nbsp;&nbsp;<i className="fa fa-dot-circle-o color-bule" aria-hidden="true"></i>&nbsp;
                                 Đơn vị liên quan:&nbsp;</span>
                                   {this.showUnitConnection(unitConnections)}
                                </div>
                            </div>
                     </div>


                     <div className="row mt-20">
                         <div className="main p-3">
                                {this.props.children}
                         </div>
                   
                         
                         

                     </div>
                </div>

            </Fragment>
 
       )
  }

  showUnitConnection(unitConnections){
    var result = null;
    if(unitConnections){
        result = unitConnections.map((data,index) =>  {
            return  <Fragment key={index}>
                            
                            &nbsp;&nbsp;<i  className="fa fa-building-o  color-bule" aria-hidden="true">&nbsp;</i>
                            &nbsp;<span>{data}</span>
                    </Fragment> 
        })
    }
  
    return result;
  }

 
}

export default  ListRoundTest;
