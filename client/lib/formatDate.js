const formatDate = (inputDateString) => {
  const [datePart, timePart] = inputDateString.split(" ");

  const [day, month, year] = datePart.split("/");

  const date = new Date(`${month}/${day}/${year} ${timePart}`);

  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export default formatDate;
