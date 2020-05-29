import styled from 'styled-components';

const AppStyled = styled.div`
  background-color: #BDC3C7;
  min-height: 100vh;
  text-align: center;

  .container {
    background-color: #ECF0F1;
    width: 1000px;
    margin: 0 auto;
    min-height: 100vh;

    header {
      display: flex;
      align-items: center;
      padding-left: 20px;
      
      .buttons {
        margin-right: 100px;
      }
    }

    .githublogo {
      margin: 1.5rem 0;
    }
  }
`;

export default AppStyled;
