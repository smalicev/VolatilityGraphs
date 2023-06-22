// Expected "2023-06-16" input
// Converts date to day of the week (integer)
// I dont know why but 0 is monday and 6 is sunday, despite all internet sources starting at 0 for Sunday
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dateToDayInteger = function (dateString) {
  let dateObj = new Date(dateString);
  return dateObj.getDay();
}

export { dateToDayInteger }