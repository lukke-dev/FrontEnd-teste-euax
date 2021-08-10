import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import { getProjects, delProject, getActivies } from '../../services/api';
import Loading from '../../components/Loading';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [activies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const showProjects = async () => {
      const project = await getProjects();
      project.map(async (value) => {
        const id = value._id;
        const act = await getActivies(id);
        if (act) {
          const qtdTotal = act.length;
          const qtdTrue = act.filter((obj) => obj.finished === true).length;
          const date = act.filter(
            (obj) => new Date(obj.endDate) > new Date(value.endDate)
          ).length;
          const porc = (Number(qtdTrue) * 100) / Number(qtdTotal);
          const porcFixed = porc.toFixed(1);
          activies[id] = { qtdTotal, qtdTrue, porcFixed, date };
        }
      });
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
            <th>% Completo</th>
            <th>Atrasado</th>
            <th>Deletar</th>
            <th>Ver Atividades</th>
          </tr>
        </thead>
        <tbody>
          {!isLoad &&
            projects.map((value) => {
              const { porcFixed } = activies[value._id] || 0;
              const { date } = activies[value._id] || 0;

              return (
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
                  <td>{porcFixed}%</td>
                  <td>{date === 0 ? 'Não' : 'Sim'}</td>
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
              );
            })}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default HomePage;
