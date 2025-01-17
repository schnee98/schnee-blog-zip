import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { centerOfViewport } from 'src/constants/style';
import { theme } from 'src/constants/theme';

interface Props extends ComponentProps<'div'> {
  name: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export function Modal({ name, onSubmit, onCancel, ...props }: Props) {
  return (
    <Wrapper {...props}>
      <TextContent>
        <div>
          <Bold>{name}</Bold> 블로그를
        </div>
        <div>그만 보시겠어요?</div>
      </TextContent>
      <ButtonWrapper>
        <ModalButton onClick={onSubmit}>그만 볼게요.</ModalButton>
        <ModalButton onClick={onCancel}>아니요, 더 볼래요.</ModalButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  ...centerOfViewport,

  width: 320,
  outline: theme.border.default,
  boxShadow: theme.shadow.drop,
});

const TextContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
  gap: 4,
  color: theme.color.grayScale400,
});

const ButtonWrapper = styled.div({
  display: 'grid',
  height: 48,
  gridTemplateColumns: '1fr 1fr',
});

const ModalButton = styled.button({
  fontSize: theme.fontSize.regular,
  outline: theme.border.default,
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: theme.color.grayScale400,
    textDecoration: 'underline',
  },
});

const Bold = styled.span({
  color: theme.color.grayScaleBlack,
  fontSize: theme.fontSize.medium,
  fontWeight: 700,
});
