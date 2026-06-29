// 1. Defining the user profile using appropriate variables and data types

const firstName = "Rajat"; // String: A name typically doesn't change
const lastName = "Sharma"; // String
const dateOfBirth = "2005-12-16"; // String (or Date object, but we'll stick to String for now)

let age = 20; // Number: This will change every year
let currentSemester = 6; // Number: Changes every 6 months
const degree = "B.Tech CSE"; // String: Constant for the duration of the program

let isLookingForInternship = true; // Boolean: Might change to false once hired
let activeHackathonTeam = "Tech Morphs"; // String: Could change depending on the event

// 2. Printing the variables to the console
console.log("--- User Profile ---");
console.log("Name:", firstName, lastName);
console.log("Age:", age);
console.log("Degree:", degree, "(Semester " + currentSemester + ")");
console.log("Available for Hire:", isLookingForInternship);
console.log("Current Team:", activeHackathonTeam);

// 3. Demonstrating 'let' in action (updating a variable)
age = 21; 
console.log("Updated Age for next year:", age);