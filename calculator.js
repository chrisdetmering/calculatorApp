const display = document.querySelector(".display");
const values = []; 
let operation; 


document.querySelectorAll(".value").forEach(button => { 
  button.addEventListener('click', event => { 
    const num = event.target.value; 
 
    if (!values[0]) { 
      values[0] = num;
      display.value = num; 
      return; 
    }

    if (!values[1] && !operation) { 
      values[0] += num;
      display.value = values[0]; 
      return; 
    } 

    if (!values[1]) { 
      values[1] = num; 
      display.value = num; 
      return; 
    }

      values[1] += num; 
      display.value = num; 
  })

})

document.querySelectorAll(".operator").forEach(button => { 
  button.addEventListener('click', event => { 
    const operator = event.target.value; 

    setOperator(operator)
    display.value = operator; 
  })

})

document.querySelector(".equal").addEventListener('click', () => { 
  const calculation = operation(...values); 
  display.value = calculation; 
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


//calculations
function add(num1, num2) { 
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) { 
  return num1 - num2; 
}
function multiply(num1, num2) { 
  return num1 * num2;
}
function divide(num1, num2) { 
  return num1 / num2; 
}




// Example:
// Press the 1 button
// Press the add button
// Press the 1 button
// Press the add button again (result should show as 2 on the screen)
// Press the 1 button
// Press the add button again (result should show as 3 on the screen)
// Pressing the clear button resets screen to 0

