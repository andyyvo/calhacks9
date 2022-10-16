import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import Map from '../Map/Map';

const config = {
    anim_speed: 2000,
    // w: window.innerWidth * 0.7,
    w: 952 * 0.8,
    h: 647 * 0.8,
    // h: window.innerHeight * 0.7
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

export const MoodMap = () => {
    // school coords
    const schools = {
        business: "The Haas School of Business",
        chemistry: "The College of Chemistry",
        computing: "The Division of Computing, Data Science & Society",
        education: "The Graduate School of Education",
        engineering: "The College of Engineering",
        environment: "The College of Environmental Design",
        information: "The School of Information",
        journalism: "The Graduate School of Journalism",
        law: "The School of Law",
        ls: "The College of Letters & Science",
        natural: "The Rausser College of Natural Resources",
        optometry: "The School of Optometry",
        health: "The School of Public Health ",
        policy: "The Richard and Rhoda Goldman School of Public Policy",
        welfare: "The School of Social Welfare"
    }

    const school_coords = {
        "Business": { x: 0.5, y: .75 },
        "Chemistry": { x: 0, y: 0 },
        "Computing, Data Science & Society": { x: 0, y: 0 },
        "Education": { x: 0, y: 0 },
        "Engineering": { x: 0, y: 0 },
        "Environmental Design": { x: 0, y: 0 },
        "Information": { x: .51, y: .53 },
        "Journalism": { x: .45, y: .2 },
        "Law": { x: 0, y: 0 },
        "Letters & Science": { x: 0, y: 0 },
        "Natural Resources": { x: 0, y: 0 },
        "Optometry": { x: 0, y: 0 },
        "Public Health": { x: 0, y: 0 },
        "Public Policy": { x: 0, y: 0 },
        "Social Welfare": { x: 0, y: 0 }
    };

    // background map image
    const bgImage = "img/placeholder.png";

    const MapVis = () => {
        // import data
        const raw_data = [
            {
                school: "Information", scores:
                    [{ emotion: 'fear', score: 0.2 },
                    { emotion: 'anger', score: 0.1 },
                    { emotion: 'hopeful', score: 0.1 },
                    { emotion: 'surprise', score: 0.13 },
                    { emotion: 'happy', score: 0.17 },
                    { emotion: 'sad', score: 0.3 }]
            },
            {
                school: "Journalism", scores:
                    [{ emotion: 'fear', score: 0.4 },
                    { emotion: 'anger', score: 0.05 },
                    { emotion: 'hopeful', score: 0.05 },
                    { emotion: 'surprise', score: 0.1 },
                    { emotion: 'happy', score: 0.15 },
                    { emotion: 'sad', score: 0.25 }]
            }
        ];

        // let expanded_data = raw_data.forEach((d)=>{console.log('raw_data',d)});
        // let expanded_data = raw_data.forEach(d => d.scores.forEach(r => console.log('school',d.school,'row',r)));
        let expanded_data = [];
        raw_data.forEach(
            d => d.scores.forEach(
                r => {
                    // console.log('school', d.school, 'row', r);
                    expanded_data.push({ school: d.school, emotion: r.emotion, score: r.score });
                }
            )
        );
        console.log('expdata', expanded_data);
        const [data, setData] = useState(expanded_data);

        // usRef for svg
        const svgRef = useRef(null); // reference
        // useEffect to update DOM each time data changes

        useEffect(() => {
            // console.log('DATA CHANGED! bubble', data);
            // create svg
            const svg = d3.select(svgRef.current)
                .attr('width', config.w)
                .attr('height', config.h)
                .style("background", "url(https://drive.google.com/uc?export=view&id=1j5aVmMLt7iNCUYs1BAYU8B_KmSBACLNT) no-repeat")
                .style("background-size", "contain");

            let xScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, config.w]);

            let yScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, config.h]);

            let rScale = d3.scaleLinear()
                .domain([0, Math.max(...data.map(d => d.score))])
                .range([10, 60]);

            // plot images for mood
            let map_spheres = svg.selectAll('image')
                .data(data, d => d.school + d.emotion)
                .join(
                    enter => enter
                        .append('image')
                        .attr('id', d => d.school + '-' + d.emotion + '-bubble')
                        .attr('class', d => 'school-bubble')
                        .attr('percent', d => d.score)
                        .attr("xlink:href", d => "img/face_" + d.emotion + ".svg")
                        
                        .attr('x', d => {
                            return xScale(school_coords[d.school]['x']);
                        })
                        .attr('y', d => {
                            return yScale(school_coords[d.school]['y']);
                        })
                        .attr("width", 1)
                        .attr("height", 1)
                        .style('opacity', 0.7)
                        .call(enter => enter.transition(getTransitionCubic())
                            .attr("width", d => rScale(d.score))
                            .attr("height", d => rScale(d.score))
                        )
                        .on('mouseover', (e) => {
                            e.transition()
                                .duration('50')
                                .attr("width", d => rScale(2 * d.score))
                                .attr("height", d => rScale(2 * d.score))
                                .style('opacity', 1);
                        }
                        )
                        .on('mouseout', (e) => {e.transition()
                                .duration('50')
                                .style('opacity', .7);
                        })
                );

        }, [data, svgRef.current])

        return (
            <div className='line-ex'>
                <svg ref={svgRef}></svg>
            </div>
        );
    };

    return (
        <>
            <MapVis />
            {/* <Map /> */}
            {/* <img src={bgImage} style={{width:"80%", position:"absolute", top:"150px", left:"200px"}}/> */}
        </>
    );
};