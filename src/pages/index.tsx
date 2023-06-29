import Head from 'next/head'
import React from 'react'
import { HomeStyle } from '@/styles/homePage'
import RhButton from '@/component/button'
import Contact from '@/component/contact'
import { Illustration } from '../../public/image'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Rhivet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyle>
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
        <section>
          <Contact/>
        </section>
      </HomeStyle>
    </>
  )
}
