	// The piece of code is to specifically greet Nader or Anjli

	// The Construct initializes Readline library
	
	const readline = require('readline');

	// Create Interface is to initialize the stream
	
	const r1=readline.createInterface(
	{
		input: process.stdin,
		output: process.stdout
	});

	// Question is to ask the user for his/her name on the Console
	
	r1.question('What is your name?', (answer) => 
	{ 
		if (answer=='Anjli' || answer=='Nader' || answer=='anjli' || answer=='nader')
			console.log('Hi '+answer);
		else
			console.log('Dont know you');

		r1.close();

	});

