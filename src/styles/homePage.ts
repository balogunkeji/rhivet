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
      padding: 100px 6%;
      /* height: 65vw; */

      @media(min-width: 721px){
        justify-content: space-between;
        padding: 100px 0;
      }
      .hero__img{
          display: flex;
          flex-direction: column;
          padding-right: 6%; 
          gap: 19px;       
        @media(max-width: 720px){
          display: none;
        }
      }
      .hero__text{
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 65px;
      
      h4{
        color: #C5181A;
        font-size: 24px;
        font-family: "Merriweather";
        font-weight: 400;
      }
        p,h1,h4{
          text-align: center;
        }
        @media(min-width: 721px){
          justify-content: flex-start;
          align-items: flex-start;
          padding-left: 2%;
      h1,h4{
          text-align: left;
        }
        
        h1{
          width: 56vw;
        }
      }
      @media(min-width: 1200px){
        padding-top: 150px;
        padding-bottom: 100px;
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
      background: #fff;
      
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

      @media(min-width: 1330px){
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
          color: #fff;
        }
        p{ 
          font-size: 14px;
          color: #fff;

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
            background: #000;
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
