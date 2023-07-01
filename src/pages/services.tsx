import { ServiceStyle } from '@/styles/services'
import React from 'react'
import Contact from '@/component/contact'
import { services } from '@/utiliities';
import { ServiceCards } from '@/component';

const Services = () => {
  const numItems: number = 3;

  return (
    <ServiceStyle>
      <section>
        <h4 className='h4'>Services</h4>
        <h1>Empowering Your Defense</h1>
        <p className='p'> As our mission states, we prioritize transparency in all our consulting services. At Rhivet Networks we offer a comprehensive range of cybersecurity solutions, including strategy development, guidance, and execution. With a commitment to utmost transparency, we work closely with our clients to understand their unique needs and provide tailored recommendations. Explore more about the services we offer and discover how we can help you strengthen your cybersecurity posture.</p>
          <div className="cards">
          <div className="card1">
            {services.slice(0, numItems).map((itm, index) => {
                return(
                  <ServiceCards key={index} header={itm.title} text={itm.text} img={itm.img2} img2={itm.img} bg={itm?.bg} color={itm?.color}/>
                )
              })} 
            </div>
            <div className="card2">
            {services.slice(-3).map((itm, index) => {
                return(
                  <ServiceCards key={index} header={itm.title} text={itm.text} img={itm.img2} img2={itm.img} bg={itm?.bg} color={itm?.color}/>
                )
              })} 
            </div>
          </div>
        <Contact/>
      </section>
    </ServiceStyle>
  )
}

export default Services