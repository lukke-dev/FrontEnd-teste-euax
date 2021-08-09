import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 1.5rem;

  input {
    background-color: rgba(0, 0, 0, 0.05);
    height: 45px;
    width: 300px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 5px;
    margin: 5px 0;
    &:focus {
      border: 1px solid #191716;
    }
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
