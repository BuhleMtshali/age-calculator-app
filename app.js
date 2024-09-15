let inputDayElement = document.getElementById("day");
let inputMonthElement = document.getElementById("month");
let inputYearElement = document.getElementById("year");
let outputYearElement = document.getElementById("output-year");
let outputMonthElement = document.getElementById("output-month");
let outputDayElement = document.getElementById("output-days");
let calculateBtn = document.getElementById("arrow");

// Event listener for the calculate button
calculateBtn.addEventListener("click", () => {
  // Get the input values
  let inputYear = parseInt(inputYearElement.value);
  let inputMonth = parseInt(inputMonthElement.value) - 1; // Months are 0-indexed
  let inputDay = parseInt(inputDayElement.value);

  // Create the date object for the birthday
  let birthDate = new Date(inputYear, inputMonth, inputDay);
  let today = new Date();

  // Calculate the differences
  let yearDifference = today.getFullYear() - birthDate.getFullYear();
  let monthDifference = today.getMonth() - birthDate.getMonth();
  let dayDifference = today.getDate() - birthDate.getDate();

  // Adjust for future birthday (if month or day has not yet passed)
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    yearDifference--; // Reduce the year if the birthday hasn’t happened yet this year
    monthDifference += 12; // Correct the month difference
  }

  // If day difference is negative, adjust month and day
  if (dayDifference < 0) {
    let previousMonth = (today.getMonth() - 1 + 12) % 12; // Handle January (month 0)
    let daysInPreviousMonth = new Date(
      today.getFullYear(),
      previousMonth + 1,
      0
    ).getDate(); // Get days in the previous month
    dayDifference += daysInPreviousMonth;
    monthDifference--;
  }

  // Output the results
  outputYearElement.innerText = yearDifference;
  outputMonthElement.innerText = monthDifference;
  outputDayElement.innerText = dayDifference;

  // Clear inputs
  inputDayElement.value = "";
  inputMonthElement.value = "";
  inputYearElement.value = "";
});
