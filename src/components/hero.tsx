import React, { FunctionComponent } from 'react'; 


interface HeroProps {
    title: string,
    subtitle: string,
    subtitleSecondPart: string
}


const Hero: FunctionComponent<HeroProps> = ({ title, subtitle, subtitleSecondPart }) => <div className="hero">
    <h1 className="hero__title">{title}</h1>
    <p className="hero__subtitle">{subtitle}</p>
    <p className="hero__subtitle">{subtitleSecondPart}</p>
</div>

export default Hero;