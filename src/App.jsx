import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomeLayout from "./layout/HomeLayout/HomeLayout";
import PodcastList from "./views/PodcastsList/PodcastsList";
import PodcastDetail from "./views/PodcastDetail/PodcastDetail";
import EpisodeDetail from "./views/EpisodeDetail/EpisodeDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<PodcastList />} />
            <Route path={"/podcast/:podcastId"} element={<PodcastDetail />} />
            <Route
              path={"/podcast/:podcastId/episode/:episodeId"}
              element={<EpisodeDetail />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
