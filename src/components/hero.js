import React from 'react';

const Hero = (props) => {
    return (
        <div className="hero">
            <h1 className="hero__title">{props.title}</h1>
            <p className="hero__subtitle">{props.subtitle}</p>
            <p className="hero__subtitle">{props.subtitleSecondPart}</p>
        </div>
    );
}

export default Hero;