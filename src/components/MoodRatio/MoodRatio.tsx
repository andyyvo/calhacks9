import '../../styles/components/_MoodRatio.scss';

function MoodRatio(props: { mood: string; ratio: number; img: string }) {

    const mood = props.mood;
    const ratio = props.ratio;
    const path = process.env.PUBLIC_URL;
    const img = "img/" + props.img;

    return (
        <div className='ratio-container'>
            <img className='face-img' src={path + img}/>
            <div className='ratio-label'>
                <h3>{mood}</h3>
                <h3>{ratio}%</h3>
            </div>
        </div>
    );
}

export default MoodRatio;