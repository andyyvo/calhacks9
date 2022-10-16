import React from 'react';
import '../../styles/components/_Map.scss'; 
import MapSchoolCard from '../MapSchoolCard/MapSchoolCard';


function Map() {
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

    const [displayBusiness, setDisplayBusiness] = React.useState(false);
    const [displayChemistry, setDisplayChemistry] = React.useState(false);
    const [displayComputing, setDisplayComputing] = React.useState(false);
    const [displayEducation, setDisplayEducation] = React.useState(false);
    const [displayEngineering, setDisplayEngineering] = React.useState(false);
    const [displayEnvironment, setDisplayEnvironment] = React.useState(false);
    const [displayInformation, setDisplayInformation] = React.useState(false);
    const [displayJournalism, setDisplayJournalism] = React.useState(false);
    const [displayLaw, setDisplayLaw] = React.useState(false);
    const [displayLs, setDisplayLs] = React.useState(false);
    const [displayNatural, setDisplayNatural] = React.useState(false);
    const [displayOptometry, setDisplayOptometry] = React.useState(false);
    const [displayHealth, setDisplayHealth] = React.useState(false);
    const [displayPolicy, setDisplayPolicy] = React.useState(false);
    const [displayWelfare, setDisplayWelfare] = React.useState(false);
    
    const handleOnClickBusiness = () => {
        setDisplayBusiness(!displayBusiness);
    }
    const handleOnClickChemistry = () => {
        setDisplayChemistry(!displayChemistry);
    }
    const handleOnClickComputing = () => {
        setDisplayComputing(!displayComputing);
    }
    const handleOnClickEducation = () => {
        setDisplayEducation(!displayEducation);
    }
    const handleOnClickEngineering = () => {
        setDisplayEngineering(!displayEngineering);
    }
    const handleOnClickEnvironment = () => {
        setDisplayEnvironment(!displayEnvironment);
    }
    const handleOnClickInformation = () => {
        setDisplayInformation(!displayInformation);
    }
    const handleOnClickJournalism = () => {
        setDisplayJournalism(!displayJournalism);
    }
    const handleOnClickLaw = () => {
        setDisplayLaw(!displayLaw);
    }
    const handleOnClickLs = () => {
        setDisplayLs(!displayLs);
    }
    const handleOnClickNatural = () => {
        setDisplayNatural(!displayNatural);
    }
    const handleOnClickOptometry = () => {
        setDisplayOptometry(!displayOptometry);
    }
    const handleOnClickHealth = () => {
        setDisplayHealth(!displayHealth);
    }
    const handleOnClickPolicy = () => {
        setDisplayPolicy(!displayPolicy);
    }
    const handleOnClickWelfare = () => {
        setDisplayWelfare(!displayWelfare);
    }

    const image = "img/map.png";

    return (
        <div>
            <div className='map-container'>
                <img className="map-background-img" src={image}/>

                <img className="location-icon business" src="/icons/location.svg" alt="location icon business" onClick={handleOnClickBusiness}/>
                <img className="location-icon chemistry" src="/icons/location.svg" alt="location icon chemistry" onClick={handleOnClickChemistry}/>
                <img className="location-icon computing" src="/icons/location.svg" alt="location icon computing" onClick={handleOnClickComputing}/>
                <img className="location-icon education" src="/icons/location.svg" alt="location icon education" onClick={handleOnClickEducation}/>  
                <img className="location-icon engineering" src="/icons/location.svg" alt="location icon engineering" onClick={handleOnClickEngineering}/>
                <img className="location-icon environment" src="/icons/location.svg" alt="location icon environment" onClick={handleOnClickEnvironment}/>
                <img className="location-icon information" src="/icons/location.svg" alt="location icon information" onClick={handleOnClickInformation}/>
                <img className="location-icon journalism" src="/icons/location.svg" alt="location icon journalism" onClick={handleOnClickJournalism}/>
                <img className="location-icon law" src="/icons/location.svg" alt="location icon law" onClick={handleOnClickLaw}/>
                <img className="location-icon ls" src="/icons/location.svg" alt="location icon ls" onClick={handleOnClickLs}/>
                <img className="location-icon natural" src="/icons/location.svg" alt="location icon natural" onClick={handleOnClickNatural}/>      
                <img className="location-icon optometry" src="/icons/location.svg" alt="location icon optometry" onClick={handleOnClickOptometry}/>
                <img className="location-icon health" src="/icons/location.svg" alt="location icon health" onClick={handleOnClickHealth}/>
                <img className="location-icon policy" src="/icons/location.svg" alt="location icon policy" onClick={handleOnClickPolicy}/>
                <img className="location-icon welfare" src="/icons/location.svg" alt="location icon welfare" onClick={handleOnClickWelfare}/>s
            </div>
            {displayBusiness? 
                <MapSchoolCard school={schools.business} class={"business"} clickHandler={handleOnClickBusiness}/> : null
            }
            {displayChemistry? 
                <MapSchoolCard school={schools.chemistry} class={"chemistry"} clickHandler={handleOnClickChemistry}/> : null
            }
            {displayComputing? 
                <MapSchoolCard school={schools.computing} class={"computing"} clickHandler={handleOnClickComputing}/> : null
            }
            {displayEducation? 
                <MapSchoolCard school={schools.education} class={"education"} clickHandler={handleOnClickEducation}/> : null
            }
            {displayEngineering? 
                <MapSchoolCard school={schools.engineering} class={"engineering"} clickHandler={handleOnClickEngineering}/> : null
            }
            {displayEnvironment? 
                <MapSchoolCard school={schools.environment} class={"environment"} clickHandler={handleOnClickEnvironment}/> : null
            }
            {displayInformation? 
                <MapSchoolCard school={schools.information} class={"information"} clickHandler={handleOnClickInformation}/> : null
            }
            {displayJournalism? 
                <MapSchoolCard school={schools.journalism} class={"journalism"} clickHandler={handleOnClickJournalism}/> : null
            }
            {displayLaw? 
                <MapSchoolCard school={schools.law} class={"law"} clickHandler={handleOnClickLaw}/> : null
            }
            {displayLs? 
                <MapSchoolCard school={schools.ls} class={"ls"} clickHandler={handleOnClickLs}/> : null
            }
            {displayNatural? 
                <MapSchoolCard school={schools.natural} class={"natural"} clickHandler={handleOnClickNatural}/> : null
            }
            {displayOptometry? 
                <MapSchoolCard school={schools.optometry} class={"optometry"} clickHandler={handleOnClickOptometry}/> : null
            }
            {displayHealth? 
                <MapSchoolCard school={schools.health} class={"health"} clickHandler={handleOnClickHealth}/> : null
            }
            {displayPolicy? 
                <MapSchoolCard school={schools.policy} class={"policy"} clickHandler={handleOnClickPolicy}/> : null
            }
            {displayWelfare? 
                <MapSchoolCard school={schools.welfare} class={"welfare"} clickHandler={handleOnClickWelfare}/> : null
            }

        </div>
    );
}

export default Map;