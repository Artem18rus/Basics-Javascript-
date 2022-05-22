"use strict";

function solveEquation(a, b, c) {
  let arr = [];  
  let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {		
		let oneRoot = -b / (2 * a);
			arr.push(oneRoot);
	} else if (d > 0) {
		let firstRoot = (-b + Math.sqrt(d))/(2 * a);
		let secondRoot = (-b - Math.sqrt(d))/(2 * a);
			arr.push(firstRoot, secondRoot);		  		
	} 
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
   let totalAmount;
		if (isNaN(percent)) {
		return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(contribution)) {
		return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(amount)) {
		return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	} 	
	let returnAmountBank = amount - contribution;	
	let date1 = new Date();	
	let diff = Date.parse(date) - Date.parse(date1);
	let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);	
	let P = percent / 12 / 100;
	let monthlyFee = returnAmountBank * (P + (P / (((1 + P) ** creditTerm) - 1)));
			totalAmount = creditTerm * monthlyFee;				
    return Number(totalAmount.toFixed(2));	
}