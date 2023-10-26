/**
 * Filename: advanced_data_processing.js
 *
 * Description:
 * This code performs advanced data processing operations on a given dataset.
 * It demonstrates various techniques like data manipulation, filtering,
 * aggregation, sorting, and more.
 *
 * Author: AI Programmer
 */

// Sample dataset
const dataset = [
  { id: 1, name: 'John', age: 25, score: 85 },
  { id: 2, name: 'Emily', age: 32, score: 92 },
  { id: 3, name: 'Mark', age: 28, score: 77 },
  { id: 4, name: 'Sarah', age: 21, score: 88 },
  { id: 5, name: 'Adam', age: 30, score: 95 },
  { id: 6, name: 'Olivia', age: 24, score: 81 },
  { id: 7, name: 'Michael', age: 29, score: 90 },
  { id: 8, name: 'Emma', age: 26, score: 79 },
  { id: 9, name: 'David', age: 33, score: 87 },
  { id: 10, name: 'Sophia', age: 27, score: 92 },
  // ... and more data entries
];

// Perform data manipulation - Adding a new property
for (let i = 0; i < dataset.length; i++) {
  dataset[i].grade = getGrade(dataset[i].score);
}

// Filtering data based on a condition
const filteredData = dataset.filter((data) => data.age < 30 && data.score > 80);

// Perform aggregation - Calculating average score
const totalScore = dataset.reduce((sum, data) => sum + data.score, 0);
const averageScore = totalScore / dataset.length;

// Sorting data based on a property
const sortedData = dataset.sort((a, b) => b.score - a.score);

// Function to determine grades based on scores
function getGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else {
    return 'D';
  }
}

// Displaying results
console.log('Filtered Data:');
console.log(filteredData);
console.log('Average Score:', averageScore);
console.log('Sorted Data:');
console.log(sortedData);
console.log('Sample data manipulation:');
console.log(dataset[0]);

// ... More code and operations

// End of file