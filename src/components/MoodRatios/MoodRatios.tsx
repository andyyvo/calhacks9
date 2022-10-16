import React from "react";
import MoodRatio from "../MoodRatio/MoodRatio"

function MoodRatios() {

    // dummy data
    const ratioList = [{mood: "Postive", img: "positive_yellow_face.png", ratio: 25}, {mood: "Hopeful", img: "hopeful_green_face.png", ratio: 15}, {mood: "Fear", img: "fear_blue_face.png", ratio: 20}, {mood: "Angry", img: "anger_red_face.png", ratio: 20}, {mood: "Negative", img: "negative_grey_face.png", ratio: 20}, {mood: "Surprise", img: "surprise_purple_face.png", ratio: 20}]

    return (
        <div >
            {ratioList.map((item) => (
                <MoodRatio ratio={item.ratio} mood={item.mood} img={item.img}/>
            ))}
        </div>
    );
}

export default MoodRatios;