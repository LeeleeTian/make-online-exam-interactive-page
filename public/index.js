function calculateGrade() {
  let option = [1, 2, 3, 4];
  let questionNumber = [1, 2];

  let fillBlank = option.map((o) => document.getElementById("fillBlank_" + o).value);

  let singleChoice = questionNumber.map((q) => option.reduce((value, o) =>
      (document.getElementById("singleChoice_" + q + "_" + o).checked)?
       value = document.getElementById("singleChoice_" + q + "_" + o).value : value
  , ""));

  let multiChoice = questionNumber.map((q) => option.reduce((arr, o) => {
    if(document.getElementById("multiChoice_" + q + "_" + o).checked)
      arr.push(document.getElementById("multiChoice_" + q + "_" + o).value);
    return arr;
  }, []));

  let trueOrFalse = questionNumber.map((q) => questionNumber.reduce((value, o) =>
      (document.getElementById("trueOrFalse_" + q + "_" + o).checked)?
       value = document.getElementById("trueOrFalse_" + q + "_" + o).value : value
  , ""));

  let answer = {
    fillBlank: fillBlank,
    singleChoice: singleChoice,
    multiChoice: multiChoice,
    trueOrFalse: trueOrFalse,
    shortQuestion: document.getElementById("model").value
  };

  document.getElementById("massage").innerHTML = "总分： " + printTotalGrade(answer);
};
