let screen = document.querySelector(".display p");
screen.innerHTML = " ";
let num = 0;
let sum = 0;
let multiply = 1;
let division = 1;
let lastop = "";

function pushToScreen(x) {
  screen.innerHTML += x;
  num = screen.innerHTML;
}
function doOperation(op) {
  switch (op) {
    case "+": {
      console.log(num);
      sum += parseInt(num);
      num = 0;
      lastop = op;
      screen.innerHTML = "";
      break;
    }
    case "-": {
      sum -= parseInt(num);
      sum *= -1;
      num = 0;
      screen.innerHTML = "";
      lastop = op;
      break;
    }
    case "/": {
      division = parseInt(num) / division;
      num = 0;
      screen.innerHTML = "";
      lastop = op;
      break;
    }
    case "*": {
      multiply *= parseInt(num);
      num = 1;
      screen.innerHTML = "";
      lastop = op;
      break;
    }
    case "=": {
      if (lastop == "-") {
        screen.innerHTML = parseInt(sum) - parseInt(num);
        num = "";
      } else if (lastop == "/") {
        let show = parseInt(division) / parseInt(num);
        //console.log(show);
        screen.innerHTML = show;
        num = "";
      } else if (lastop == "*") {
        let show = parseInt(multiply) * parseInt(num);
        //console.log(show);
        screen.innerHTML = show;
      } else {
        let show = parseInt(sum) + parseInt(num);
        //console.log(show);
        screen.innerHTML = show;
      }
    }
  }
}
function Reset() {
  screen.innerHTML = "";
  num = "";
  sum = 0;
}

function del() {
  let number = screen.innerHTML;
  let newnum = number.slice(0, -1);
  //console.log(newnum);
  screen.innerHTML = newnum;
}
function changeTheme() {
  let input = document.querySelector("input");
  let main = document.querySelector("#calculator");
  let defaultVal = input.defaultValue;
  let currentVal = input.value;
  if (currentVal - defaultVal == 0) {
    main.classList.remove("theme-2");
    main.classList.remove("theme-3");
    main.classList.add("theme-1");
  } else if (currentVal - defaultVal == 1) {
    main.classList.remove("theme-3");
    main.classList.remove("theme-1");
    main.classList.add("theme-2");
  } else {
    main.classList.remove("theme-2");
    main.classList.remove("theme-1");
    main.classList.add("theme-3");
  }
}
