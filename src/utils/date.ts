import { isThisYear, format } from "date-fns";
import { capitalize } from "lodash";

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
    if (!isThisYear(new Date(date))) {
      return capitalize(format(new Date(date), "EEEE dd.MM.yyyy HH:mm"));
    }
    return capitalize(format(new Date(date), "EEEE d. MMMM HH:mm"));
  } catch (error) {
    return date;
  }
};
