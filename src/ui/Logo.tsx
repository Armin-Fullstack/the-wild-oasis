import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/public/img/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
