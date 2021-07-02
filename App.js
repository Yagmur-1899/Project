import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClientFolder from './components/ClientFolder';
import ClientUpdate from './components/ClientUpdate';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Login from   './components/Login'
import Other from './components/Other'
import Chosen from './components/Chosen'



function App(user, HandleLogOut,) {
   
 
  return (
    <Router>
     <div>
      
      <Navbar/>
      <Switch>
      <Route path='/ 'component={home} />
      <Route path='/MuvekkilKayit' component={Chosen} />
      <Route path= '/MuvekkilDosya' component={ClientUpdate} />
     </Switch>
     </div>
    </Router>

  );
}
const home=()=>{
  return(
    <div>
      Home
    </div>
  )
}
export default App;
