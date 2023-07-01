import { AboutStyle } from '@/styles/about'
import React from 'react'
import Image from 'next/image'
import { Aboutt } from '../../public/image'


const About = () => {
  return (
    <AboutStyle>
       <section>
          <h4>About Us</h4>
          <h1>Hi, We’re Rhivet Networks</h1>
          <p className='p'>At Rhivet Networks, we are passionate about protecting businesses and individuals from evolving cyber threats. With years of experience and a team of dedicated experts, we deliver cutting-edge cybersecurity solutions tailored to your specific needs. Learn more about our journey and commitment to safeguarding your digital assets.</p>
          <div className='img'>
            <Image src={Aboutt} alt='img'/>
            </div>
            <div className="story">
              <div>
              <h5>How it Started</h5>
              <h2>Our Story</h2>
              </div>
              <div className='text'>
              <p>Since our inception, we have been driven by a vision to make the digital world a safer place. We understand the critical importance of securing sensitive data and preventing cyberattacks. Through continuous research, industry expertise, and a client-centered approach, we have helped numerous organizations enhance their security posture and achieve peace of mind. Join us as we continue to innovate, protect, and empower businesses in the face of ever-evolving cyber threats.</p>
            </div>
            </div>
            <div className="team">
              <h4>Rhivet Team</h4>
              <h2>Meet the team</h2>
            </div>
       </section>
    </AboutStyle>
  )
}

export default About
