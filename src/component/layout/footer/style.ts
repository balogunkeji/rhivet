import styled from 'styled-components';
export const FooterStyles = styled.main`
    width: 100%;
    max-width: 100%;
    height: 100%;
    
    .ant-layout-footer{
        padding: 96px 10%;
        background: #000;
        bottom: 0;
        top: 0;   
    }

   .footer{
    display: flex;
    width: 100%;
    align-items: center;
    h4{
        
    }
    .logo{
        width: 350px;
        img{
        width: 120px;
        height: 47.5px;
    }
    p{
        color: #D9DBE1;
        font-size: 14px;
        font-family: "Manrope";
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
    }
   }
`;
