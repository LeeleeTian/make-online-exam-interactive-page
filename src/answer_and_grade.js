'use strict'

function loadCorrectAnswers() {
  return {
    fillBlank: ['统一建模语言', '封装性', '继承性', '多样性'],
    singleChoice: ['B', 'A'],
    multiChoice: [['A', 'B', 'D'], ['A', 'B', 'C']],
    trueOrFalse: ['false', 'true'],
    shortQuestion: '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'
  };
};

function loadGrades() {
  return {
    fillBlank: 5,
    singleChoice: 10,
    multiChoice: 10,
    trueOrFalse: 10,
    shortQuestion: 20
  };
};
