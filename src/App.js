import React from "react";
import KalleHallden from "./components/KalleHallden";
// import './App.css';
// import './index.css';

const App = () => {
  const apiKey = 'AIzaSyAXepgz7hf27r3wCilGULIpGszcmXRB99g';
  const channelId = 'UCDu3Eai86fidkAZco0l8TzA';

  return (
    <div className="App">
      <KalleHallden apiKey={apiKey} channelId={channelId} />
    </div>
  );
}

export default App;
