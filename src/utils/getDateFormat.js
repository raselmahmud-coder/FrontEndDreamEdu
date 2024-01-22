export const getDateFormat = (MUIDate) => {
  if (MUIDate) {
    const convertDate = new Date(MUIDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return convertDate;
  }
  return console.error("Date is not valid");
};
