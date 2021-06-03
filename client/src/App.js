import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import CharacterPage from './components/Characters/CharacterPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/character/:id"} component={CharacterPage} />
      </Switch>
    </Router>
  );
}

export default App;