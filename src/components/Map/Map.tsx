import MapLegendBar from "../MapLegendBar/MapLegendBar";

function Map() {
    const path = process.env.PUBLIC_URL;
    const image = "img/placeholder.png";
    return (
        <div>
            <img src={path + image} style={{width:"80%"}}/>
        </div>
    );
}

export default Map;