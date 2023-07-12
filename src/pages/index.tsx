import Head from "next/head";
import React from "react";
import { HomeStyle } from "@/styles/homePage";
import RhButton from "@/component/button";
import {
  Illustration,
  Frame2,
  Linked,
  Airbnb,
  FedEx,
  Google,
  Hubspot,
  Microsoft,
  Walmart,
  Twitter,
} from "../../public/image";
import Image from "next/image";
import { offer } from "@/utiliities";
import { PlaceHolderCards } from "@/component";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Rhivet-home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyle>
        <section className="hero">
          <div className="hero__text">
            <div>
              <h4>Welcome to Rhivet</h4>
              <h1>Your Reliable Partner in Cybersecurity Excellence</h1>
              <div className="hero_imgs wite">
                <div className="imgs">
                  <Image src={Airbnb} alt="img" />
                  <Image src={Hubspot} alt="img" />
                  <Image src={Google} alt="img" />
                  <Image src={Microsoft} alt="img" />
                  <Image src={Walmart} alt="img" />
                  <Image src={FedEx} alt="img" />
                </div>
              </div>
            </div>
            <RhButton
              text="Request Free Consultation"
              height="45px"
              width="250px"
              onClick={() => router.push("/contact-us")}
            />
          </div>
          <div className="hero__img">
            {/* <Image src={Instagram} alt='img'/> */}
            {/* <Image src={Dribble} alt='img'/> */}
            <Image src={Twitter} alt="img" />
            {/* <Image src={Youtube} alt='img'/> */}
            <Image src={Linked} alt="img" />
          </div>
          {/* <div className="hero_imgs">
           <div className='imgs'>
            <Image src={Airbnb} alt='img'/>
            <Image src={Hubspot} alt='img'/>
            <Image src={Google} alt='img'/>
            <Image src={Microsoft} alt='img'/>
            <Image src={Walmart} alt='img'/>
            <Image src={FedEx} alt='img'/>
            </div>
           </div> */}
        </section>
        <section className="offer">
          <div className="offerText">
            <h3>
              We offer professional <br /> cyber security services
            </h3>
            <p className='p'>
            At Rhivet, we offer a comprehensive range of cutting-edge cybersecurity services designed to address the evolving threats faced by organizations today. Our services are tailored to provide the highest level of protection, risk mitigation, and compliance, ensuring that our clients remain secure in the face of increasing cyber risks. Here are the key services we offer:

            </p>
          </div>
          <div className="cards">
            {offer.map((item, index) => (
              <PlaceHolderCards
                key={index}
                header={item.title}
                img={item.img}
                text={item.text}
              />
            ))}
          </div>
        </section>
        <section className="ways">
          <div className="ways__text">
            <h3>
              Ways to get rid of the <br /> growing cyber threat
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque
              morbi egestas convallis. Adipiscing non enim aliquet penatibus
              platea enim.Lorem ipsum dolor sit amet consectetur. Et ornare
              posuere quisque morbi egestas convallis. Adipiscing non enim
              aliquet penatibus platea enim.
            </p>
            {/* <RhButton text='Get Started' width='162px' height='45px'/> */}
          </div>
          <div className="illustration">
            <Image src={Illustration} alt="image" />
          </div>
        </section>
        <section className="enhance">
          <div className="enhance__img">
            <Image src={Frame2} alt="img" />
          </div>
          <div className="enhanceText">
            <h3>
              Enhancing Data Security for a Financial Institution: A Case Study
            </h3>
            <p>
              This case study showcases the successful implementation of
              customized cybersecurity solutions for a prominent financial
              institution. By addressing their specific data security challenges
              and deploying robust measures, we ensured the protection of
              sensitive customer information and reduced the risk of breaches.
            </p>
          </div>
          {/* <RhButton text='Read More' width='120px' height='45px'/> */}
        </section>
      </HomeStyle>
    </>
  );
}
