import { styled } from "styled-components";

export const AboutStyle = styled.main`

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
      h4,h5{
        color: #C5181A;
        font-family: "Merriweather", sans-serif;
        z-index: 1;

      }
      h2 {
         font-size: clamp(2.5em, 4vw, 3.5em);
          }
      h1{
        text-align: center;
        z-index: 1;
      }
      p{
        z-index: 1;
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
        .img{
          img{
          width: 768px;
        object-fit: contain;
        /* filter: grayscale(1); */
      }
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

      .image__team{
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
      align-items: center;
      gap: 20px;
      margin-top: 20px;

      img{
        margin: auto;
        width: 300px;
        object-fit: contain;
      }
      }
      }
    }
`;
