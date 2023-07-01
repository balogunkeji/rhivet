import { styled } from "styled-components";

export const HomeStyle = styled.main`

    width: 100%;
    max-width: 100%;
    height: 100%;


    .offer{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
      padding: 40px 6%;
      align-items: center;
      flex-direction: column;
      gap: 32px;
      h3{
        text-align: center;
      }
      .cards{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(350px, 3fr));
        place-content: center;
        justify-content: center;
        align-items: center;
        margin: auto;   
        width: 80vw;  
        
        @media(max-width: 1024px){
          grid-template-columns: repeat(auto-fill, minmax(320px, 3fr));
          width: 100%;
      }
      }
    }
    
    .ways{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      max-width: 100%;
      padding: 30px 6%;
      align-items: center;
      gap: 32px;

      @media(min-width: 1200px){
        padding: 30px 8% 30px 12%;
        gap: 170px;
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

    .enhance{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        max-width: 100%;
        padding: 30px 6%;
        align-items: center;
        gap: 32px;
        h3{
          font-weight: 400;
          margin-bottom: 10px;
          color: #1E1E1E;
        }
        p{ 
          font-size: 14px;
        }
        @media(min-width: 801px){
          position: relative;

          .enhance__img{
            img{
              width: 100%;
            }
            /* position: relative; */
          }
          .enhanceText{
            position: absolute;
            gap: 20.94px;
            width: 40vw;
            bottom: 0;
            right: 60px;
            background: #fff;
            height: fit-content;
            padding: 20px 2% 30px 2%;
            margin-bottom: 20px;
          }
          button{
            margin-left: 80vw;
            z-index: 1;

          }
        }
       
    }

`;
