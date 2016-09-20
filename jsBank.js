// JS Bank Simple App for Compounding Interest with Applicant Information


var prompt = require("prompt");



var total=0;
var deposit=0;
var salary=0;
var duration=0;

var profit=0;
var emi=0;

var rate=0.0249;

prompt.start();

prompt.get( ['Total Salary', 'Total Years', 'Total Loan', 'Deposit'], function(err, result)
	{
		
		// Get the input
		salary=result['Total Salary'];
		total=result['Total Loan'];
		duration=result['Total Years'];
		deposit=result['Deposit'];

		if( isNaN(salary) || isNaN(total) || isNaN(duration) || isNaN(deposit) )
		{
			console.log('dont try and fool me, enter real numbers');
		}
		else
		if(salary<0 || deposit<0 || duration<0 || total<0)
		{
			console.log('dont try and fool me, enter real numbers');
		}
		else
		if (deposit < (total*0.20))
		{
			console.log ('Sorry your deposit is less than 20% of the loan');
		}
		else
		if (duration > 6)
		{
			console.log('Sorry the allowed is 6 years');
		}
		else
			yformula();
	}
	);

function yformula()
{
		// Y's Formula
	
		var net=total-deposit;

		var profit= (net * rate * duration);

		var mi=(net+profit)/(duration*12);
		
		if (mi > (salary*0.50))
		{
		console.log('The Interest exceeds 50% of your salary');
		}
		else
		{
			console.log('Profit '+profit);
			console.log('Installment '+mi);
		}
}
