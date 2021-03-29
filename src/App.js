import React, {useContext} from 'react';

import LandingScreen from './pages/LandingScreen/LandingScreen';
import ScoreBreakdown from './pages/ScoreBreakdown/ScoreBreakdown';
import Header from './components/Header/Header';
import Initiatives from './pages/Initiatives/Initiatives';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Entrence from './components/Entrence/Entrence';
import { EntrenceContext } from './context/EntrenceScreenContext';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {

  var {seen} = useContext(EntrenceContext);

  return (
      <Router>
        {
          !seen ? 
          <Entrence />
          :
          <div>
            <Header />
              <Switch>
                <Route path="/" exact component = {Dashboard} />
                <Route path = "/initiatives" component = {Initiatives} />
                <Route path = "/scorebreakdown" component = {ScoreBreakdown} />
              </Switch>
            <Footer />
          </div>
        }
      </Router>
  );
}

export default App;
