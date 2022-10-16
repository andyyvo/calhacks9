import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
// d3 and react both modify dom, need to tell react to let d3 handle using useRef

const config = {
    anim_speed: 2000,
    w: 400,
    h: 400
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

export const LineChartVis = () => {
    // useState on data
    const data = useState([
        {x:1,y:2},
        {x:3,y:7},
        {x:4,y:1},
        {x:2,y:8},
        {x:9,y:4}
    ]);
    // console.log(data);
    // usRef for svg
    const svgRef = useRef(); // reference
    // useEffect to update DOM each time data changes
    useEffect(()=>{
        const w = 400;
        const h = 400;
        // create svg
        const svg = d3.select(svgRef.current)
            .attr('width',w)
            .attr('height',h)
            .style('background','#ddd');

        const domain = [0,10];
        let xScale = d3.scaleLinear()
            .domain(domain)
            .range([0,w]);
        let yScale = d3.scaleLinear()
            .domain([h,0])
            .range(domain);

        // plot data
        svg.selectAll('rect')
            .data(data[0], d => d.x)
            .join(
                enter => enter.append("rect"))
            .attr('width','10px')
            .attr('height','10px')
            .attr('x',d => xScale(d.x))
            .attr('y',d => yScale(d.y))
            .attr("fill", "#fff")
            .attr("stroke", '#000');


    },[data])

    return (
        <div className='line-ex'>
            <svg ref={svgRef}></svg>
        </div>
    );

}

export const MoodMapVis = () => {
};


export const AllViz = () => {
    // useState on data
    const [data,setData] = useState([
        {emotion: 'fear', score: 0.2},
        {emotion:'anger', score: 0.1},
        {emotion:'anticipation', score: 0.1},
        {emotion:'surprise', score: 0.13},
        {emotion:'joy', score: 0.17},
        {emotion:'sadness', score: 0.3}
    ]);
    
    useEffect(()=>{console.log('global data changed')},
    [data]);

    const BarChartVis = ({data, setData}) => {
        // usRef for svg
        const svgRef = useRef(); // reference
        // useEffect to update DOM each time data changes
        // useEffect(() => {
        //     alert(`dadsadasd changed: ${data}`);
        // });

        useEffect(()=>{
            // console.log('DATA CHANGED! bar',data);
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
                console.log('DATA CHANGED! bubble', data);
                // create svg
                const svg = d3.select(svgRef.current)
                    .attr('width',config.w)
                    .attr('height',config.h)
                    .style('background','#ddd');
                // const domain = [0,1];

                let xScale = d3.scaleLinear()
                    .domain([0,1])
                    .range([0,config.w]);
                    
                let yScale = d3.scaleBand()
                    .domain(data.map(d => d.emotion))
                    .range([config.h * 0.95, config.h * 0.05]);
                
                let rScale = d3.scaleSqrt()
                    .domain(data.map(d => d.score))
                    .range([10,config.h/12]);

                // console.log('yscal',yScale.range());
                // plot data
                svg.selectAll('circle')
                    .data(data, d => d.emotion)
                    .join(
                        enter => enter.append("circle"))
                            .attr('id', d => d.emotion + '-bubble')
                            .attr('cx', xScale(0.5))
                            .attr('cy', config.h)
                            .attr('r', d => rScale(d.score))
                            // .attr('height', 0)
                        .call(enter => enter.transition(getTransitionElastic())
                            // .attr('x',d => xScale(d.emotion))
                            .attr('cx', xScale(0.5))
                            .attr('cy', d => yScale(d.emotion))
                            .attr('fill', "#fff")
                            .attr('stroke', '#000')
                        );

            }
        },[data,svgRef.current])

        return (
            <div className='line-ex'>
                <svg ref={svgRef}></svg>
            </div>
        );
    };

    // sort emotions descending
    const sort_data = (data,desc=true) => {
        let newData = data; // make a copy?
        if (desc){
            newData.sort((a, b) => b.score - a.score);
        }
        else{
            newData.sort((a, b) => a.score - b.score);
        }
        newData = [...newData]
        return newData

    };

    const SortButton = ({data, setData, desc}) => {
        return <button onClick={() => setData(sort_data(data,desc))}>sort desc?{desc}</button>

    }

    return ( 
        <>
            <BarChartVis data={data} setData={setData}/>
            <SortButton data={data} setData={setData} desc={true}/>
            {/* <SortButton data={data} setData={setData} desc={false}/> */}
            <LeaderBoardVis data={data}/>
        </>
    )
};