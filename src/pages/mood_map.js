import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
// import * as d3g from "d3-geo";


// const berkeleyJSON = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

export const MoodMapViz = () => {
    // const berkeleyJSON = 'Berkeley_landarea_2015.geojson'
    // const berkeleyJSON = '/Berkeley_landarea_2015.geojson';
    // const berkeleyJSON = '/sales.json';
    // console.log(berkeleyJSON);
    // d3.json(berkeleyJSON).then((data)=> {console.log('geoJSON',data);})

    // const svgRef = React.useRef(null);

    // const [data,setData] = useState(null);
    // console.log('moodmap data',data);

    // useEffect(() => {
    //     // d3.json(berkeleyJSON).then(setData);
    //     renderMap();
    // },[]
    // );
    

    let projection = d3.geoEquirectangular();

    let geoGenerator = d3.geoPath()
  .projection(projection);
    return (
        <div>m</div>
    )
};

// export default MoodMapVis;