# Age Calculator App - README

## Overview
The **Age Calculator App** is a simple web application that calculates the user's age based on the date of birth they provide. It breaks down the result into years, months, and days, giving users a detailed view of their age.

## Project Structure
This project consists of three main files:
1. **index.html**: Contains the structure of the app and the form inputs for the user to enter their birth date.
2. **app.css**: Provides the styling for the app, ensuring a clean and responsive design.
3. **app.js**: Contains the logic that calculates the user's age when the form is submitted.

## Features
- Allows users to input their day, month, and year of birth.
- Calculates the precise age in years, months, and days.
- Automatically adjusts for future birthdays and negative day/month differences.
- Provides a user-friendly interface with clear formatting and easy-to-use form fields.

## File Breakdown

### 1. HTML (`index.html`)
The HTML file defines the basic structure of the app:
- **Input fields**: Users can enter their day, month, and year of birth using three separate number input fields.
- **Output display**: The results are displayed dynamically in the form of years, months, and days.
- **JavaScript inclusion**: The `app.js` script is linked to handle the age calculation logic.

### 2. CSS (`app.css`)
The CSS styles the form and output, making the app visually appealing:
- Uses the **Poppins** font from Google Fonts for a modern look.
- Implements a responsive design that adapts to various screen sizes.
- Defines custom colors and styles, such as purple for highlighting results and a clean white container for the form.
  
### 3. JavaScript (`app.js`)
The JavaScript handles the following:
- **Input validation**: Ensures that valid date values are entered.
- **Age calculation**: Calculates the difference between the current date and the entered birth date.
- **Result display**: Outputs the calculated age in years, months, and days.
- **Clear input fields**: Resets the form after the calculation is complete.

## How to Use
1. Enter your birth date in the **Day**, **Month**, and **Year** fields.
2. Click the arrow button to calculate your age.
3. The results will display below, showing how old you are in **years**, **months**, and **days**.
4. The inputs will be automatically cleared after the calculation.

## Dependencies
- **Google Fonts**: The Poppins font is used for styling. It's loaded via the following link in the HTML file:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  ```

## Browser Compatibility
The app is compatible with all modern browsers (Chrome, Firefox, Safari, and Edge). It uses basic HTML, CSS, and JavaScript without any external libraries or frameworks.

## Future Enhancements
- Input validation to ensure the user enters a valid date (e.g., handling leap years).
- Add animations for smoother transitions when displaying results.
- Allow for international date formats based on user location.

