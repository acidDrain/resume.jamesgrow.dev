import styled from "styled-components";
import {
  getThemeColor,
  toDays,
  toMonths,
  toDuration,
  formatDateString,
  getEarliestTime,
  getLatestTime
} from "../util";

const ExperienceWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media print {
    color: black;
    border: none;
    background-color: white;
    page-break-before: auto;
    page-break-inside: auto;
    page-break-after: avoid;
  }
`;

const H2 = styled.h2`
  display: flex;
  color: ${({ theme }) => getThemeColor(theme, "orange")};
  font-size: 2.0rem;
  @media print {
    color: black;
    background-color: white;
    page-break-before: avoid;
    page-break-after: avoid;
  }
  &::after {
      content: " ";
      width: calc(100%);
      height: 0.80rem;
    align-self: center;
      border-bottom: thin solid ${({ theme }) => getThemeColor(theme, "purple")};
      border-left: none;
      margin-left: 0.20rem;
    }
`;

const H3 = styled.h3`
  display: flex;
  color: ${({ theme }) => getThemeColor(theme, "orange")};
  margin: auto;
  padding: 0rem 0.0rem 0.75rem 0rem;
  flex: 0 1 auto;
  &::after {
    content: "";
    display: none;
  }
  @media screen and (min-width: 100px) and (max-width: 600px) {
    font-size: 1.20rem;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 1.50rem;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.75rem;
  }
  @media print {
    color: black;
    background-color: white;
    page-break-before: auto;
    page-break-after: avoid;
  }
`;

const H4 = styled.h4`
  display: flex;
  color: ${({ theme }) => getThemeColor(theme, "fg2")};
  margin: auto 0em;
  flex: 0 1 auto;
  &::after {
    content: "";
    display: none;
  }
  @media screen and (min-width: 100px) and (max-width: 600px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 1.30em;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.45em;
  }
  @media print {
    color: black;
    background-color: white;
    page-break-before: auto;
    page-break-after: avoid;
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media print {
    page-break-before: auto;
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const HistoryRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem;
  padding: 0rem;
  @media print {
    page-break-before: auto;
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const StyledHistoryRecord = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => getThemeColor(theme, "bg")};
  color: ${({ theme }) => getThemeColor(theme, "fg")};
  border: ${(props) => `1px solid ${getThemeColor(props.theme, "fg").replace(/1\.0/, "0.5")}`};
  padding: 1.75rem;
  @media print {
    page-break-inside: avoid;
    background-color: white;
    color: black;
  }
`;

const SkillsAndTech = styled.div`
  display: flex;
  padding: 0.0em;
  text-align: left;
  max-width: 100%;
  flex-wrap: wrap;
  span:nth-child(odd) {
    display: flex;
    flex: 0 2 auto;
    text-align: left;
    color: ${({ theme }) => getThemeColor(theme, "fg2")};
    @media screen and (max-width: 800px) {
      font-size: 0.9em;
    }
    @media screen and (min-width: 801px) {
      font-size: 0.9em;
    }
  }
  span:nth-child(even) {
    display: flex;
    flex: 2 2 auto;
    align-items: center;
    padding-left: 0.75em;
    color: ${({ theme }) => getThemeColor(theme, "fg3")};
    @media screen and (min-width: 160px) and (max-width: 800px) {
      font-size: 0.6em;
    }
    @media screen and (min-width: 801px) {
      font-size: 0.7em;
    }
  }
  @media print {
    color: black;
    background-color: white;
  }
`;

const HistorySummary = styled.div`
  text-align: left;
  margin: 0.0rem;
  @media screen and (max-width:800px) {
    font-size: calc(0.8em);
  }
  @media screen and (min-width: 801px) and (max-width: 1920px) {
    font-size: calc(0.9em);
  }
  @media screen and (min-width: 1920px) {
    font-size: calc(1.0em);
  }
  @media print {
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const P = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0.0rem;
  padding: 0.5rem 0rem;
  @media print {
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const HistoryDescription = styled.ul`
  text-align: left;
  padding-left: 1.0rem;
  @media screen and (max-width: 800px) {
    font-size: calc(0.7em);
  }
  @media screen and (min-width: 801px) and (max-width: 1920px) {
    font-size: calc(0.8em);
  }
  @media screen and (min-width: 1920px) {
    font-size: calc(0.9em);
  }
  @media print {
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const LI = styled.li`
  margin: 0rem 0rem 0.33rem 0rem;
`;

const StyledTimelineBullet = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.0rem;
  font-size: 1.0rem;
  div:nth-child(odd)  {
    display: flex;
    flex: 0 0 auto;
    border-radius: 0.5rem;
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${({ theme }) => getThemeColor(theme, "b2")};
  }
  @media screen and (max-width: 800px) {
    margin-top: 2.4em;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    margin-top: 2.6em;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    margin-top: 2.8rem;
  }
  @media screen and (min-width: 2201px) {
    margin-top: 2.7rem;
  }
  @media print {
    margin-top: 1.5rem;
  }
`;

const TimelineBullet = ({ props }) => {
  return (
    <StyledTimelineBullet {...props}>
      <div></div>
    </StyledTimelineBullet>
  );
};

const HistoryRowWrapper = ({ children, borders, indent }) => {
  return (
    <Row>
      {
        indent &&
          <TimelineBullet />
      }
      <StyledHistoryRecord style={{ marginLeft: indent, borderTop: borders.top, borderBottom: borders.bottom }}>{children}</StyledHistoryRecord>
    </Row>
  );
};

const HR = styled.hr`
  display: flex;
  height: 0.5px;
  margin: 1.5rem 0.05rem;
  @media screen and (max-width: 50rem) {
      margin: 1.1rem 0.0rem;
  }
  @media print {
    color: transparent;
    background-color: transparent;
    border-color: transparent;
  }
`;

const StyledCompanyRecordHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  @media screen and (min-width: 100px) and (max-width: 800px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    font-size: 0.85rem;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    font-size: 0.95rem;
  }
  @media screen and (min-width: 2201px) {
    font-size: 1.0rem;
  }
  @media print {
    page-break-after: auto;
    page-break-before: auto;
    page-break-inside: auto;
  }
`;

const FlexItem = styled.div`
  display: flex;
  color: ${(props) => props.variant};
  padding: 0.0312em 0.0em 0.0em 0.0em;
  font-size: 0.8rem;
  @media print {
    color: black;
    background-color: white;
  }
`;

const FlexTitle = styled(H4)`
  align-items: flex-start;
  @media screen and (min-width: 100px) and (max-width: 800px) {
    flex: 0 1 auto;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    flex: 0 1 auto;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    flex: 0 1 auto;
  }
  @media screen and (min-width: 2201px) {
    flex: 0 1 auto;
  }
`;

const FlexDuration = styled(FlexItem)`
  color: ${({ theme }) => getThemeColor(theme, "fg")};
  @media screen and (max-width: 800px) {
    flex: 0 2 auto;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    &::before {
      content: "-";
      padding: 0rem 0.75rem;
    }
  }
  @media screen and (min-width: 801px) {
    flex: 1 0 auto;
    text-align: right;
    align-items: center;
    align-content: flex-start;
    line-height: 1.78rem;
    align-self: center;
    &::before {
      content: " - ";
      padding: 0rem 0.75rem;
    }
  }
  @media print {
    flex: 1 0 auto;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    &::before {
      content: "-";
      padding: 0rem 0.75rem;
    }
  }
`;

const CompanyRecordHeaderWrapper = (
  { endDate, startDate, duration, company, title, location },
) => (
    <StyledCompanyRecordHeader>
      <Row>
        <FlexTitle variant={(props) => getThemeColor(props.theme, "green")}>
          <strong>{title}</strong>
        </FlexTitle>
        <FlexDuration variant={(props) => getThemeColor(props.theme, "red")}>
          <strong>{duration}</strong>
        </FlexDuration>
      </Row>
      <Row>
        <FlexItem variant={(props) => getThemeColor(props.theme, "red")}>
          <strong>{company}</strong>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem variant={(props) => getThemeColor(props.theme, "red")}>{formatDateString(startDate)}</FlexItem>
        <FlexItem>&nbsp;-&nbsp;</FlexItem>
        <FlexItem variant={(props) => getThemeColor(props.theme, "red")}>{formatDateString(endDate)}</FlexItem>
      </Row>
      <Row>
        <FlexItem variant={(props) => getThemeColor(props.theme, "red")}>
          {location}
        </FlexItem>
      </Row>
    </StyledCompanyRecordHeader>
);

const StyledCompanyNameAndDuration = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.0rem;
  @media print {
    color: black;
    background-color: white;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  color: ${(props) => getThemeColor(props.theme, "red")};
  padding: 0rem 0.5rem 0.5rem 0rem;
  &::before {
    content: " 🕔 ";
    padding-right: 0.3rem;
    padding-left: 0.3rem;
  }
  @media screen and (min-width: 100px) and (max-width: 800px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1919px) {
    font-size: 0.85rem;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    font-size: 0.95rem;
  }
  @media screen and (min-width: 2201px) {
    font-size: 1.0rem;
  }
  @media print {
    color: black;
    background-color: white;
  }
`;

const CompanyNameAndDuration = ({ company, duration }) => <StyledCompanyNameAndDuration><H3>{company}</H3><Duration>{duration}</Duration></StyledCompanyNameAndDuration>

const ShouldDisplayBorder = (i, l, c) => ({ top: ((i === 0)  ? `thin solid ${c}` : `thin dotted ${c}`), bottom: ((i === (l-1) ? `thin solid ${c}` : "none")) });

const Experience = ({ experience, ...props }) => {
  return (
    <ExperienceWrapper>
      <H2>Experience</H2>
      <History>
        {experience.map((
          {
            positions,
            company,
          },
        ) => (
            <HistoryRow key={company}>
              {
                positions.length > 1
                  &&
                  <CompanyNameAndDuration
                    company={company}
                    duration={toDuration(toMonths(toDays(getLatestTime({ positions }), getEarliestTime({ positions }))))}
                  />
              }
              {positions.map((
                { endDate, startDate, location, title, description, summary, skillsTech },
                index
              ) => (
                  <HistoryRowWrapper
                    indent={positions.length > 1 && "1rem"}
                    borders={ShouldDisplayBorder(index, positions.length, getThemeColor(props.theme, "orange").replace(/1\.0/, '0.5'))}
                    key={`${endDate}-${startDate}`}
                  >
                    {positions.length < 2 ?
                      <CompanyRecordHeaderWrapper
                        title={title}
                        startDate={startDate}
                        endDate={endDate}
                        duration={toDuration(toMonths(toDays(endDate, startDate)))}
                        company={company}
                        location={location}
                      />
                      :
                      <CompanyRecordHeaderWrapper
                        title={title}
                        startDate={startDate}
                        endDate={endDate}
                        duration={toDuration(toMonths(toDays(endDate, startDate)))}
                        company={""}
                        location={location}
                      />
                    }
                    <HistorySummary>{summary.length > 0 && summary.split('\n').map(s => <P key={s}>{s}</P>)}</HistorySummary>
                    <HistoryDescription>
                      {
                        description.length > 0
                          &&
                          description.split('\n').map(d =>
                            <LI key={d}>
                              {d}
                            </LI>
                          )
                      }
                    </HistoryDescription>
                    <SkillsAndTech>
                      <span><strong>Skills and Technology</strong>:</span>
                      <span>
                        {[...skillsTech].sort().join(", ").toLowerCase()}
                      </span>
                    </SkillsAndTech>
                  </HistoryRowWrapper>
                ))
              }
                    <HR />
          </HistoryRow>
          ))}
      </History>
    </ExperienceWrapper>
  );
};

export default Experience;
