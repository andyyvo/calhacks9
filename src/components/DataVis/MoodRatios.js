import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
import { Button } from '../Button/Button';
// d3 and react both modify dom, need to tell react to let d3 handle using useRef

const config = {
    anim_speed: 2000,
    w: window.innerWidth * 0.2,
    h: window.innerHeight * 0.7
};

//transition factories
function getTransitionCubic() {
    return d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
}

function getTransitionBouncy(overshoot = 1.7) {
    return d3.transition().duration(config.anim_speed).ease(d3.easeBackOut.overshoot(overshoot));
}

function getTransitionElastic(amp = 0.5, period = 0.4) {
    return d3.transition().duration(config.anim_speed).ease(d3.easeElasticOut.amplitude(amp).period(period));
}

// sort emotions descending
const sort_data = (data,desc=true) => {
    let newData = data; // make a copy?
    if (desc){
        newData.sort((a, b) => a.score - b.score);
    }
    else{
        newData.sort((a, b) => b.score - a.score);
    }
    newData = [...newData]
    return newData

};

export const MoodRatios = () => {
    // useState on data
    const [data,setData] = useState([
        {emotion: 'fear', score: 0.2},
        {emotion: 'anger', score: 0.1},
        {emotion: 'hopeful', score: 0.1},
        {emotion: 'surprise', score: 0.13},
        {emotion: 'happy', score: 0.17},
        {emotion: 'sad', score: 0.3}
    ]);

    const BarChartVis = ({data, setData}) => {
        // usRef for svg
        const svgRef = useRef(); // reference

        useEffect(()=>{
            const w = 400;
            const h = 400;
            // create svg
            const svg = d3.select(svgRef.current)
                .attr('width',w)
                .attr('height',h)
                .style('background','#ddd');

            // const domain = [0,1];

            let xScale = d3.scaleBand()
                .domain(data.map(d => d.emotion))
                .range([0, w])
                .paddingInner(.02)
                .paddingOuter(.02);
            let yScale = d3.scaleLinear()
                .domain([0,Math.max(...data.map(d => d.score)) * 1.2])
                .range([h,0]);

            // console.log('yscal',yScale.range());
            // plot data
            svg.selectAll('rect')
                .data(data, d => d.score)
                .join(
                    enter => enter.append("rect"))
                        .attr('x', d => xScale(d.emotion))
                        .attr('y', d => yScale(0))
                        .attr('width',xScale.bandwidth())
                        .attr('height', 0)
                    .call(enter => enter.transition(getTransitionCubic())
                        // .attr('x',d => xScale(d.emotion))
                        .attr('y', d => yScale(d.score))
                        .attr('width',xScale.bandwidth())
                        .attr('height',d =>  yScale(0) - yScale(d.score))
                        .attr('fill', "#fff")
                        .attr('stroke', '#000')
                    );


        },[data])

        return (
            <div className='bar-ex'>
                <svg ref={svgRef}></svg>
            </div>
        );
    };

    const LeaderBoardVis = ({data}) => {
        // usRef for svg
        const svgRef = useRef(null); // reference
        // useEffect to update DOM each time data changes
        useEffect(() => {
            if (data && svgRef.current) {
                // console.log('DATA CHANGED! bubble', data);
                // create svg
                const svg = d3.select(svgRef.current)
                    .attr('width',config.w)
                    .attr('height',config.h);
                    // .style('background','#ddd');
                // const domain = [0,1];

                let xScale = d3.scaleLinear()
                    .domain([0,1])
                    .range([0,config.w]);
                    
                let yScale = d3.scaleBand()
                    .domain(data.map(d => d.emotion))
                    .range([config.h * 0.95, config.h * 0.05])
                    .paddingInner(20)
                    .paddingOuter(1);

                let rScale = d3.scaleLinear()
                    .domain([0,Math.max(...data.map(d=>d.score))])
                    .range([40,70]);
                    // .range([10,config.h/12]);

                // let move_to_front = () => {
                //     this.raise();
                // }

                // console.log('yscal',yScale.range());
                // plot data
                svg.selectAll('image')
                    .data(data, d => d.emotion)
                    .join(
                        enter => {
                            let bubbleGroups = enter
                            .append("g")
                                .attr('id', d => d.emotion + '-bubble-group')
                                .attr('class', 'bubble-group');
                            
                            bubbleGroups 
                                .append("text")
                                .text(d => d.emotion)
                                .attr("x", (d,i) => {
                                    xScale(0.6)
                                })
                                .attr("y", config.h)
                                .call(enter => enter.transition(getTransitionElastic())
                                    .attr("y", d => yScale(d.emotion))
                                )
                            bubbleGroups 
                                .append("text")
                                .text(d => (d.score * 100) + "%")
                                .attr("x", (d,i) => {
                                    xScale(0.6)
                                })
                                .attr("y", config.h + config.h * 0.05)
                                .call(enter => enter.transition(getTransitionElastic())
                                    .attr("y", d => yScale(d.emotion) + config.h * 0.05)
                                )
                            // bubble_texts
                            //     .call(move_to_front())

                            bubbleGroups 
                                .append("image")
                                    .attr('id', d => d.emotion + '-bubble')
                                    .attr('percent', d => d.score)
                                    .attr("xlink:href", d => "img/face_" + d.emotion+ ".svg")
                                    // .attr("x", d => xScale(0.5))
                                    .attr("x", (d,i) => xScale(0.3))
                                    .attr("y", config.h)
                                    .attr("width", d => {return rScale(d.score)})
                                    .attr("height", d => rScale(d.score))
                                    .call(enter => enter.transition(getTransitionElastic())
                                        .attr("y", d => yScale(d.emotion))
                                    )
                        }
                    );
            }
        },[data,svgRef.current])

        return (
            <div className='mood-ratio-div' >
                <SortButton data={data} setData={setData} desc={true} btnTxt = {"descending"} />
                <svg ref={svgRef}></svg>
                <SortButton data={data} setData={setData} desc={false} btnTxt = {"ascending"} />
            </div>
        );
    };

    // sort data after to update state
    // sort_data(data,true);
    
    const SortButton = ({data, setData, desc, btnTxt}) => {
        return <span onClick={() => setData(sort_data(data,desc))}><Button variant='primary' padding='small'><p className='bold'>{btnTxt}</p></Button></span>

    }

    return ( 
        <>
            {/* <BarChartVis data={data} setData={setData}/> */}
            
            <LeaderBoardVis data={data}/>
            
        </>
    )
};