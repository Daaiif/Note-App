import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Edit } from './pages/Edit';
import { Home } from './pages/Home';
import { View } from './pages/View';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container pt-4">
              <Alert />
              <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/edit'} component={Edit}/>
                <Route path={'/view'} component={View}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
