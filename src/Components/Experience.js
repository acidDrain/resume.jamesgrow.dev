import styled from "styled-components";
import {
  getThemeBg2,
  getThemeBorder,
  getThemeFg,
  getThemeLink,
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
  color: ${getThemeBorder};
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
      border-bottom: thin solid ${getThemeBorder};
      border-left: none;
      margin-left: 0.20rem;
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
  @media print {
    page-break-before: auto;
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const StyledHistoryRecord = styled.div`
  @media print {
    page-break-inside: avoid;
    background-color: white;
    color: black;
  }
  display: flex;
  flex-direction: column;
  background-color: ${getThemeBg2};
  color: ${getThemeFg};
  border: ${(props) => `1px solid ${getThemeFg(props).replace(/1\.0/, "0.5")}`};
  padding: 1.0rem;
  width: calc(100%);
  margin: auto;
`;

const SkillsAndTech = styled.div`
  display: flex;
  padding: 0.25rem;
  margin: 0;
  text-align: left;
  max-width: 100%;
  flex-wrap: wrap;
  span:nth-child(even) {
    display: flex;
    flex: 1 1 auto;
    text-align: left;
    flex-wrap: wrap;
    overflow-wrap: anywhere; 
    padding-left: 0.5rem;
    align-self: flex-end;
    @media screen and (min-width: 160px) and (max-width: 800px) {
      font-size: 0.65rem;
    }
    @media screen and (min-width: 801px) {
      font-size: 0.75rem;
    }
  }
  span:nth-child(odd) {
    display: flex;
    flex: 0 1 auto;
    text-align: left;
    flex-wrap: wrap;
    overflow-wrap: anywhere;
    font-size: 0.5rem;
    color: ${getThemeBorder};
    @media screen and (max-width: 800px) {
      font-size: 0.75rem;
    }
    @media screen and (min-width: 801px) {
      font-size: 0.75rem;
    }
  }

  @media print {
    color: black;
    background-color: white;
  }
`;

const HistorySummary = styled.div`
  text-align: left;
  margin: 0.125rem auto 0.125rem 0rem;
  padding: 0rem;
  font-size: 100%;
  @media screen and (max-width:800px) {
    margin: 0.125rem auto 0.125rem 0rem;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1920px) {
    margin: 0.125rem auto 0.125rem 0rem;
    font-size: 0.85rem;
  }
  @media screen and (min-width: 1920px) {
    margin: 0.125rem auto 0.125rem 0rem;
    font-size: 0.95rem;
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
  margin: 0.125rem auto 0.125rem 0rem;
  padding: 0rem;
  font-size: inherit;
  @media print {
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const HistoryDescription = styled.ul`
  text-align: left;
  padding-left: 1.0rem;
  font-size: 100%;
  @media screen and (max-width: 800px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1920px) {
    font-size: 0.85rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 0.95rem;
  }
  @media print {
    page-break-inside: avoid;
    page-break-after: auto;
  }
`;

const LI = styled.li`
  margin: 0.1rem 0;
`;

const TimelineBullet = styled.span`
  background-color: ${getThemeFg};
  border-radius: 1rem;
  border: 1px solid;
  display: flex;
  height: 0.5rem;
  margin-left: 0.25rem;
  width: 0.5rem;
  @media screen and (max-width: 800px) {
    margin-top: 1.75rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1280px) {
    margin-top: 1.85rem;
  }
  @media screen and (min-width: 1281px) and (max-width: 1920px) {
    margin-top: 1.90rem;
  }
  @media screen and (min-width: 120.0rem) {
    margin-top: 1.90rem;
  }
  @media print {
    margin-top: 1.5rem;
  }
`;

const HistoryRowWrapper = ({ children, borders, indent }) => {
  return (
    <Row>
      {indent && <TimelineBullet />}
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
  font-size: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media screen and (max-width:50rem) {
    font-size: 0.85rem;
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
  margin: 0;
  @media screen and (max-width: 800px) {
    flex: 0 1 auto;
    margin: 0.1rem 0;
  }
  @media screen and (min-width: 801px) {
    flex: 0 1 auto;
  }
  @media print {
    color: black;
    background-color: white;
  }
`;

const FlexTitle = styled(FlexItem)`
  align-items: flex-start;

  @media screen and (max-width: 800px) {
    flex: 0 1 auto;
    font-size: 1.0rem;
  }
  @media screen and (min-width: 801px) {
    flex: 0 1 auto;
    font-size: 1.25rem;
  }
`;

const FlexDuration = styled(FlexItem)`
  @media screen and (max-width: 800px) {
    font-size: 0.75rem;
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
  @media screen and (min-width: 801px) {
    font-size: 1.0rem;
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
    font-size: 0.75rem;
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
        <FlexTitle variant={getThemeLink}>
          <strong>{title}</strong>
        </FlexTitle>
        <FlexDuration variant={getThemeBorder}>
          <strong>{duration}</strong>
        </FlexDuration>
      </Row>
      <Row><FlexItem variant={getThemeBorder}><strong>{company}</strong></FlexItem></Row>
      <Row>
        <FlexItem variant={getThemeBorder}>{formatDateString(startDate)}</FlexItem>
        <FlexItem>&nbsp;-&nbsp;</FlexItem>
        <FlexItem variant={getThemeBorder}>{formatDateString(endDate)}</FlexItem>
      </Row>
      <Row><FlexItem variant={getThemeBorder}>{location}</FlexItem></Row>
    </StyledCompanyRecordHeader>
);

const H3 = styled.h3`
  display: flex;
  color: ${getThemeBorder};
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  padding-right: 0.5rem;
  &::after {
    content: "";
    display: none;
  }
  @media screen and (min-width: 100px) and (max-width: 800px) {
    flex: 1 0 auto;
    font-size: 1.33rem;
    max-width: calc(25%);
  }
  @media print {
    color: black;
    background-color: white;
    page-break-before: auto;
    page-break-after: avoid;
  }
`;

const StyledCompanyNameAndDuration = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  .duration {
    display: flex;
    font-size: 0.85rem;
    align-self: center;
    justify-self: flex-start;
    text-align: left;
    align-content: flex-start;
    align-items: flex-start;
    justify-items: flex-start;
    color: ${getThemeBorder};
    flex: 1 1 auto;
      padding-left: 0.5rem;
    &::before {
      content: " 🕔 ";
        padding-right: 0.3rem;
    }
    @media screen and (min-width: 800px) {
      flex: 0 1 auto;
      font-size: 0.8rem;
    }
    @media print {
      color: black;
      background-color: white;
    }
  }
  @media print {
    color: black;
    background-color: white;
  }
`;


const CompanyNameAndDuration = ({ company, duration }) => <StyledCompanyNameAndDuration><H3>{company}</H3><div className="duration">{duration}</div></StyledCompanyNameAndDuration>

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
            {positions.length > 1 && <CompanyNameAndDuration company={company} duration={toDuration(toMonths(toDays(getLatestTime({ positions }), getEarliestTime({ positions }))))} />}
              {positions.map((
                { endDate, startDate, location, title, description, summary, skillsTech },
                index
              ) => (
                  <HistoryRowWrapper
                    indent={positions.length > 1 && "1rem"}
                    borders={ShouldDisplayBorder(index, positions.length, getThemeFg(props).replace(/1\.0/, '0.5'))}
                    key={`${endDate}-${startDate}`}
                  >
                    <CompanyRecordHeaderWrapper
                      title={title}
                      startDate={startDate}
                      endDate={endDate}
                      duration={toDuration(toMonths(toDays(endDate, startDate)))}
                      company={positions.length < 2 ? company : ""}
                      location={location}
                    />
                    <HistorySummary>{summary.length > 0 && summary.split('\n').map(s => <P key={s}>{s}</P>)}</HistorySummary>
                    <HistoryDescription>
                      {description.length > 0 && description.split('\n').map(d => <LI key={d}>{d}</LI>)}
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
