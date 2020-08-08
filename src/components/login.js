import React,{Component} from 'react';
import './../commons/css/common.css';
import avatar from  './../images/avartar.png';
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
 

class Login extends Component {

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

 
    componentWillReceiveProps(nextProps, nextState) {
        if(nextProps && nextProps.data){
            this.confirmLogin(nextProps.data);
        }
     }

     


    render() {
        if(this.state.redirect){
           var {location} = this.props;
           var {redirect} = this.state;
           
         //  console.log(redirect)
          return  <Redirect to='/competition/84/list-round-test'       
          />
                
           
        }
        return ( 


            <div className="container formLogin">
           
                    <form >
                        <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                        </div>
                        
                        <div >
                            <label ><b>Tên đăng nhập</b></label>
                            <input  type="text" placeholder="Enter Username" name="username" required
                            onChange = {this.onChangeSubmit}
                            />
                        
                            <label><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Enter Password" name="password" required
                             onChange = {this.onChangeSubmit}
                            />
                        
                                <button onClick={this.onLogin} type="button">Đăng nhập</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember"
                                 onChange = {this.onChangeSubmit}
                                /> Nhớ mật khẩu
                            </label>
                            </div>
                        
                            <div className="container" >
                                <button type="button" className="cancelbtn">Trờ về</button>
                            <span className="psw"> <Link   to="/">Quên mật khẩu ?</Link></span>
                        </div>         
                </form>
             
        </div>
       )
  }

  onLogin = () => {
    var user = this.state.user;
    var { onLoginUser } = this.props;
    onLoginUser(user);
}


  onChangeSubmit = (event) =>{
      let target = event.target;
      let value = target.value;
      let name = target.name;
      this.setState({
        user:{
            username : name ==='username'? value : this.state.user.username,
            password : name ==='password'? value :  this.state.user.password
        }
        })
    }

    confirmLogin(data){
        if(data){
           // console.log(data);
            //console.log(data.code);
            if(data.code!=='200'){

                alert('Đăng nhập thất bại');
            }else{
                this.setState({
                    redirect : true
                })
            }
        }
        
    }
   
}

export default  Login;
