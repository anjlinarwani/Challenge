
	// The Code is for taking a number from the user and
	// show the total of the series of the numbers multiples of 3 and 5 in the series

	
	//Construct Initialize Readline
	
	const readline = require('readline');

	// Create Interface for Input stream
	
	const r1=readline.createInterface
	({
		input: process.stdin,
		output: process.stdout
	});

	// Ask the user for a number
	
	r1.question('Key in a number ', (answer) => 
	{ 
		// Loop Counter
		var i=0;
		// Total
		var n=0;

		if(!isNaN(answer))
		{
			while(i<=answer)
			{
				if( (i%3) == 0 ) 
					n=n+i;
				else 
					if ( (i%5) == 0 )
						 n=n+i;
				i++;
			}
		}	
		console.log('The Total is ' + n); 
		
		r1.close();
	});

