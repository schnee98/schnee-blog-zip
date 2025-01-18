import styled from '@emotion/styled';
import profileImage from 'src/assets/images/profile-image.png';
import Logo from './Logo';
import Title from './Title';
import Today from './Today';

function Header() {
  return (
    <HeaderWrapper>
      <LeftSideWrapper>
        <Logo src={profileImage} width={28} height={28} />
        <Title type="header">schnee-blog-zip</Title>
      </LeftSideWrapper>
      <Today />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

const LeftSideWrapper = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export default Header;
