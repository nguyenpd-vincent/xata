import { format } from "date-fns";

export const formatTime = (dateTimeString: string) => {
  if (dateTimeString == "") return dateTimeString;

  const result = format(new Date(dateTimeString), "HH:mm");
  return result;
};
