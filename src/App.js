import React, { useState, useEffect } from 'react';
import KalleHallden from './components/KalleHallden.js';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyAXepgz7hf27r3wCilGULIpGszcmXRB99g';
  const playlistId = 'UUWr0mx597DnSGLFk1WfvSkQ';

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=900&playlistId=${playlistId}&key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, [apiKey, playlistId]);

  return (
    <div className="App">
      <h1 className="title">Videos from Kalle Hallden</h1>
      <h3 className="video-count">Total Videos: {videos.length}</h3>
      <KalleHallden videos={videos} />
    </div>
  );
}

export default App;
