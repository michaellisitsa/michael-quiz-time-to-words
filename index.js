const SPECIAL_TIMES = {
  12: "midday",
  0: "midnight",
};

const NUMBER_TO_NAME = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half",
};

function parseTimeAsNumber(expression) {
  const [hours, minutes] = expression.split(":");
  return [parseInt(hours), parseInt(minutes)];
}

function formatAs12HourTime(hours) {
  if (hours <= 12) {
    return NUMBER_TO_NAME[hours];
  }

  return NUMBER_TO_NAME[hours - 12];
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hours, minutes] = parseTimeAsNumber(time);

  if (minutes === 0 && SPECIAL_TIMES[hours]) {
    return SPECIAL_TIMES[hours];
  }

  if (minutes === 0) {
    return `${formatAs12HourTime(hours)} o'clock`;
  }

  if (minutes <= 30) {
    return `${NUMBER_TO_NAME[minutes]} past ${formatAs12HourTime(hours)}`;
  }

  return `${NUMBER_TO_NAME[60 - minutes]} to ${formatAs12HourTime(hours + 1)}`;
}

module.exports = { convertTimeToWords };
