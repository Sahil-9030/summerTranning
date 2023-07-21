function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    const result = document.getElementById("result").value;
    const calculatedResult = eval(result);
  
    if (calculatedResult) {
      document.getElementById("result").value = calculatedResult;
    } else {
      document.getElementById("result").value = "";
    }
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastCharacter() {
    const result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  