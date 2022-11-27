export const convertDateObjectToDateOnlyString = (
  date: Date | null
): string => {
  // Tja welke anders... :)
  if (date === null) {
    return "01-01-1970";
  }

  return (
    date.getFullYear().toString() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};
