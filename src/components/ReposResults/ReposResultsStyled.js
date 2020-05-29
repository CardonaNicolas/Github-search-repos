import styled from 'styled-components';

const ReposResultsStyled = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  .card:first-child {
    margin-top: 16px;
  }

  .card:last-child {
    margin-bottom: 16px;
  }

  .card { 
    width: 30%;
    word-wrap: break-word;

    div {
      max-width: 100%;
    }
  }
`;

export default ReposResultsStyled;
