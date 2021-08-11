import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import * as S from './styles';
import { newActivity } from '../../services/api';

const RegisterProject = () => {
  const [nameActivity, setNameActivity] = useState('');
  const [startDateActivity, setStartDateActivity] = useState('');
  const [endDateActivity, setEndDateActivity] = useState('');
  const idProject = useLocation().pathname.replace('/newactivity/', '');
  const history = useHistory();
  const regEx = /(20)\d{2}-\d{2}-\d{2}/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameActivity === '') return toast.error('Nome da atividade vazio!');
    if (!regEx.test(startDateActivity) || !regEx.test(endDateActivity))
      return toast.error('Data vazia ou inválida!');
    if (new Date(startDateActivity) >= new Date(endDateActivity))
      return toast.error('Data inicial não pode ser maior que a data final');
    await newActivity(
      nameActivity,
      idProject,
      startDateActivity,
      endDateActivity
    );
    history.push(`/projects/${idProject}`);
    return toast.info('Atividade criada com sucesso!');
  };
  return (
    <S.Wrapper>
      <S.Form>
        <S.Label htmlFor="input">
          Nome da Atividade <br />
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
          Adicionar Atividade
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default RegisterProject;
