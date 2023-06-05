import React from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.scss';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import PodcastList from './views/PodcastsList/PodcastsList';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
           <Route index element={<PodcastList />} />
           
          </Route >

        </Routes>

      </Router>

    </div>
  );
}

export default App;