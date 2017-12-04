import React from 'react';
import Popular from './Popular';
import { 
  BrowserRouter as Router,
  ReactRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function() {
              return <p>Not Found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}