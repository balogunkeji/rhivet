
import { Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { FooterStyles } from './style';

const FooterLayout = () => {
    const { Footer } = Layout;
    const dynamicYear = new Date().getFullYear();
    const router = useRouter();


  return (
          <FooterStyles>
              <Footer>
                 
              </Footer>
          </FooterStyles>
  )
}

export default FooterLayout
