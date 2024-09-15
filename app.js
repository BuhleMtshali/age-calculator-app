let inputDayElement = document.getElementById("day");
let inputMonthElement = document.getElementById("month");
let inputYearElement = document.getElementById("year");
let outputYearElement = document.getElementById("output-year");
let outputMonthElement = document.getElementById("output-month");
let outputDayElement = document.getElementById("output-days");
let calculateBtn = document.getElementById("arrow");
let date = new Date();
let today = new Date();

//function
calculateBtn.addEventListener("click", () => {
  let currentYear = new Date(inputYearElement.value);
  let currentMonth = new Date(inputMonthElement.value);
  let currentDay = new Date(inputDayElement.value);
  let yearDifference = date.getFullYear() - currentYear.getFullYear();
  let monthDifference = date.getMonth() - currentMonth.getMonth();
  let dayDifference = date.getDate() - currentDay.getDate();
  let nextBirthday = new Date(currentYear, currentMonth, currentDay);
  let timeDifference = nextBirthday - today;
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //displaying results
  outputYearElement.innerText = yearDifference;
  outputMonthElement.innerText = monthDifference;
  outputDayElement.innerText = dayDifference % 30;
  //outputDayElement.innerText = dayDifference;
  inputDayElement.value = "";
  inputMonthElement.value = "";
  inputYearElement.value = "";
});
