import { styled } from "styled-components";


export const PlaceHolderCardStyle = styled('div')`
    display: flex;
    max-width: 380px;
    height: 230px;
    padding-left: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin:  20px auto 0  auto;
    border-radius: 4px;
    background: #1A1A1A;
    box-shadow: 9px 12px 37px 0px rgba(0, 0, 0, 0.12);
    padding: 15px;
    color: #fff;

    h4{
        color: #fff;
        text-transform: capitalize;
    }
    @media(max-width: 800px){
        h4{
        font-size: 16px;
    }
    p{
        font-size: 14px;
    }
}
@media(max-width: 1024px){
    max-width: 320px;
}

    
    img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
    
`;

export const ServiceCardStyle = styled('div')`
    display: flex;
    max-width: 550px;
    min-height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin:  0px auto 50px  auto;
    border-radius: 8px;
    background: #1A1A1A;
    color: #fff;

   
    @media(min-width: 950px){
        max-width: 400px;
    }

    @media(min-width: 1200px){
        max-width: 450px;
    }

    @media(min-width: 1350px){
        max-width: 550px;
    }

    h4{
        color: #fff;
    }
    .cardBody{
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px; 
        img{
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
    }

    .img{
        img{
            width: 550px;
            /* height: 350px; */
            object-fit: contain;
        }
    }

    
`;

