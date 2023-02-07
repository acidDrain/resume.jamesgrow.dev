import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { getThemeColor } from "./util";
import { Experience, Header } from "./Components";
import ContactCard from "./ContactCard";
import themes from "./styles/themes";
import ExperienceData from "./data.json";

const AppWrapper = styled.div`
  display: grid;
  font-size: 1.0rem;
  grid-auto-rows: minmax(1rem, auto);
  row-gap: calc(1rem);
  justify-content: center;

  @media screen and (min-width: 100px) and (max-width: 800px) {
    flex-direction: column;
    max-width: calc(91vw);
    margin: 1rem auto;
  }

  @media screen and (min-width: 801px) and (max-width: 1919px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: calc(85vw);
    margin: 2rem auto;
    font-size: 1.0rem;
  }

  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: calc(75vw);
    margin: 2rem auto;
    font-size: 1.33rem;
  }

  @media screen and (min-width: 2201px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: calc(65vw);
    margin: 2rem auto;
    font-size: 1.50rem;
  }

  @media print {
    color: black;
    background-color: white;
    border-color: black;
    font-size: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }
  *,&:after,&:before {
    box-sizing: inherit;
  }
  body {
    color: ${(props) => getThemeColor(props.theme)("fg")};
    background-color: ${(props) => getThemeColor(props.theme)("bg")};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Lato, Helvetica, Arial, sans-serif;
    transition: all 0.3s linear;
    @media print {
      color: black;
      background-color: white;
      border-color: black;
    }
  }
`;

const themeOptions = ["dark", "light"];

function App() {
  const defaultColorScheme = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [currentTheme, setTheme] = useState(defaultColorScheme);

  const themeToggle = (e) => {
    e.preventDefault();
    const [nextTheme] = themeOptions.filter((t) => t !== currentTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <AppWrapper>
        <Header>
          <ContactCard
            name="James M Grow"
            phone="+1 (650) 383-0609"
            email="info@jamesgrow.dev"
            linkedInUsername="jamesmgrow"
            github="acidDrain"
            activeTheme={currentTheme}
            themeToggle={themeToggle}
            themeTogglelabel={String.fromCodePoint(
              themes[currentTheme].entities.toggleIcon,
            )}
          />
        </Header>
        <Experience theme={themes[currentTheme]} experience={ExperienceData.data} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
