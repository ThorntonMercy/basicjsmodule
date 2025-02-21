# Intro to JS Project 

Assignment was to 1) create a website using HTML, CSS, and bootstrap, and 2) create 4-5 javascript functions related to future features of the website. 

Original Website:
The original website I've chosen to emulate is an old (early 2000's), now dead website called VirtualPups. It was a dog-based game that had breeding, showing, training, and more. The color scheme was blue and white. 

Website: 
1. The website has a functional, responsive header. 
2. The website has a homepage that is fleshed out with an about us section, events table, game highlights, registration form, and FAQ section.

Specific Requirements: 
1. The registration form contains four types of input - three required: username, email, agreement to TOS, and one optional question regarding customer acquisition.
2. The website contains a header image, three images via cards, and use of headings to provide a proper introduction to the website. 
3. The website has four Bootstrap components - modal, badge, cards, and accordion, all themed and working well together.
4. The website contains a styled table with relevant event data.
5. The website has a registration form contained within the modal, and has verification via internal javascript within the HTML.
6. Verified that the website scales correctly and accurately regardless of screen size. 

Bootstrap Components: 
1. I used the modal to contain the registration form so that it doesn't clog up the homepage.
2. I used the badge to add flair and to indicate that the "how did you find us" input on the form was optional.
3. I used the cards to add images and to add little highlights of the game's features -- like upgraded accounts or custom colorful dogs.
4. I used the accordion to add a more visually attractive FAQ section so users could choose to read only questions that they wanted answered.
5. ** I don't count it really as a separate component, but the button for the modal and registration form enable the user to interact with the modal and to submit their information to register. 

Javascript Functions:
1. All functions contain features that would be relevant to the website if it were built.
2. All functions currently work as-written in terminal, and sample data has been run and provided.
3. All functions have comments written as to what they're for / what they're doing inside the .js file.

Function Purposes:
1. Function one would check usernames to detect if a username was already taken. This would be to prevent two people from having the same name.
2. Function two would be adding new players to the list of current players. This would be done during finalizing of registration.
3. Function three would be adding a dog to a Conformation event. This would be specifically for one type of event, as each event may have their own separate requirements. This would be necessary in order for dogs to compete against each other in-game.
4. Function four would be creating a new, randomized, foundation (heritage-less) dog. This would be for new players who would get randomly assigned foundation dogs, and would also be for players who wanted to buy a randomly assigned foundation dog rather than them choosing a specific breed.
5. Function five would be for buying a dog on a player marketplace. It would check to ensure the dog is for sale, what price it was, verify that the player had the funds necessary to purchase, and would execute the sale if it could. This feature would be necessary in order to sell / trade dogs amongst players.
