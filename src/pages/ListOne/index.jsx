import { useEffect, useState } from 'react';
import { FaWindowClose, FaExchangeAlt } from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import {
  getProjects,
  delProject,
  getActivies,
  changeState,
} from '../../services/api';
import Loading from '../../components/Loading';

const ListOne = () => {
  const [isLoad, setIsLoad] = useState();
  const [project, setProject] = useState();
  const [activies, setActivies] = useState();
  const [porc, setPorc] = useState();
  const [lateDate, setLateDate] = useState();
  const idProject = useLocation().pathname.replace('/projects/', '');
  const history = useHistory();
  useEffect(() => {
    const showProject = async () => {
      setIsLoad(true);
      const proj = await getProjects(idProject);
      const act = await getActivies(idProject);
      const qtdTotal = act.length;
      const qtdTrue = act.filter((obj) => obj.finished === true).length;
      setLateDate(
        act.filter((obj) => new Date(obj.endDate) > new Date(proj.endDate))
          .length
      );
      setPorc((Number(qtdTrue) * 100) / Number(qtdTotal));
      setActivies(act);
      setProject(proj);
      setIsLoad(false);
    };
    showProject();
  }, [idProject]);
  const handleDelete = async (id) => {
    setIsLoad(true);
    await delProject(id);
    setIsLoad(false);
    toast.info('Projeto deletado com sucesso!');
    history.push('./projects');
  };

  const handleChange = async (id) => {
    setIsLoad(true);
    await changeState(id);
    toast.info('Estado alterado com sucesso!');
    history.push(`/projects/${project._id}`);
    setIsLoad(false);
  };

  return (
    <S.Wrapper>
      {isLoad && <Loading />}
      <h1>Projeto</h1>
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
          </tr>
        </thead>
        <tbody>
          {project && activies && (
            <tr>
              <td>{project._id}</td>
              <td>{project.name}</td>
              <td>
                {' '}
                {new Date(project.startDate).toLocaleString('pt-BR', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </td>
              <td>
                {' '}
                {new Date(project.endDate).toLocaleString('pt-BR', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </td>

              <td>{porc.toFixed(1)}%</td>
              <td>{lateDate === 0 ? 'Não' : 'Sim'}</td>
              <td>
                <Link to="/projects" onClick={() => handleDelete(project._id)}>
                  <FaWindowClose
                    cursor="pointer"
                    color="#d42d25"
                    style={{ marginLeft: '10px' }}
                  />
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </S.Table>
      <h1>Atividades</h1>

      <S.Table>
        <thead>
          <tr>
            <th>ID Atividade</th>
            <th>ID Projeto</th>
            <th>Nome Atividade</th>
            <th>Data Inicio</th>
            <th>Data Fim</th>
            <th>Finalizada?</th>
            <th>Mudar Estado</th>
          </tr>
        </thead>
        <tbody>
          {activies &&
            activies.map((value) => (
              <tr key={value._id}>
                <td>{value._id}</td>
                <td>{value.idProject}</td>
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
                <td>{value.finished ? 'Sim' : 'Não'}</td>
                <td>
                  <Link to="/empty" onClick={() => handleChange(value._id)}>
                    <FaExchangeAlt
                      cursor="pointer"
                      color="#d42d25"
                      style={{ marginLeft: '10px' }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
      {project && (
        <Link to={`/newactivity/${project._id}`}>
          <S.Button type="button">+ Nova Atividade</S.Button>
        </Link>
      )}
    </S.Wrapper>
  );
};

export default ListOne;
