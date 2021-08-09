import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #191716;
  height: 50px;
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 3rem;
    color: #d62c27;
    opacity: 0.9;
    transition: all ease 0.2s;
  }

  a:hover {
    font-size: 3.2rem;
  }
`;

export const Container = styled.div`
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    margin: 0 1rem;
    font-size: 1.7rem;
    font-weight: bold;
  }

  a:hover {
    color: #d62c27;
    opacity: 0.9;
  }
`;

export const Link = styled(NavLink)`
  color: #3d348b;
`;
