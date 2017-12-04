import React from 'react';
import Popular from './Popular';
import { 
  BrowserRouter as Router,
  ReactRouter,
  Route 
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    );
  }
}