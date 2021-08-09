import * as S from './styles';

const NavBar = () => (
  <S.Wrapper>
    <S.Logo>
      <S.Link to="/">Euax</S.Link>
    </S.Logo>
    <S.Container>
      <S.Link to="/projects">Projetos</S.Link>
      <S.Link to="/register">Novo Projeto</S.Link>
    </S.Container>
  </S.Wrapper>
);
export default NavBar;
