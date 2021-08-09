import { useLoading, Audio } from '@agney/react-loading';
import * as S from './styles';

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return (
    <S.Container>
      <div />
      <span>
        <section {...containerProps}>{indicatorEl}</section>
      </span>
    </S.Container>
  );
};

export default Loading;
