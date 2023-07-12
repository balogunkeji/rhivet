import styled from "styled-components";
export const FooterStyles = styled.main`
  width: 100%;
  max-width: 100%;
  height: 100%;

  .ant-layout-footer {
    background: #000;
    bottom: 0;
    top: 0;
    padding: 96px 6%;

    @media (min-width: 720px) {
      padding: 96px 10%;
    }
  }
  .hero__img {
    display: flex;
    gap: 19px;
    justify-content: flex-start;
    align-items: flex-start;
    img {
      object-fit: contain;
    }
    img:hover {
      padding: 10px 0;
      transition: padding 0.5s ease-in-out;
    }
    @media (max-width: 720px) {
      display: none;
    }
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;

    @media (min-width: 720px) {
      justify-content: space-between;
    }
    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
    h4 {
      color: #c5181a;
      font-size: 18px;
      font-family: "Manrope";
      font-weight: 500;
      line-height: 30px;
    }
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
      @media (min-width: 1024px) {
        width: 350px;
      }
      .img {
        width: 150px;
        height: 60px;
        object-fit: contain;
      }
      p {
        color: #d9dbe1;
        font-size: 14px;
        font-family: "Manrope";
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }

    .flex {
      display: flex;
      flex-direction: column;
      gap: 12px;
      @media (min-width: 1024px) {
        width: 150px;
      }
      @media (min-width: 1344px) {
        width: 200px;
      }
      a {
        color: white;
      }
    }
  }
`;
