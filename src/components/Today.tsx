import styled from '@emotion/styled';
import { theme } from 'src/constants/theme';

function Today() {
  const today = new Date();
  const todayInText = parseDateInText(today);

  return <Text>{todayInText}</Text>;
}

function parseDateInText(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  };

  return date.toLocaleDateString('ko-KR', options);
}

const Text = styled.p({
  color: theme.color.grayScale400,
});

export default Today;
