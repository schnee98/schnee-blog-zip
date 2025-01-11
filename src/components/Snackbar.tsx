import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { theme } from '../constants/theme';

interface Props extends ComponentProps<'div'> {
  name: string;
}

export function Snackbar(props: Props) {
  const { name, ...contentProps } = props;

  return (
    <SnackbarContent {...contentProps}>
      이제부터 {name} 블로그를 구독할게요!
    </SnackbarContent>
  );
}

const SnackbarContent = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  padding: '16px 24px',
  backgroundColor: theme.color.blue500,
  color: theme.color.grayScaleWhite,
  textAlign: 'center',
  boxShadow: theme.shadow.drop,
});
