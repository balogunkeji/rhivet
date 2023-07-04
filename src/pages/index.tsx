import Head from 'next/head'
import React, {useState} from 'react'
import { HomeStyle } from '@/styles/homePage'
import RhButton from '@/component/button'
import Contact from '@/component/contact'
import { Illustration,Frame2, Hero, Airbnb, FedEx, Google, Hubspot, Microsoft, Walmart } from '../../public/image'
import Image from 'next/image'
import { offer } from '@/utiliities'
import { PlaceHolderCards } from '@/component'
import FooterLayout from '@/component/layout/footer'
import HeaderComponent from '@/component/layout/header'
import { FloatButton } from 'antd'


export default function Home() {
  const [showMobileSider, setShowMobileSider] = useState(false);

  return (
    <>
      <Head>
        <title>Rhivet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyle>
        <HeaderComponent showMobileSider={showMobileSider} setShowMobileSider={setShowMobileSider} className='a'/>
        <section className='hero'>
          
            <div className='hero__text'>
              <div>
              <h4>Welcome to Rhivet</h4>
              <h1>Your Reliable Partner in Cybersecurity Excellence</h1>
              </div>
              <RhButton text='Request Free Consultation' height='45px' width='250px'/>
            </div>
            <div className='hero__img'>
              
            </div>
           <div className="hero_imgs">
           <div className='imgs'>
            <Image src={Airbnb} alt='img'/>
            <Image src={Hubspot} alt='img'/>
            <Image src={Google} alt='img'/>
            <Image src={Microsoft} alt='img'/>
            <Image src={Walmart} alt='img'/>
            <Image src={FedEx} alt='img'/>
            </div>
           </div>
        </section>
        <section className='offer'>
          <div className="offerText">
            <h3>We offer professional <br/> cyber security services</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque <br/> morbi egestas convallis. Adipiscing non enim aliquet penatibus platea </p>
          </div>
            <div className='cards'>
              {offer.map((item,index) => (
                <PlaceHolderCards key={index} header={item.title} img={item.img} text={item.text}/>
              ))}
            </div>
        </section>
        <section className='ways'>
          <div className='ways__text'>
            <h3>Ways to get rid of the <br/> growing cyber threat</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis. Adipiscing non enim aliquet penatibus platea enim.Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis. Adipiscing non enim aliquet penatibus platea enim.</p>
            <RhButton text='Get Started' width='162px' height='45px'/>
          </div>
          <div className='illustration'>
            <Image src={Illustration} alt='image'/>
          </div>
        </section>
        <section className='enhance'>
            <div className="enhance__img">
              <Image src={Frame2} alt='img'/>
            </div>
            <div className="enhanceText">
              <h3>Enhancing Data Security for a Financial Institution: A Case Study</h3>
              <p>This case study showcases the successful implementation of customized cybersecurity solutions for a prominent financial institution. By addressing their specific data security challenges and deploying robust measures, we ensured the protection of sensitive customer information and reduced the risk of breaches.</p>
            </div>
            <RhButton text='Read More' width='120px' height='45px'/>
        </section>
        <section>
                <div className="contact" id='contact-us'>
                <Contact id='contact-us'/>

                </div>
        </section>
        <FloatButton.BackTop />
      </HomeStyle>
      <FooterLayout/>
    </>
  )
}
