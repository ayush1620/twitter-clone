import React from 'react';
import SideBar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';

function App() {
  return (
    <div className="app">
      {/*SideBar*/}
      <SideBar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
