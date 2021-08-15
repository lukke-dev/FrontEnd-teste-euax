import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import { getProjects, delProject } from '../../services/api';
import Loading from '../../components/Loading';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [activies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const showProjects = async () => {
      const project = await getProjects();
      setProjects(project);
      setIsLoad(false);
    };
    showProjects();
  }, [activies, isLoad]);

  const handleDelete = async (id) => {
    await delProject(id);
    toast.info('Projeto deletado com sucesso!');
    history.push('./projects');
  };

  return (
    <S.Wrapper>
      {isLoad && <Loading />}
      <h1>Projetos</h1>
      <S.Table>
        <thead>
          <tr>
            <th>ID Projeto</th>
            <th>Nome Projeto</th>
            <th>Data Inicio</th>
            <th>Data Fim</th>
            <th>Deletar</th>
            <th>Ver Atividades</th>
          </tr>
        </thead>
        <tbody>
          {!isLoad &&
            projects.map((value) => (
              <tr key={value._id}>
                <td>{value._id}</td>
                <td>{value.name}</td>
                <td>
                  {new Date(value.startDate).toLocaleString('pt-BR', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </td>
                <td>
                  {new Date(value.endDate).toLocaleString('pt-BR', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </td>
                <td>
                  <Link to="/" onClick={() => handleDelete(value._id)}>
                    <FaWindowClose
                      cursor="pointer"
                      color="#d42d25"
                      style={{ marginLeft: '10px' }}
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`/projects/${value._id}`}>+</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default Projects;
