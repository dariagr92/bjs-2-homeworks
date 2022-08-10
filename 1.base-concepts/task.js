'use strict';

function solveEquation(a, b, c) {
   let arr;
  // код для задачи №1 писать здесь
  let d, x1, x2;
  
  d = b**2 - 4*a*c;
  if (d < 0) {
    arr = [];
  }
  else if (d == 0){
    x1 = - b/(2*a);
    arr = [x1];
  }
  else{
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr = [x1, x2];
  } 
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, percentCh, contributionCh, amountCh, dateCh;
  percentCh = Number(percent);
  contributionCh = Number(contribution);
  amountCh = Number(amount);
  dateCh = Number(date);

  if (typeof percentCh !== 'Number'){
        console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`); 
  }
  if (typeof contributionCh !== 'Number'){
    console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`); 
  }
  if (typeof amountCh !== 'Number'){
    console.log(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`); 
  }
  if (typeof dateCh !== 'Number'){
    console.log(`Параметр "Дата" содержит неправильное значение "${date}"`); 
  }

  let dateNow = Date.now;
  let term, creditBody, P, payment, totalSumm;
  term = (dateCh - dateNow())/1000/60/60/24/30;
  creditBody = amountCh - contributionCh;
  P = percentCh / 1200;
  payment = creditBody * (P + (P / (((1 + P)**term) - 1)));
  totalSumm = payment * term;
  totalAmount = totalSumm.toFixed(2);
 

  // код для задачи №2 писать здесь

  return totalAmount;
}

