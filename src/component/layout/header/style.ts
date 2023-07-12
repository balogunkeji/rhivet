import styled from "styled-components";
import { Drawer } from "antd";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;

  .ant-layout-header {
    line-height: 0;
    background: #151515;
  }

  .header {
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 10px 5% 10px 0;
    @media (max-width: 720px) {
      z-index: 5;
    }
    @media (min-width: 721px) {
      position: absolute;
    }
    @media (min-width: 1200px) {
      padding-right: 11%;
    }
  }

  nav {
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      gap: 30px;

      @media screen and (max-width: 720px) {
        display: none;
      }
    }
    a {
      color: #fff;
      padding: 0;
      transition: padding 0.5s ease-in-out;
    }

    a:hover {
      padding: 0 0 10px 0;
      transition: padding 0.5s ease-in-out;
      color: #c5181a;
    }

    .active {
      color: #c5181a;
    }
    img {
      width: 150px;
      height: 50px;
      object-fit: contain;
      @media (min-width: 721px) {
        width: 300px;
        height: 70px;
      }
    }
    .menuIcon {
      font-size: 30px;
      color: #c5181a;
      width: 30px;
      height: 30px;
      transition: all 0.4s ease-in;
      :hover {
        transform: translate(-5px);
      }
      @media screen and (min-width: 721px) {
        display: none;
      }
    }
  }
`;

interface Line {
  showMobileSider?: boolean;
  setShowMobileSider?: string;
  children?: React.ReactNode | string;
}

export const MobileDrawer = styled(Drawer)<Line>`
  @media (min-width: 721px) {
    display: none;
  }

  .ant-drawer-content {
    max-width: 100%;
    position: fixed;
    z-index: 3;
    bottom: 0;
    transition: all 0.2s ease-in-out;
  }

  .ant-drawer {
    width: 200px;
  }

  .ant-drawer-header-close-only {
    padding-bottom: 20px;
  }

  .ant-drawer-close {
    margin-inline-end: 0px;
    align-self: flex-end;
  }
  .ant-drawer-header {
    display: flex;
    border-bottom: none;
    padding: 16px 24px;
    line-height: 0;
    justify-content: flex-end;
  }
  .ant-drawer-wrapper-body {
    background-color: #000;
  }

  .ant-drawer-header-title {
    flex: 0.1;
    display: flex;
  }

  .logo {
    object-fit: contain;
    width: 150px;
    margin-top: -75px;
    position: absolute;
  }

  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    margin: 50px auto 0 auto;

    a {
      color: #fff;
      padding: 0;
      transition: padding 0.5s ease-in-out;
    }

    a:hover {
      font-size: 24px;
      padding: 0 0 10px 0;
      transition: padding 0.5s ease-in-out;
      color: #c5181a;
    }

    .active {
      color: #c5181a;
    }
  }
`;
