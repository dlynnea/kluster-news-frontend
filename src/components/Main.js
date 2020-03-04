import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './Feed';
import Headlines from './Headlines';
import About from './About';
import Podcasts from './Podcasts';
import Weather from './Weather';
import Quanta from '../containers/Quanta';
import Verge from '../containers/Verge';
import Unsplash from '../containers/Unsplash';
import Login from './Login';
import Register from './Register';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/users' component={Register} />
      <Route exact path='/headlines' component={Headlines} />
      <Route path='/about' component={About} />
      <Route path='/podcasts' component={Podcasts} />
      <Route path='/weather' component={Weather} />
      <Route path='/unsplash' component={Unsplash} />
      <Route path='/articles' component={Quanta} />
      <Route path='/verge' component={Verge} />
    </Switch>
  </main>
)

export default Main;