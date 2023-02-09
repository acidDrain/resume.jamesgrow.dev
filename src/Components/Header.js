import styled from "styled-components";
import { getThemeColor } from "../util";

const StyledHeader = styled.header`
  text-align: center;
  display: flex;
  max-width: calc(100%);
  border: thin solid;
  border-color: ${({ theme }) => getThemeColor(theme)("orangeDim")};
  background-color: ${({ theme }) => getThemeColor(theme)("bgH")};
  @media screen and (min-width: 100px) and (max-width: 800px) {
    padding: 0.35em 1.0em;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    padding: 0em;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    padding: 0em 0em 0.5em 0em;
  }
  @media screen and (min-width: 2201px) {
    margin: 0em;
    padding: 0em;
  }
  @media print {
    color: black;
    background-color: white;
    border: none;
    page-break-after: avoid;
    page-break-inside: avoid;
    page-break-before: avoid;
  }
`;

const Header = ({ children }) => (
  <StyledHeader>
      {children}
  </StyledHeader>
);

export default Header;
