import { styled } from "styled-components";

export const HomeStyle = styled.main`

    width: 100%;
    max-width: 100%;
    height: 100%;


    .ways{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
      padding: 100px 6%;
      align-items: center;
      gap: 32px;

      @media(min-width: 1200px){
        padding: 30px 10%;
      }

      .ways__text{
        display: flex;
        gap: 32px;
        flex-direction: column;
        @media(min-width: 800px){
          width: 50%;
        }
        
      }
      .illustration{
        margin: auto;
        @media(min-width: 920px){
          margin: 0;
        }
        img{
          object-fit: contain;
        /* max-width: 300px; */
        height: 325px;
        filter: grayscale(1);
        @media(min-width: 923px){
          height: 480px;
        }
        }
      }
    }

`;
