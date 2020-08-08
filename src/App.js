import React,{Component} from 'react';
import {BrowserRouter as Router ,Route ,Link, Redirect,Switch  } from 'react-router-dom';
import LoginContainer from './Containers/loginContainer';
 
import routers from './router'

class  App  extends Component  {
 

    render() {
      return ( 

        <Router>
          <LoginContainer
          
          />


            <Switch>
              { this.showContentLink(routers) }
              
            </Switch>
        </Router>
      )
    }


    showContentLink = (routes) => {
      var result = null;
      if (routes.length > 0) {
        result = routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          )
        })
      }
      return result;
    }
}

export default App;
