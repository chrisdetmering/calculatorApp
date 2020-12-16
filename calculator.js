const display = document.querySelector(".display");
let value1; 
let value2; 
let operation; 


document.querySelectorAll(".value").forEach(button => { 
  button.addEventListener('click', event => { 
   if (isDisplay10Digits()) return; 
    const num = event.target.value; 
 
      display.value = setValues(num);
  })

})

document.querySelectorAll(".operator").forEach(button => { 
  button.addEventListener('click', event => { 
    const operator = event.target.value; 

    if (isOperation() && isValue2() && isValue1()) { 
      let result = operation(value1, value2);
      value1 = String(result); 
      value2 = undefined; 
      setOperator(operator);
      display.value = result; 
      return; 
    }
    setOperator(operator)
    display.value = operator; 
  })

})

document.querySelector(".equal").addEventListener('click', () => { 
  let result = operation(value1, value2); 
  value1 = undefined; 
  value2 = undefined; 
  operation = undefined; 
  display.value = result; 
})


document.querySelector(".clear").addEventListener('click', () => { 
  value1 = undefined; 
  value2 = undefined; 
  operation = undefined; 
  display.value = 0; 
})


function setOperator(operator) { 
  const operations = { 
    '+': add,
    '-': subtract,
    'x': multiply, 
    '/': divide,
  }

  operation =  operations[operator];
}

//values & operation are globals 
function setValues(num) { 
  if (!isValue1()) { 
    value1 = num;
    return num; 
  }

  if (!isValue2() && !operation) { 
    value1 += num;
    return value1;
  } 

  if (!isValue2()) { 
    value2 = num; 
    return num; 
  }

    value2 += num; 
    return value2; 
}

function isOperation() { 
    return operation ? true : false; 
}


function isValue1() { 
  return !!value1; 
}

function isValue2() { 
  return !!value2; 
}

function isDisplay10Digits() { 
    return display.value.length === 10; 
}


function add(num1, num2) { 
    const result = Number(num1) + Number(num2)
    return result;
}

function subtract(num1, num2) { 
  return Number(num1) - Number(num2) 
}

function multiply(num1, num2) { 
  return Number(num1) * Number(num2);
}

function divide(num1, num2) { 
  return Number(num1) / Number(num2); 
}




// Example:
// Press the 1 button
// Press the add button
// Press the 1 button
// Press the add button again (result should show as 2 on the screen)
// Press the 1 button
// Press the add button again (result should show as 3 on the screen)
// Pressing the clear button resets screen to 0

