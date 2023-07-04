import { styled } from "styled-components";

export const ServiceStyle = styled.main`

    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 100px 5%;
    @media(min-width: 950px){
      padding: 200px 5%;
        }

    section{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      position: relative;
      .circle{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        width: 300px;
        height: 300px;
        border-radius: 300px;
        background: #320B0C;
        filter: blur(86px); 
      }
      .h4{
        color: #C5181A;
        font-family: "Merriweather", sans-serif;
        z-index: 1;
      }
      h1{
        text-align: center;
        z-index: 1;

      }
      .p{
        text-align: center;
        font-size: 18px;
        z-index: 1;
        @media(min-width: 801px){
          padding: 0 15% ;
        }
        @media(min-width: 1200px){
          padding: 0 20% ;
        }
      }
      .cards{
        display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 70px;
      max-width: 100%;
      align-items: flex-start;
        padding: 40px 0;
       .card2{
        @media(min-width: 950px){
          margin-top: 130px;
        }
       }
      }
    }
`;
