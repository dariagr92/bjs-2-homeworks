'use strict';

function solveEquation(a, b, c) {
   let arr = [];
  // код для задачи №1 писать здесь
  let d;
  d = b**2 - 4*a*c;
 
  if (d == 0){
    let x1 = - b/(2*a);
    arr = [x1];
  }
  else if (d > 0){
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr = [x1, x2];
  } 
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, percentCh, contributionCh, amountCh, dateCh, message;

  percentCh = Number(percent);
  contributionCh = Number(contribution);
  amountCh = Number(amount);
  dateCh = Number(date);

  if (isNaN(percentCh)){
    message = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
    return message; 
  }
  if (isNaN(contribution)){
    message = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return message; 
  }
  if (isNaN(amountCh)){
    message = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; 
    return message; 
  }
  if (isNaN(dateCh)){
    message; `Параметр "Дата" содержит неправильное значение "${date}"`;
    return message;  
  }

  let dateNow = Date.now();
  let term, creditBody, P, payment, totalSumm;
  term = Math.floor((dateCh - dateNow)/1000/60/60/24/30);
  creditBody = amountCh - contributionCh;
  P = percentCh / 1200;
  payment = creditBody * (P + (P / (((1 + P)**term) - 1)));
  totalSumm = payment * term;
  totalAmount = Number(totalSumm.toFixed(2));
 

  // код для задачи №2 писать здесь

  return totalAmount;
}

