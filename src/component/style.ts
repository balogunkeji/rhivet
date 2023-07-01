import { styled } from "styled-components";


export const PlaceHolderCardStyle = styled('div')`
    display: flex;
    max-width: 363px;
    height: 230px;
    padding-left: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 11px;
    margin:  20px auto 0  auto;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 9px 12px 37px 0px rgba(0, 0, 0, 0.12);
    padding: 15px;


@media(max-width: 1024px){
    max-width: 320px;
}

    
    img{
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
    
`;

