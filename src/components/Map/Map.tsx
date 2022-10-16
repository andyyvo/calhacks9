function Map() {
    // placeholder map image
    const path = process.env.PUBLIC_URL;
    const image = "img/placeholder.png";

    return (
        <img src={path + image} style={{width:"80%"}}/>
    );
}

export default Map;