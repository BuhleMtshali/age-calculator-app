let inputDayElement = document.getElementById("day");
let inputMonthElement = document.getElementById("month");
let inputYearElement = document.getElementById("year");
let outputYearElement = document.getElementById("output-year");
let outputMonthElement = document.getElementById("output-month");
let outputDayElement = document.getElementById("output-days");
let calculateBtn = document.getElementById("arrow");
let date = new Date();

//function
calculateBtn.addEventListener("click", () => {
  let currentYear = new Date(inputYearElement.value);
  let currentMonth = new Date(inputMonthElement.value);
  let currentDay = new Date(inputDayElement.value);

  let yearDifference = date.getFullYear() - currentYear.getFullYear();
  outputYearElement.innerText = yearDifference;
});
