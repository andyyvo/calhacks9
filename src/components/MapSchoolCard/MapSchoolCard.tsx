import React, { useRef, useEffect } from 'react';
import '../../styles/components/_Map.scss';     

function MapSchoolCard(props:any) {

    // Close the card on clicking outside
    let ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                props.clickHandler();
            }
        });
    });

    return (
        <div className={"text-box " + props.class} ref={ref}>
            <p>{props.school}</p>
            <ul>
                <li>Positive: {props.positive_ratio}%</li>
                <li>Hopeful: {props.hopeful_ratio}%</li>
                <li>Negative: {props.negative_ratio}%</li>
                <li>Fear: {props.fear_ratio}%</li>
                <li>Angry: {props.angry_ratio}%</li>
                <li>Surprise: {props.surprise_ratio}%</li>
            </ul>
        </div>
    );
}

export default MapSchoolCard;