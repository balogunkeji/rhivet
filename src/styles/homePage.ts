import { styled } from "styled-components";

export const HomeStyle = styled.main`

    width: 100%;
    max-width: 100%;
    height: 100%;
    padding-bottom: 200px;

    .a{
        color: white;
        @media(max-width: 813px){
          color: #7c7c7c;
        }
      } 
    .hero{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      padding: 100px 6%  20px 6%;
      position: relative;
      @media(min-width: 813px){
        justify-content: space-between;
        padding: 0 0 100px 0;
      }
      .hero__img{
        height: 48vw;
        img{
          height: 48vw;
          filter: grayscale(1);
          object-fit: cover;
          object-position: top center;
        }
        @media(max-width: 812px){
          display: none;
        }
      }
      .hero__text{
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
        p,h1{
          text-align: center;
        }
        @media(min-width: 813px){
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 6%;
          padding-left: 2%;
          width: 50vw;
      p,h1{
          text-align: justify;
        }
      }
      @media(min-width: 1200px){
        padding-top: 0;
        padding-left: 12%;

        h1{
          line-height: 1.2;
        }
      
      }
      }
    .hero_imgs{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      flex-direction: column;

      .line{
        width: 80vw;
        height: 1px;
        background: #C0CCDA;
      }
      .imgs{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      padding: 30px 6%;
      overflow-x: scroll;
  -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: hidden;

      img{

        height: 25px;
        object-fit: contain;
      }
    }
    }

    }
    .offer{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
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
            padding: 20px 2% 40px 2%;
            margin-bottom: 20px;
          }
          button{
            margin-left: 80vw;
            z-index: 1;

          }
        }
       
    }

    .contact{
      padding: 0 6%;
    }

`;
