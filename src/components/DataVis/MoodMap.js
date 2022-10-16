import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import Map from '../Map/Map'; 

const config = {
    anim_speed: 2000,
    w: 952,
    h: 647,
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

    const school_coords = {
        "Business": { x: 0.5, y: .75 },
        "Chemistry": { x: 0, y: 0 },
        "Computing, Data Science & Society": { x: 0, y: 0 },
        "Education": { x: 0, y: 0 },
        "Engineering": { x: 0, y: 0 },
        "Environmental Design": { x: 0, y: 0 },
        "Information": { x: .51, y: .53 },
        "Journalism": { x: .45, y: .2 },
        "Law": { x: .78, y: .68 },
        "Letters & Science": { x: 0, y: 0 },
        "Natural Resources": { x: 0, y: 0 },
        "Optometry": { x: .7, y: .52 },
        "Public Health": { x: .05, y: .33 },
        "Public Policy": { x: 0, y: 0 },
        "Social Welfare": { x: 0, y: 0 }
    };


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // background map image
    const MapVis = () => {
        // import data
        const raw_data = [
            {
                school: "Information", scores:
                    [{ emotion: 'fear', score: 0 },
                    { emotion: 'anger', score: 0.1 },
                    { emotion: 'hopeful', score: 0.1 },
                    { emotion: 'surprise', score: 0.1 },
                    { emotion: 'happy', score: 0.65 },
                    { emotion: 'sad', score: 0.05 }]
            },
            {
                school: "Journalism", scores:
                    [{ emotion: 'fear', score: 0.4 },
                    { emotion: 'anger', score: 0.05 },
                    { emotion: 'hopeful', score: 0.05 },
                    { emotion: 'surprise', score: 0.1 },
                    { emotion: 'happy', score: 0.15 },
                    { emotion: 'sad', score: 0.25 }]
            },
            {
                school: "Law", scores:
                    [{ emotion: 'fear', score: 0.1 },
                    { emotion: 'anger', score: 0.7 },
                    { emotion: 'hopeful', score: 0.05 },
                    { emotion: 'surprise', score: 0.05 },
                    { emotion: 'happy', score: 0.05 },
                    { emotion: 'sad', score: 0.05 }]
            },
            {
                school: "Public Health", scores:
                    [{ emotion: 'fear', score: 0.05 },
                    { emotion: 'anger', score: 0.05 },
                    { emotion: 'hopeful', score: 0.55 },
                    { emotion: 'surprise', score: 0.05 },
                    { emotion: 'happy', score: 0.1 },
                    { emotion: 'sad', score: 0.2 }]
            },
            {
                school: "Optometry", scores:
                    [{ emotion: 'fear', score: 0.6 },
                    { emotion: 'anger', score: 0.1 },
                    { emotion: 'hopeful', score: 0 },
                    { emotion: 'surprise', score: 0.05 },
                    { emotion: 'happy', score: 0 },
                    { emotion: 'sad', score: 0.25 }]
            },
        ];

        let expanded_data = [];
        raw_data.forEach(
            d => d.scores.forEach(
                r => {
                    // console.log('school', d.school, 'row', r);
                    expanded_data.push({ school: d.school, emotion: r.emotion, score: r.score });
                }
            )
        );

        // set data using useState
        const [data, setData] = useState(expanded_data);

        // usRef for svg
        const svgRef = useRef(null); // reference

        // useEffect to update DOM each time data changes
        useEffect(() => {
            // create svg
            const svg = d3.select(svgRef.current)
                .attr('width', config.w)
                .attr('height', config.h)
                .style("background", "url(https://drive.google.com/uc?export=view&id=1j5aVmMLt7iNCUYs1BAYU8B_KmSBACLNT) no-repeat")
                .style("background-size", "contain")
                ;
        
            const modifyData = (data) => {
                let moodImages = d3.selectAll('.school-bubble');
                // console.log('modifying',newData);
                data.forEach((d, i) => {
                    // d.score = d.score + randomIntFromInterval(-100, 100)/100;
                    d.score = randomIntFromInterval(5, 70)/100;
                })
                moodImages.merge(moodImages)
                    .transition(getTransitionCubic())
                    .attr("width", d => { console.log('updating'); return rScale(d.score) })
                    .attr("height", d => rScale(d.score));
                let newData = data;
                return newData
            }
            const weRollInterval = setInterval(() => {
                setData(modifyData(data));
            }
                , 4000);

            let xScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, config.w]);

            let yScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, config.h]);

            let rScale = d3.scaleLinear()
                .domain([0, Math.max(...data.map(d => d.score))])
                .range([15, 40]);

            // map tooltip
            let tooltip_a = d3.select("body")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity", 0)
                .style("position", "absolute")
                .style("text-align", "left")
                .style("padding", "2px")
                .style("background-color", "#ddd")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("border-radius", "5px")
            let tooltip_content = "";

            // move to front
            // move fn
            d3.selection.prototype.moveToFront = function () {
                return this.each(function () {
                    this.parentNode.appendChild(this);
                });
            };

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
                            return xScale(school_coords[d.school]['x'] + (Math.random() - 0.5) * 0.1);
                        })
                        .attr('y', d => {
                            return yScale(school_coords[d.school]['y'] + (Math.random() - 0.5) * 0.1);
                        })
                        .attr("width", 1)
                        .attr("height", 1)
                        .style('opacity', 0.7)
                        .call(enter => enter.transition(getTransitionCubic())
                            .attr("width", d => rScale(d.score))
                            .attr("height", d => rScale(d.score))
                        )
                        .on('mouseenter', function (event, d) {
                            d3.select(this)
                                .transition()
                                .duration(50)
                                // .attr("width", d => rScale(d.score) * 1.2)
                                // .attr("height", d => rScale(d.score) * 1.2)
                                .style('opacity', 1);

                            tooltip_a.transition()
                                .duration(200)
                                .style("opacity", .8);
                            tooltip_content = "<b>" + d.school + " (" + d.emotion + "): </b>" + d.score;
                            tooltip_a.html(tooltip_content)
                                .style("left", (event.pageX + 10) + "px")
                                .style("top", (event.pageY) + "px");
                        }
                        )
                        .on('mouseleave', (event, d) => {
                            tooltip_a.transition()
                                .duration(500)
                                .style("opacity", 0);

                            // d3.select(this)
                            //     .transition()
                            //     .duration(50)
                            //     .attr("width", d => rScale(d.score))
                            //     .attr("height", d => rScale(d.score))
                            //     .style('opacity', .7);
                        },
                            update => update
                                .transition(getTransitionCubic())
                                .attr("width", d => { console.log('update'); return rScale(d.score) })
                                .attr("height", d => rScale(d.score)))
                );

            // clear interval after effect done
            // return () => clearInterval(weRollInterval);
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
        </>
    );
};