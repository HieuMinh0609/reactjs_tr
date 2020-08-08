import React,{Component,Fragment} from 'react';
import './../../../commons/css/common.css';
import './../../../commons/css/competition.css';
 
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
 
class confirmGoExam extends Component {

    constructor(props){
        super(props);
        this.state  = {
            code: ''
        }
      }

 
    openModal = () =>{
        var { showModal } = this.props;
        showModal();
      
    }
 
    render() {
        var notify = this.props.notify
        ? { display: "block" }
        : { display: "none" };
       
        return ( 
                <div className="App">
                <h1>Bạn chưa có trong danh sách thí sinh</h1>
                <h2>Nhập mã vòng thi</h2>
                <button
                type="button"
                onClick={this.openModal}
                className="btn btn-info btn-lg"
                >
                Open Modal
                </button>
                <div
                id="myModal"
                className="modal fade in"
                role="dialog"
                style={notify}
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button
                        type="button"
                        onClick={this.openModal}
                        className="close"
                        >
                        &times;
                        </button>
                        <h4 className="modal-title">
                            Bạn chưa có trong danh sách thí sinh
                        </h4>
                    </div>
                    <div className="modal-body">
                        <p>Nhập mã vòng thi</p>
                        <input type="text" placeholder="Nhập mã vòng thi" name="code" required
                                    onChange = {this.onChange}
                        />
                         <input type="hidden" placeholder="Nhập mã vòng thi" name="idRound" required
                                    onChange = {this.onChange}
                        />
                    </div>
                    
                    <button type="button" onClick={this.onLogin} class="btn btn-warning">Xác nhận</button>
                    
                    <div className="modal-footer">
                        <button
                        onClick={this.openModal}
                        type="button"
                        className="btn btn-default"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
       )     
  }

  onLogin = () => {
        var {code} = this.state;
        var { confirmCode } = this.props;
        confirmCode(code);
    }


    onChange = (event) =>{
      let target = event.target;
      let value = target.value;
      let name = target.name;
      this.setState({
        code : name==='code'?value:this.state.code
        })
    }
 
}

export default  confirmGoExam;
