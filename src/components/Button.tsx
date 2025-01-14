import IconPlusMono from 'src/asset/icon-plus-mono.svg';
import IconXMono from 'src/asset/icon-x-mono.svg';
import { theme } from 'src/constants/theme';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  color: 'white' | 'gray';
  icon?: 'plus' | 'close';
  text: boolean;
}

export function Button(props: Props) {
  const { color, icon, text, children, ...buttonProps } = props;

  return (
    <_Button $color={color} {...buttonProps}>
      {icon === 'plus' && <IconPlusMono />}
      {icon === 'close' && <IconXMono />}
      {text && typeof children === 'string' && children}
    </_Button>
  );
}

function getBackgroundColor(color: 'white' | 'gray') {
  return color === 'white'
    ? theme.color.grayScaleWhite
    : theme.color.grayScale50;
}

const _Button = styled.button<{ $color: 'white' | 'gray' }>(({ $color }) => ({
  width: 'fit-content',
  minWidth: 24,
  height: 24,
  padding: '0 6px',
  display: 'flex',
  alignItems: 'center',
  gap: 2,

  backgroundColor: getBackgroundColor($color),
  color: theme.color.grayScale200,
  border: theme.border.default,
  borderRadius: theme.radius.circle,

  cursor: 'pointer',
  '&:hover': {
    border: theme.border.bold,
  },
}));
