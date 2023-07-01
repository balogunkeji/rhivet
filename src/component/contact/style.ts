import { styled } from "styled-components";

export const ContactStyle  = styled.div`

  width: 100%;
  max-width: 100;
  height: 100%;

  section{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 100%;
      padding: 20px 6% 100px 6%; 
      align-items: center;

      @media(min-width: 801px){

        justify-content: space-between;
      }

      

     .img{
       @media(min-width: 801px){
          width: 50%;
        }
      img{
        height: 715px;
        object-fit: contain;
        max-width: 100%;
        @media(max-width: 800px){
          display: none;
        }
      }
     }

      .form{
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        justify-content: center;
        h4{
            text-align: center;
          }
        @media(min-width: 801px){
          width: 50%;
        }
        form{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:  center;
          gap: 20px;
          
          input,textarea{
            height: 47px;
            outline: none;
            border: none;
            border-radius: 10px;
            border: 1px solid #DDD;
            background: #FFF;
            padding:  5px 10px;
            min-width: 100px;
            width: 40vw;
            @media(max-width: 800px){
              width: 80vw;
            }
          }
          textarea{
            height: 141px;
          }
          span{
            color: red;
          }
          button{
            align-self: center;
            margin-top: 20px;
          }
        }
      }
  }
`;
