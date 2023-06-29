
import { Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FooterStyles } from './style';
import Image from 'next/image';
import { FooterLogo } from '../../../../public/image';


const FooterLayout = () => {
    const { Footer } = Layout;
    const dynamicYear = new Date().getFullYear();
    const router = useRouter();


  return (
          <FooterStyles>
              <Footer>
                 <section className='footer'>
                 <div className='logo'>
                    <Image src={FooterLogo} alt='logo'/>
                    <p>© {dynamicYear} Rhivet Networks.<br/> All rights reserved</p>
                 </div>
                 <div className='links'>
                    <div></div>
                    <div></div>
                    <div></div>
                 </div>
                 </section>
              </Footer>
          </FooterStyles>
  )
}

export default FooterLayout
