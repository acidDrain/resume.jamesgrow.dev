const getThemeColors = ({ colors }) => ({
  ...colors,
});

const getThemeColor = ({ colors }) => (accent => {
  const lowercaseAccent = (typeof accent === String) ? String.prototype.toLowerCase(accent) : accent;
  return getThemeColors({ colors })[lowercaseAccent];
});

/* Date Formatting Helpers */
const toDays = (end, start) => Math.floor((end-start)/(86400*1000.0));

const toMonths = days => Math.floor(days/30);

const toDuration = (end, start) => {
  let _end;
  if ((!end || end <= 0) && start) {
    _end = Date.now();
  } else {
    _end = end;
  }
  const months = toMonths(toDays(_end, start));
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

const formatDateString = dateString => {
  if (parseInt(dateString) >= 0)
    return `${new Date(dateString).toDateString().split(" ")[1]} ${new Date(dateString).toDateString().split(" ")[3]}`
  else
    return `Current`
}
;

const getLatestTime = ({ positions }) => positions.map(p => p.endDate).reduce((acc, curr) => (curr >= acc) ? curr : acc);

const getEarliestTime = ({ positions }) => positions.map(p => p.startDate).reduce((acc, curr) => (curr <= acc) ? curr : acc);

export {  getThemeColor, toDays, toMonths, toDuration, formatDateString, getEarliestTime, getLatestTime };
