
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
                 
                    <div className='flex'>
                        <h4>Company</h4>
                        <Link href=''>About</Link>
                        <Link href=''>Blog</Link>
                        <Link href=''>Careers</Link>
                        <Link href=''>Contact</Link>
                    </div>
                    <div className='flex'>
                        <h4>Support</h4>
                        <Link href=''>Help Center</Link>
                        <Link href=''>Terms of service</Link>
                        <Link href=''>Legal</Link>
                        <Link href=''>Privacy Policy</Link>
                        <Link href=''>Status</Link>

                    </div>                   
                    <div className='flex'>
                        <h4>Follow us</h4>
                        <Link href=''>Facebook</Link>
                        <Link href=''>Twitter</Link>
                        <Link href=''>Dribbble</Link>
                        <Link href=''>Instagram</Link>
                        <Link href=''>LinkedIn</Link>

                    </div>               
                 </section>
              </Footer>
          </FooterStyles>
  )
}

export default FooterLayout
