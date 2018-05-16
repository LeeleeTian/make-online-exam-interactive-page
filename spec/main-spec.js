'use strict'

const main = require("../main/main");

describe('calculate student grade', () => {
    it('given answers and return 5 points', () => {
      let input = {
        fillBlank: ['我爱你', '', 'NCT', '多样性'],
        singleChoice: ['', ''],
        multiChoice: [[], []],
        trueOrFalse: ['', ''],
        shortQuestion: ''
      };
      let result = main(input);
      expect(result).toEqual(5);
    });
    it('given answers and return 20 points', () => {
      let input = {
        fillBlank: ['我爱你', '', '继承性', '多样性'],
        singleChoice: ['B', 'C'],
        multiChoice: [[], []],
        trueOrFalse: ['', ''],
        shortQuestion: ''
      };
      let result = main(input);
      expect(result).toEqual(20);
    });
    it('given answers and return 25 points', () => {
      let input = {
        fillBlank: ['统一建模语言', 'Dream', '', '封装性'],
        singleChoice: ['A', 'A'],
        multiChoice: [['B', 'D'], ['A', 'B', 'C']],
        trueOrFalse: ['', ''],
        shortQuestion: ''
      };
      let result = main(input);
      expect(result).toEqual(25);
    });
    it('given answers and return 35 points', () => {
      let input = {
        fillBlank: ['统一建模语言', '封装性', '继承性', '127'],
        singleChoice: ['A', 'D'],
        multiChoice: [['A', 'B', 'D'], ['A', 'B', 'D']],
        trueOrFalse: ['true', 'true'],
        shortQuestion: ''
      };
      let result = main(input);
      expect(result).toEqual(35);
    });
    it('given answers and return 80 points', () => {
      let input = {
        fillBlank: ['统一建模语言', '封装性', '继承性', '多样性'],
        singleChoice: ['B', ''],
        multiChoice: [['A', 'B', 'D'], ['A', 'B', 'C']],
        trueOrFalse: ['false', 'false'],
        shortQuestion: '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'
      };
      let result = main(input);
      expect(result).toEqual(80);
    });
});
