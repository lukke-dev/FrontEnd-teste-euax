import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    color: #191716;
    opacity: 0.9;
    margin-bottom: 10px;
    margin-top: 20px;
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
export const Button = styled.button`
  width: 200px;
  margin-top: 20px;
  align-self: center;
  cursor: pointer;
  background: #d62c27;
  opacity: 0.9;
  border: none;
  padding: 10px 5px;
  border-radius: 4px;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: #191716;
  }
`;
