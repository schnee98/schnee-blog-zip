import styled from '@emotion/styled';
import { CSSProperties } from 'react';

type Props = Pick<CSSProperties, 'width' | 'height'> & { src: string };

function Logo(props: Props) {
  const { src, ...size } = props;

  return (
    <div style={{ ...size }}>
      <LogoImage src={src} />
    </div>
  );
}

const LogoImage = styled.img({
  width: '100%',
  borderRadius: 50,
  border: 'none',
});

export default Logo;
