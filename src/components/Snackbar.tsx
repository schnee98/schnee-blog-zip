import { theme } from 'src/constants/theme';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { centerOfViewport } from 'src/constants/style';

interface Props extends ComponentProps<'div'> {
  name: string;
}

export function Snackbar(props: Props) {
  const { name, ...contentProps } = props;

  return (
    <Content {...contentProps}>이제부터 {name} 블로그를 구독할게요!</Content>
  );
}

const Content = styled.div({
  ...centerOfViewport,

  boxShadow: theme.shadow.drop,
  width: 'fit-content',
  padding: '16px 24px',
  backgroundColor: theme.color.blue500,
  color: theme.color.grayScaleWhite,
  textAlign: 'center',
});
