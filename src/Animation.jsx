import { ThreeJSOverlayView } from "@googlemaps/three";
import { useEffect, useRef } from "react";
import {CatmullRomCurve3, Vector3 } from "three";
import createTrackFromCurve from "./createTrackFromCurve";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const Animation = ({mapOptions , map, route}) => {
const overlayRef= useRef();
const trackRef=useRef();
useEffect(()=>{
    map.setCenter(route[Math.floor(route.length/2)],17);
    if(!overlayRef.current){
        overlayRef.current=new ThreeJSOverlayView(mapOptions.center);
        overlayRef.current.setMap(map);
    }
    const scene =  overlayRef.current.getScene();
    const points =route.map((p)=>overlayRef.current.latLngAltToVector3(p));
    const curve =new CatmullRomCurve3(points);
// track
    if(trackRef.current){
        scene.remove(trackRef.current);
    }
    trackRef.current = createTrackFromCurve(curve);
    scene.add(trackRef.current);
//model
loadModel() 
    overlayRef.current.update=()=>{
        trackRef.current.material.resolution.copy(
            overlayRef.current.getViewportSize()
        )
    }
overlayRef.current.requestRedraw();

return () =>{
    scene.remove(trackRef.current);
}


},[route]);
    return (
       null
    );
};

export default Animation;

async function loadModel(){
    const  loader = new GLTFLoader();
    loader.loadAsync("/cool man/scene.gltf");
}