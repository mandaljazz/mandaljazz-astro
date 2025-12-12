import { format, isThisYear } from "date-fns";
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
    return format(new Date(date), "dd.MM.yyyy");
  } catch (error) {
    return date;
  }
};

export const formatHumanDate = (date: string) => {
  try {
    return format(new Date(date), "EEEE d. MMMM");
  } catch (error) {
    return date;
  }
};

export const formatHumanDateTime = (dateString: string) => {
  const date = new Date(dateString);
  try {
    if (!isThisYear(date)) {
      return capitalize(format(date, "EEEE dd.MM.yyyy HH:mm"));
    } else {
      return capitalize(format(date, "EEEE d. MMMM HH:mm"));
    }
  } catch (error) {
    return date;
  }
};
