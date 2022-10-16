import '../../styles/components/_MapLegend.scss';

function MapLegend(props: { mood: string; color: string; }) {
    return (
        <div className='margin'>
            <div className='color-box' style={{backgroundColor: props.color}}></div>
            <p className='label'>{props.mood}</p>
        </div> 
    );
}

export default MapLegend;