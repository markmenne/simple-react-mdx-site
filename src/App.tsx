import React, { Component, Suspense } from 'react'
import Menu from './components/menus/Menu';
import RouteRequest from './routes/RouteRequest';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <RouteRequest />
        </Suspense>
      </div>
    )
  }
}

export default App;
