import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Component/NavBarr';
import PostNavBar from './Component/PostNavBar.jsx';
import Slider from './Component/Slider.jsx';
import Cards from './Component/Cards.jsx';
import PostCards from './Component/PostCards.jsx';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App() {
  return (
    <div className="App">
      
      <NavBarr />
      <PostNavBar />
      <Slider />
      <Cards />
      <h3>Trending Today</h3>
      <PostCards />

      {/* Add the Google Map component */}
      <Map
        google={window.google}
        zoom={14}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Change this to your desired initial location
      />
    </div>
  );
}

// Wrap your App component with the GoogleApiWrapper, providing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7Kdvc6_JHHG7EWZYweHzvYQWEDe1bUsM'
})(App);
