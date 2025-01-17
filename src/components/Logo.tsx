import styled from '@emotion/styled';
import { CSSProperties } from 'react';

type Props = Pick<CSSProperties, 'width' | 'height'> & { src: string };

function Logo(props: Props) {
  const { src, ...size } = props;

  return (
    <div style={{ ...size }}>
      <Profile src={src} />
    </div>
  );
}

const Profile = styled.img({
  width: '100%',
  borderRadius: 50,
  border: 'none',
});

export default Logo;
