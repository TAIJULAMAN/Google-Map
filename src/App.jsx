// MAP_API_KEY="AIzaSyDvPLKp3jbXqZnybV92qe2wbJ4DWptExM4"
// MAP_ID="8c6fabe1934621aa"

import { Wrapper } from "@googlemaps/react-wrapper";
import "./App.css";
import MyMap from "./MyMap";

function App() {
  return (
    <Wrapper apiKey={"AIzaSyDvPLKp3jbXqZnybV92qe2wbJ4DWptExM4"}>
    <MyMap></MyMap>
  </Wrapper>
  );
}

export default App;




// <APIProvider apiKey={"AIzaSyDvPLKp3jbXqZnybV92qe2wbJ4DWptExM4"}>
// <div className="h-[700px]">
//   <Map center={position} zoom={10} mapId={"8c6fabe1934621aa"}>
//     <AdvancedMarker position={position} onClick={()=>setOpen(true)}>
//       <Pin background={"grey"} borderColor={"green"} glyphColor={"pink"}></Pin>
//     </AdvancedMarker>
//     {
//       open && 
//       (<InfoWindow position={position} onCloseClick={()=>setOpen(false)}>
//         <p>hey,you are in your position.</p>
//       </InfoWindow>)
//     }
//   </Map>
// </div>
// </APIProvider>



// // import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

// function App() {
//   const position = {lat: 53.54992, lng: 10.00678};

//   return (
//     <APIProvider apiKey={'YOUR API KEY HERE'}>
//       <Map center={position} zoom={10}>
//         <Marker position={position} />
//       </Map>
//     </APIProvider>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const Map = () => {
//   const [directions, setDirections] = useState(null);

//   // Define the initial and destination coordinates (latitude and longitude).
//   const origin = { lat: 37.7749, lng: -122.4194 }; // San Francisco, CA
//   const destination = { lat: 34.0522, lng: -118.2437 }; // Los Angeles, CA

//   // Set up Google Maps API options.
//   const mapOptions = {
//     disableDefaultUI: true, // Disable default UI controls
//   };

//   // Callback function to handle directions response.
//   const onDirectionsResponse = (result, status) => {
//     if (status === 'OK') {
//       setDirections(result);
//     } else {
//       console.error(`Directions request failed with status: ${status}`);
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//         center={origin}
//         zoom={7}
//         options={mapOptions}
//       >
//         <DirectionsService
//           options={{
//             origin,
//             destination,
//             travelMode: 'WALKING',
//           }}
//           callback={onDirectionsResponse}
//         />
//         {directions && <DirectionsRenderer directions={directions} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;
