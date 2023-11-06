


import { useEffect, useRef, useState } from "react";
// import {
//   Scene,
//   PerspectiveCamera,
//   AmbientLight,
//   WebGLRenderer,
//   Matrix4,
// } from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Direction from "./Direction";
import Animation from "./Animation";

const mapOptions = {
  mapId: "8c6fabe1934621aa",
  center: { lat: 43.661036, lng: -79.391277 },
  zoom: 15,
  disableDefaultUI: true,
  heading: 25,
  tilt: 60
};

const MyMap = () => {
  const [route, setRoute] = useState();
  const [map, setMap] = useState();
  const ref = useRef();
  // const overlayRef = useRef();
  useEffect(() => {
    // if (!overlayRef.current) {
      const instance = new window.google.maps.Map(ref.current, mapOptions);
      setMap(instance);
        // overlayRef.current = createOverlay(instance);
    // }
  }, []);
  console.log(route)
  return (
    <>
      <div ref={ref} id="map" className="h-[700px]"></div>
      {map && <Direction setRoute={setRoute}></Direction>}
      {map && route && <Animation map={map} route={route}></Animation>}
    </>
  );
};
export default MyMap;



// function createOverlay(map) {
//   const overlay = new google.maps.WebGLOverlayView();
//   let renderer, scene, camera, loader;

//   overlay.onAdd = () => {
//     scene = new Scene();
//     camera = new PerspectiveCamera();
//     const light = new AmbientLight(0xffffff, 0.9);
//     scene.add(light);
//     loader = new GLTFLoader();
//     loader.loadAsync("/cool man/scene.gltf").then((object) => {
//       const group = object.scene;
//       group.scale.setScalar(25);
//       group.rotation.set(Math.PI / 2, 0, 0);
//       group.position.setZ(-120);
//       scene.add(group);
//     });
//   };

//   overlay.onContextRestored = ({ gl }) => {
//     renderer = new WebGLRenderer({
//       convas: gl.convas,
//       context: gl,
//       ...gl.getContextAttributes(),
//     });
//     renderer.autoClear = false;

//     loader.manager.onLoad = () => {
//       renderer.setAnimationLoop(() => {
//         map.moveCamera({
//           tilt: mapOptions.tilt,
//           heading: mapOptions.heading,
//           zoom: mapOptions.zoom,
//         });

//         if (mapOptions.tilt < 60) {
//           mapOptions.tilt += 0.5;
//         } else if (mapOptions.zoom < 18) {
//           mapOptions.zoom += 0.05;
//         } else if (mapOptions.heading < 125) {
//           mapOptions.heading += 0.5;
//         } else {
//           renderer.setAnimationLoop(null);
//         }
//       });
//     };
//   };

//   overlay.onDraw = ({ transformer }) => {
//     const matrix = transformer.fromLatLngAltitude({
//       lat: mapOptions.center.lat,
//       lng: mapOptions.center.lng,
//       altitude: 120,
//     });
//     // console.log(matrix);
//     camera.projectionMatrix = new Matrix4().fromArray(matrix);
//     overlay.requestRedraw();
//     renderer.render(scene, camera);
//     renderer.resetState();
//   };
//   overlay.setMap(map);

//   return overlay;
// }
