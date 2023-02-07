import styled from "styled-components";
import GithubLogo from "./assets/github-mark.svg";
import GithubLogoWhite from "./assets/github-mark-white.svg";
import LinkedInLogo from "./assets/LinkedIn-Logo.png";
import { Link, Button } from "./Components";
import { getThemeColor } from "./util";

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => getThemeColor(props.theme)("bgH")};
  transition: border 0.3s linear;
  width: calc(100%);
  padding: 1em;
  /* box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.84);*/
  @media screen and (min-width: 100px) and (max-width: 800px) {
    padding: 0.1em;
    margin: 0;
  }
  @media print {
    color: black;
    background-color: white;
    border: none;
    page-break-before: auto;
    page-break-after: avoid;
    page-break-inside: auto;
    padding: 0em;
    margin: 0em;
  }
`;

const ThemeToggleButtonWrapper = styled.div`
  display: flex;
  max-width: calc(100%);
  @media print {
    color: black;
    background-color: white;
  }
  @media screen and (min-width: 100px) and (max-width: 800px) {
    flex-direction: row;
    font-size: 0.9rem;
    margin: 0em;
    padding: 0em;
  }
  @media screen and (min-width: 801px) {
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
  }
`;

const ToggleThemeButton = styled(Button)`
  display: flex;
  cursor: pointer;
  @media screen and (min-width: 1rem) and (max-width: 50.9rem) {
    padding: 0.50em;
    margin: 1em auto 1.0em auto;
  }
  @media screen and (min-width: 51.0rem) {
    padding: 1em;
  }
  @media print {
    display: none;
  }
`;

const StyledTable = styled.div`
  display: flex;
  @media screen and (min-width: 100px) and (max-width: 600px) {
    flex-direction: column;
    font-size: 1.0rem;
    margin: auto 0em;
    align-self: center;
    padding-bottom: 0.5em;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    flex-direction: row;
    font-size: 1.0rem;
    margin: auto;
    align-self: center;
    padding-bottom: 0.5em;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    flex-direction: row;
    font-size: 0.90rem;
    padding: 0.25em;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    align-content: center;
    align-self: center;
    font-size: 1.15rem;
    margin: auto;
  }
  @media screen and (min-width: 2201px) {
    font-size: 1.25rem;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin: auto;
    align-self: center;
  }
`;

const ContactIcon = styled.div`
  display: flex;
  font-size: 1em;
  flex: 0 1 auto;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin: 0em 0.3em 0em 0em;
  @media print {
    background-color: white !important;
    color: black;
    text-decoration: none;
  }
`;

const ContactData = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: 0.125em;
  margin: 0.125em;
  justify-content: left;
  @media screen and (min-width: 50.1rem) and (max-width: 119.99rem) {
    font-size: 1.20em;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  font-size: 1em;
  text-decoration: none;
  color: ${(props) => getThemeColor(props.theme)("purpleDim")};
  &:hover {
    text-decoration: underline;
  }
  @media print {
      background-color: white;
      color: black;
      text-decoration: none;
  }
`;

const ContactRecordWrapper = styled.div`
  display: flex;
  padding: 0.15em 0.25em;
  align-content: space-between;
  align-self: stretch;
  margin: 0.3em;
`;


const ContactRecord = ({ name, linkTo = "#", value }) => (
  <ContactRecordWrapper>
    <ContactIcon>
      {name}
    </ContactIcon>
    <ContactData>
      <StyledLink to={linkTo} target="_blank">
        {value}
      </StyledLink>
    </ContactData>
  </ContactRecordWrapper>
);

const ContactImg = ({ alt, ...props }) => <img alt={alt} {...props} />;

const ImgWrapper = styled(ContactImg)`
  max-width: 1.25em;
  max-height: 1.375em;
  margin: 0;
  padding: 0;
  background-color: ${(props) => getThemeColor(props.theme)("bgH")};
  transition: all 0.3s linear;
  @media print {
      background-color: white;
      color: black;
    }
`;

const ContactRecordImg = ({ imgData, linkTo = "#", value }) => (
  <ContactRecordWrapper>
    <ContactIcon>
      <ImgWrapper alt={value} src={imgData} viewBox="0 0 10 10" />
    </ContactIcon>
    <ContactData>
      <StyledLink to={linkTo} target="_blank">
        {value}
      </StyledLink>
    </ContactData>
  </ContactRecordWrapper>
);

const H1 = styled.h1`
  display: flex;
  flex: 1 0 auto;
  margin: 0.25em 0.25em;
  justify-content: center;
  font-size: 2.5em;
  @media screen and (min-width: 100px) and (max-width: 800px) {
    margin: 0.15em;
    padding-top: 0.15em;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    margin: 0.25em 1em;
    padding: 0em;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    margin: auto;
    padding: 0.25em;
  }
  @media screen and (min-width: 2201px) {
    margin: 0.25em auto;
    padding: 0.25em auto;
  }

`;

const PhoneEntity = String.fromCodePoint(128222);
const EmailEntity = String.fromCodePoint(128231);

const ContactCard = ({ name, phone, email, linkedInUsername, github, activeTheme, theme, themeToggle, themeTogglelabel }) => (
  <ContactCardWrapper>
    <ThemeToggleButtonWrapper>
      <H1>{name}</H1>
      <ToggleThemeButton
        theme={theme}
        onClick={themeToggle}
        label={themeTogglelabel}
        tooltipText="Toggle Dark/Light Mode"
      />
    </ThemeToggleButtonWrapper>
    <StyledTable>
      <ContactRecord linkTo={`tel:${phone}`} name={PhoneEntity} value={phone} />
      <ContactRecord linkTo={`mailto:${email}`} name={EmailEntity} value={email} />
      <ContactRecordImg
        alt="LinkedIn logo"
        theme={theme}
        linkTo={`https://linkedin.com/in/${linkedInUsername}`}
        imgData={LinkedInLogo}
        value="jamesmgrow"
      />
      <ContactRecordImg
        alt="GitHub logo"
        theme={theme}
        linkTo={`https://github.com/${github}`}
        imgData={(activeTheme === "dark") ? GithubLogoWhite : GithubLogo}
        value={github}
      />
    </StyledTable>
  </ContactCardWrapper>
);

export default ContactCard;
