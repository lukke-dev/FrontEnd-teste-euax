/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import { newProject, newActivity } from '../../services/api';

const RegisterProject = () => {
  const [nameProject, setNameProject] = useState('');
  const [startDateProject, setStartDateProject] = useState('');
  const [endDateProject, setEndDateProject] = useState('');
  const [nameActivity, setNameActivity] = useState('');
  const [startDateActivity, setStartDateActivity] = useState('');
  const [endDateActivity, setEndDateActivity] = useState('');
  const history = useHistory();
  const regEx = /(20)\d{2}-\d{2}-\d{2}/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameProject === '') return toast.error('Nome do projeto vazio!');
    if (nameActivity === '') return toast.error('Nome da atividade vazio!');
    if (
      !regEx.test(startDateProject) ||
      !regEx.test(endDateProject) ||
      !regEx.test(startDateActivity) ||
      !regEx.test(endDateActivity)
    )
      return toast.error('Data vazia ou inválida!');

    const resp = await newProject(
      nameProject,
      startDateProject,
      endDateProject
    );
    await newActivity(
      nameActivity,
      resp._id,
      startDateActivity,
      endDateActivity
    );
    history.push('/projects');
    return toast.info('Projeto criado com sucesso!');
  };
  return (
    <S.Wrapper>
      <S.Form>
        <S.Label htmlFor="input">
          Nome do Projeto <br />
          <input
            type="text"
            onChange={(e) => setNameProject(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="input">
          Data de Inicio <br />
          <input
            type="date"
            onChange={(e) => setStartDateProject(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="input">
          Data de Fim <br />
          <input
            type="date"
            onChange={(e) => setEndDateProject(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="input">
          Nome da 1º Atividade <br />
          <input
            type="text"
            onChange={(e) => setNameActivity(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="input">
          Data de Inicio <br />
          <input
            type="date"
            onChange={(e) => setStartDateActivity(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="input">
          Data de Fim <br />
          <input
            type="date"
            onChange={(e) => setEndDateActivity(e.target.value)}
            required
          />
        </S.Label>
        <S.Button type="submit" onClick={handleSubmit}>
          Criar Projeto
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default RegisterProject;
