import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const createTrackFromCurve = (curve) => {

const points =curve.getSpacedPoints(curve.points.length*10);
const positions = points.map((point)=>point.toArray()).flat();

    return new Line2 (
       
new LineGeometry().setPositions(positions),
new LineMaterial({
    color:0xffb703,
    linewidth:0
})

    );
};

export default createTrackFromCurve;