	// The Code here is to Specifically greet Nader and Anjli in transcripted greeting from Arabic and Hindi

	// Construct to initialize Readline
	
	const readline = require('readline');

	// Create Interface for the input stream
	
	const r1=readline.createInterface
	({
		input: process.stdin,
		output: process.stdout
	});

	// As user for name
	
	r1.question('What is your name?', (answer) => 
	{ 

		if(answer=='Anjli' || answer=='anjli')
		{
			console.log('Namaskar '+answer);
		}
		else
		if(answer=='Nader' || answer=='nader')
		{
			console.log('Asalamalaikum ' + answer);
		}
 
		
		r1.close();

	});

