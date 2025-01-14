import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { centerOfViewport } from 'src/constants/style';
import { theme } from 'src/constants/theme';

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

  width: 'fit-content',
  padding: '16px 24px',
  textAlign: 'center',
  backgroundColor: theme.color.blue500,
  color: theme.color.grayScaleWhite,
  boxShadow: theme.shadow.drop,
});
