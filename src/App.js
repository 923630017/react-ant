import React from 'react'
import Login from './views/login/login';
import Admin from './views/admin/admin';
import './App.less';
import { HashRouter, Route, Switch } from 'react-router-dom'
class App extends React.Component{
   render() {
     return(
       <HashRouter>
          <Switch>{/*只有匹配到一个就不要匹配其他路由*/}
            <Route path='/login' exact component={Login}>
            </Route>
            <Route path='/' component={Admin}></Route>
          </Switch>
       </HashRouter>
     )
   }
}

export default App;
