import React from 'react'
import { render } from 'react-dom'
import Loadable from 'react-loadable';
import Preloader from './components/Preloader';

const App = Loadable({
  loader: () => import('./components/UserUI'),
  loading: Preloader,
  delay: 300
});

render(<App />, document.getElementById('app'))