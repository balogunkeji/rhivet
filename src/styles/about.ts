import { styled } from "styled-components";

export const AboutStyle = styled.main`

    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 200px 6%;

    section{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      h4,h5{
        color: #C5181A;
        font-family: "Merriweather", sans-serif;
      }
      h2 {
         font-size: clamp(2.5em, 4vw, 3.5em);
          }
      h1{
        text-align: center;
      }
      .p{
        text-align: center;
        font-size: 18px;
        @media(min-width: 801px){
          padding: 0 15% ;
        }
        @media(min-width: 1200px){
          padding: 0 20% ;
        }
      }
        img{
          width: 768px;
        object-fit: contain;
        filter: grayscale(1);
      }
      .story{
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
      align-items: flex-start;
      gap: 20px;
      padding: 70px 0;

    
      .text{
        p{
          line-height: 32px;
        }
        @media(min-width: 801px){
          padding-top: 20px;
          width: 60%;
        }
      }

      }

      .team{
        display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      }
    }
`;
