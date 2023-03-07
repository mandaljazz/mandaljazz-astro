import format from "date-fns/format/index.js";
import capitalize from "lodash/capitalize";

export const formatTime = (date: string) => {
  try {
    return format(new Date(date), "HH:mm");
  } catch (error) {
    return date;
  }
};

export const formatDate = (date: string) => {
  try {
    return format(new Date(date), "EEEE d. MMMM");
  } catch (error) {
    return date;
  }
};

export const formatHumanDateTime = (date: string) => {
  try {
    return capitalize(format(new Date(date), "EEEE d. MMMM HH:mm"));
  } catch (error) {
    return date;
  }
};
