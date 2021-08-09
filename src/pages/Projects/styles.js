import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    color: #191716;
    opacity: 0.9;
    margin-bottom: 10px;
  }
`;

export const Table = styled.table`
  font-size: 1.7rem;
  color: #191716;
  text-align: center;
  width: 80%;
  letter-spacing: 2px;
  line-height: 3rem;
  th {
    height: 40px;
    background-color: #191716;
    color: rgb(255, 255, 255);
  }

  td a {
    text-decoration: none;
    font-size: 2rem;
    color: #191716;
  }

  tbody tr:hover {
    background-color: #e0e2db;
    opacity: 0.9;
  }
`;
