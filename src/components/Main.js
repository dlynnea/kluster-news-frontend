import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './Feed';
import Headlines from './Headlines';
import About from './About';
import Podcasts from './Podcasts';
import Weather from './Weather';
import Articles from '../containers/Articles';
import Unsplash2 from '../containers/Unsplash2';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed} />
      <Route exact path='/headlines' component={Headlines} />
      <Route path='/about' component={About} />
      <Route path='/podcasts' component={Podcasts} />
      <Route path='/weather' component={Weather} />
      <Route path='/unsplash' component={Unsplash2} />
      {/* <Route path='/articles' component={Articles} /> */}
    </Switch>
  </main>
)

export default Main;