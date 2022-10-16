import '../../styles/components/_MapLegendBar.scss';
import MapLegend from '../MapLegend/MapLegend';

function MapLegendBar() {
    const moodColorList = [{mood: "mood1", color: "#95B0E5"}, {mood: "mood2", color: "#8DC99C"}, {mood: "mood3", color: "#FFC466"}, {mood: "mood4", color: "#EA8F7A"}, {mood: "mood5", color: "#C5A6C6"}, {mood: "mood6", color: "#D9D9D9"}];
    return (
        <div className='bar'>
            {moodColorList.map((item) => (
                <MapLegend mood={item.mood} color={item.color}/>
            ))}
        </div>
    );
}

export default MapLegendBar;