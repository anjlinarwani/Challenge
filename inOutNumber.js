
	// The Code is to take a number input and generate a total for train tickets in AED
	
	// Construct Initialize Readline
	
	const readline = require('readline');

	// Create Interface for Input stream
	
	const r1=readline.createInterface
	({
		input: process.stdin,
		output: process.stdout
	});

	// Ask the user for input

	r1.question('Key a number of train tickets ', (answer) => 
	{ 

		// Loop Counter
		var i=0;

		// Sum
		var n=0;

		// Check the input is a number
		if(!isNaN(answer))
		{
			// Total the train tickets amount at a Rate of 110 AED
			while(i<answer)
			{
				i++;
				n+=110;
			}			

		}

		console.log('The Train Tickets Total is ' + n + ' AED'); 

		r1.close();

	});

