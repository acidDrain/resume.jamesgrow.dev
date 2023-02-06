const getThemeColors = ({ colors }) => ({
  ...colors,
});

const getThemeBg2 = ({ theme }) => getThemeColors(theme).bg2;
const getThemeBg = ({ theme }) => getThemeColors(theme).bg;
const getThemeFg = ({ theme }) => getThemeColors(theme).fg;
const getThemeLink = ({ theme }) => getThemeColors(theme).link;
const getThemeBorder = ({ theme }) => getThemeColors(theme).borderColor;


/* Date Formatting Helpers */
const toDays = (end, start) => Math.floor((end-start)/(86400*1000.0));

const toMonths = days => Math.floor(days/30);

const toDuration = months => {
  if (months%12) {
    const years = Math.floor(months/12);
    if (years > 0) {
      if (years === 1) {
        return `${years} yr, ${months%12} month${months%12 > 1 ? 's' : ''}`;
      } else {
        return `${years} yrs, ${months%12} month${months%12 > 1 ? 's' : ''}`;
      }
    } else {
      return `${months%12} month${months%12 > 1 ? 's' : ''}`;
    }
  } else {
    return `${months/12} yr${months/12 > 1 ? 's' : ''}`
  }
};

const formatDateString = dateString => `${new Date(dateString).toDateString().split(" ")[1]} ${new Date(dateString).toDateString().split(" ")[3]}`

const getLatestTime = ({ positions }) => positions.map(p => p.endDate).reduce((acc, curr) => (curr >= acc) ? curr : acc);

const getEarliestTime = ({ positions }) => positions.map(p => p.startDate).reduce((acc, curr) => (curr <= acc) ? curr : acc);

export { getThemeBg2, getThemeBg, getThemeFg, getThemeBorder, getThemeLink, toDays, toMonths, toDuration, formatDateString, getEarliestTime, getLatestTime };
