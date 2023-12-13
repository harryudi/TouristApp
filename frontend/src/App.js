// import { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import {Room} from "@material-ui/icons"


function App() {
  return (
    <div className="App">
      <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: 3.3792,
        latitude: 6.5244,
        zoom: 10
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      <Marker
      longitude={3.3792} 
      latitude={6.5244} 
      // offsetLeft= {-20}
      // offsetTop={-10}
      >
        <Room style={{fontSize:visualViewport.zoom}}/>
      <div>Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
      {/* <img src="./public/images/pin.png" alt="" /> */}
      </Marker>
      </Map>
    </div>
  );
}

export default App;
