import { FloatButton, Layout } from 'antd';
import React, { useState } from 'react'
import FooterLayout from './footer';
import { LayoutWrapper } from './style';
import HeaderComponent from './header';
import { useRouter } from 'next/router';

interface LayoutChildren {
    children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutChildren) => {
    const { Content } = Layout;
    const [showMobileSider, setShowMobileSider] = useState(false);

    return (
        <LayoutWrapper>
            <HeaderComponent showMobileSider={showMobileSider} setShowMobileSider={setShowMobileSider} />
            <Content>{children}</Content>
            <FooterLayout />
            <FloatButton.BackTop />
      </LayoutWrapper>
  )
}

export default LayoutComponent;
