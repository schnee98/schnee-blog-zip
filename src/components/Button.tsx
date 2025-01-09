import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { theme } from '../constants/theme';

interface Props extends ComponentProps<'button'> {
  color: 'white' | 'gray';
  icon?: 'plus' | 'close';
  text: boolean;
}

export function Button({ color, icon, text, children }: Props) {
  return (
    <_Button $color={color}>
      {icon && <div>{icon}</div>}
      {text && typeof children === 'string' && children}
    </_Button>
  );
}

const _Button = styled.button<{ $color: 'white' | 'gray' }>(({ $color }) => ({
  width: 'fit-content',
  height: 24,
  padding: '0 6px',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  color: theme.color.grayScale200,
  backgroundColor:
    $color === 'white' ? theme.color.grayScaleWhite : theme.color.grayScale50,
  border: theme.border.default,
  borderRadius: theme.radius.circle,
  '&:hover': {
    border: theme.border.bold,
  },
}));
