import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { centerOfViewport } from 'src/constants/style';
import { theme } from 'src/constants/theme';

interface Props extends ComponentProps<'div'> {
  name: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export function Modal({ name, onSubmit, onCancel }: Props) {
  return (
    <Wrapper>
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
  gap: 10,
});

const ButtonWrapper = styled.div({
  display: 'grid',
  height: 48,
  gridTemplateColumns: '1fr 1fr',
});

const ModalButton = styled.button({
  outline: theme.border.default,
  border: 'none',
  cursor: 'pointer',
});

const Bold = styled.span({
  fontSize: theme.fontSize.medium,
  fontWeight: 700,
});
