"use strict";

const data = require("./answerAndGrade");

function isEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b)
    ? a.length == b.length && a.every((e, i) => e === b[i])
    : a === b;
}

function computeSingleGrade(inputItem, answerItem, grade) {
  return Array.isArray(inputItem) && Array.isArray(answerItem)
    ? inputItem.reduce((result, e, i) => {
        isEqual(e, answerItem[i]) ? (result += grade) : null;
        return result;
      }, 0)
    : inputItem === answerItem
      ? grade
      : 0;
}

function computeTotalGrade(input, correctAnswer, eachGrade) {
  let totalGrade = 0;
  for (var key in input) {
    totalGrade += computeSingleGrade(
      input[key],
      correctAnswer[key],
      eachGrade[key]
    );
  }
  return totalGrade;
}

module.exports = function main(input) {
  let correctAnswer = data.loadCorrectAnswers();
  let eachGrade = data.loadGrades();
  return computeTotalGrade(input, correctAnswer, eachGrade);
};
