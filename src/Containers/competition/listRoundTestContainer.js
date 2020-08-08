import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import   {listRoundTestAPI,detailCompetitionAPI,confirmRoundAPI,ConfirmCodeAPI} from '../../api/competition/index'
import PropTypes from 'prop-types';
import _ from 'lodash';
import ListRoundTest from './../../components/competition/listRoundTest';
import ListRoundTestItem from './../../components/competition/listRoundTestItem';
 

import Modal from './../../components/modal/competition/confirmGoExam';


class  listRoundTestContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalStatus : false,
            confirm : false,
            idRound: ''
        }
    }
     
    componentDidMount() {
        var {match} = this.props;
        if(match){
            var {getListRound} = this.props;
            var {getDetailCompetition} = this.props;
            getListRound(match.params.idCompetition);
            getDetailCompetition(match.params.idCompetition);
        }

        
     }

     componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        if (Object.keys(nextProps.confirm).length!==0){
            //console.log(nextProps.confirm);
            this.checkConfirm(nextProps.confirm);
        }
    }
 
    
      


     
        
    
  render() {
    var {data} = this.props;
    var {detail} = this.props;
    var {modalStatus} = this.state;
  

     if(detail){
        var unitConnections = detail[0];
        var nameCompetitionCreate = detail[1];
     }
    return (
        <Fragment>
               <ListRoundTest 
                data = {data}
                unitConnections = {unitConnections}
                nameCompetitionCreate = {nameCompetitionCreate}
                >

            { this.showItemRoundTest(data) }
             </ListRoundTest>
             <Modal 
                showModal ={this.showModal}
                notify = {modalStatus}
                confirmCode = {this.confirmCode}
             >

             </Modal>
        </Fragment>
      
 
    );
  }












    showItemRoundTest (datas){
        var result = null;
        var { confirmRoundTest } = this.props;
        if(datas){
            result = datas.map((data,index) =>  {
                return <ListRoundTestItem key={data.id}  
                                item = {data} 
                                index = {index} 
                                confirmRoundTest = {confirmRoundTest}         
                                />  
            })
        }
        return result;
    } 

    checkConfirm =(confirmRoundTest) =>{
        //console.log(confirmRoundTest);
        if(Object.keys(confirmRoundTest).length!==0){
            
                if(confirmRoundTest.code ==='200'){
                    this.setState({
                        confirm: true,
                    })
                }else{
                    if(confirmRoundTest.data===3){
                        alert('Bạn chưa tham gia vòng thi');
                        this.setState({
                            confirm: false,
                            modalStatus:true
                        })
                        console.log(this.state);
                    }else {
                        alert(confirmRoundTest.message);
                        
                    }
                }   

                console.log(this.state);
          }
    }

    showModal =() =>{
        this.setState({
            modalStatus:!this.state.modalStatus
        })
    }
}

  
        
listRoundTestContainer.propTypes = {
    getListRound : PropTypes.func.isRequired,
    getDetailCompetition : PropTypes.func.isRequired,
    confirmRoundTest : PropTypes.func.isRequired
}


const mapStateToProps = (state) =>{
      return {
          data:state.listRound,
          detail: state.detailCompetition,
          confirm: state.confirmRoundTest
      } 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListRound: (id) => {
            dispatch(listRoundTestAPI(id));
        },
        getDetailCompetition: (id) => {
            dispatch(detailCompetitionAPI(id));
        },
        confirmRoundTest : (idRound) => {
            dispatch(confirmRoundAPI(idRound));
        },
        confirmCode :(code) =>{
            dispatch(ConfirmCodeAPI(code));
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps) (listRoundTestContainer);
