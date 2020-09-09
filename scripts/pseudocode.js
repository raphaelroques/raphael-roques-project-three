// The Web-Dev Slot MAchine

// A landing page with the app heading, "The Web-Dev slot Machine" and a welcome animation, 

// "Welcome to the Web-Dev Slot Machine".

// A button “play” that allows users to start playing, which will navigate them to the slot machine

// Listen to the “play” button click event to :
    // -display the reels and stop button 
    // -hide the welcome screen and the play button

    // Each time the user clicks on "play", 
    // -Remove 1 to the credits number and 
    // -Add 1 to the rounds numbers

    // -Display the credits left and the round number

    // -Display the animations of the spinning reels

	// --Listen to the “Stop” button click event to:
	    // Stop the reels.
	
	    // -show the play button      
        // -hide the stop button 

        // -for each of the three images of the slot machine, generate a random number from 1 to 10 
        // then get the corresponding link from the images array
        // then set the images src to the corresponding link

	    // If the three images are identical and equal to Juno add 15 credits to the number of credits.
        // Display "winner paid 15"
        
        // If the three images are identical, add 10 credits to the number of credits.
        // Display "winner paid 10"
        
        // If two of the images are identical and equal to Juno, add 5 credits to the number of  credits.
        // Display "winner paid 5"
        
        // If two images are identical, add 2 credits to the number of credits
        // Display "winner paid 2"

        // otherwise display "winner paid 0"


        // if the number of credits is less than or equal to zero, display a button to add credits and continue the game
