
import './assets/css/App.css';
import React,{Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {  connect } from 'react-redux'



class App extends Component{
  render(){
    return(
      <Router>
        <div className='App'>
          
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route  path='/index' component={Home}/>
          </Switch>
          
        </div>
      </Router>
    )
  }
}

export default connect()(App);
