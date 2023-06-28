import styled from 'styled-components';
export const LayoutWrapper = styled.div`
     width: 100%;
    height: 100%;
    overflow-x: hidden;
    .ant-layout-content {
    width: 100%;
    height: max-content;
    min-height: calc(100vh - 75px);
    background-color: #fff;

    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-left: 0;
    }
  }
  .bt{
.btnss, .btnsss{
  border: 1px solid #D0D5DD;
  box-shadow: 0px 51px 80px #A1A0A6;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
  }

  .btnsss{
    @media(min-width: 45em){
      display: none;
    }
  }

  .btnss{
    @media(max-width: 45em){
      display: none;
    }
  }

  svg{
    color: #FF6029;
    font-size: 20px;
    margin-top: 3px;
  }
  }
  
`;