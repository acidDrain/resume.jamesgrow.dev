const getThemeColors = ({ colors }) => ({
  ...colors,
});

const getThemeColor = ({ theme }, accent) => getThemeColors(theme)[accent];

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

export {  getThemeColor, toDays, toMonths, toDuration, formatDateString, getEarliestTime, getLatestTime };
