import styled from 'styled-components';
import { Drawer } from 'antd';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
  .ant-layout-header{
    line-height: 0;
    background: #fff;
  }

`;

interface Line {
  showMobileSider?: boolean;
  setShowMobileSider?: string;
  children?: React.ReactNode | string;
}

export const MobileDrawer = styled(Drawer)<Line>`
  @media (min-width: 701px) {
    display: none;
  }

`;
