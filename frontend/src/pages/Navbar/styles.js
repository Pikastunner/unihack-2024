import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
`;

const Logo = styled.img`
  width: 20%;
  align-self: flex-start;
`;

const BrandLabel = styled.h3`
  position: absolute;
  right: 135px;
  top: 5px;
  font-size: 1.5em;
`;

const LogoContainer = styled.div`
  padding-left: 50px;
  position: relative;
`;

export default {
  BrandLabel,
  Navbar,
  Logo,
  LogoContainer
}