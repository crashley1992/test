import React from 'react';
import './about.css';
import profile from './profile.jpg';
import Image from 'react-bootstrap/Image';


const About = () => {
    return (
    <div className="container">
        <div className="profile-container">
            <Image src={profile} className="profile-img"/>
            </div>
            <h3 className="about-title">About Me</h3>
            <p className="about-text">I am a web developer and UW Coding bootcamp graduate with experience primarily in HTML, CSS, and Javascript. I have a strong interest in full-stack development, but am equally excited to work either on the front or back-end. Additionally, I love spending my free time learning new programming skills and getting involved with the community by participating in the #100DaysofCode Twitter Challenge and attending She's Coding Meetups. I love working collaboratively with a like-minded team to ensure optimal results for user-centered and technology-centered designs.</p>
    </div>
    )
}

export default About;
