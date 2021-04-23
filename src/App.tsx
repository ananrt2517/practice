import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CatPage from './pages/CatPage/CatPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cats/:id' component={CatPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
