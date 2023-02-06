import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  display: flex;
  max-width: calc(100%);
  border: thin solid;
  background-color: ${(props) => props.theme.colors.bg2};
  @media screen and (min-width: 1rem) and (max-width: 50rem) {
    padding: 0.35em 1.0em;
  }
  @media screen and (min-width: 50.1rem) and (max-width: 119.99rem) {
    padding: 0em;
  }
  @media screen and (min-width: 120rem) and (max-width: 142.10rem) {
    padding: 0em 0em 0.5em 0em;
  }
  @media screen and (min-width: 142.11rem) {
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

const Header = (props) => (
  <StyledHeader>
      {props.children}
  </StyledHeader>
);

export default Header;