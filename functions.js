
// NUMBER ONE --- CHECKING USERNAMES 

// This function would be ensuring that new players are picking a username that isn't currently in use.
// const because this string wouldn't be reassigned. 
// The function will check an entered username against the string (currentUsernames).
// If the username is available, it will inform the registrant that the username is available & allow them to proceed.
// IF the username is not available, it will inform the registrant that the username is taken and that they need to pick a new username.

const currentUsernames = ["Administrator", "Zanziah"]; 

function isUsernameAvailable(newUsername) {
    if (!currentUsernames.includes(newUsername)) {
        console.log(`${newUsername} is available!`);
        return true; 
    } else { 
        console.log("Username is taken. Please choose a new username.");
        return false; 
    } 
}

// Sample entry -- 
// isUsernameAvailable("Zanziah"); // output is "Username is taken. Please choose a new username."
// isUsernameAvailable("Tinkerbell"); // output is ""


// NUMBER TWO --- ADDING NEW PLAYERS TO DATABASE (well, string)
// const as this variable would not be reassigned. 
// currentUsernames to hold current users. Future would be referencing a database of players. 
// function adds the new players to the current string, but it first checks to make sure that the user is not already in the system,
// such as perhaps in the instance someone double clicks and accidentally treis to register twice.
// If the player is in our current player string, it'll return saying that that user is already in our system. 
// If the player isn't in our current string, it'll add(push) and returns that the user is now in the system. 

const currentPlayers = ["Administrator", "Zanziah"];

function addUser(newUser) { 

    if (!currentPlayers.includes(newUser)) {
        currentPlayers.push(newUser); 
        console.log(`${newUser} is now in our system`)
    } else {
        console.log(`${newUser} was already in our system`)
    }
}

// Sample entry --
// addUser("Charlie");  // output will be "Charlie is now in our system"
// addUser("Zanziah"); // output will be "Zanziah was already in our system" 




// NUMBER THREE --- FUNCTION: ADDING DOG TO EVENT
// dogs would be assigned IDs.
// the function would check to see if a dog's ID was in the string. 
// If the dog was not entered already, it would add it to the list of competitors.
// If the dog was entered already, it would return saying that the dog is already entered to compete. 


const dogConformationParticipants = ["03", "02", "42"];

function enterConformation(newEntry) { 

    if (!dogConformationParticipants.includes(newEntry)) {
        dogConformationParticipants.push(newEntry);
        console.log(`${newEntry} has been entered.`);
    } else {  
        console.log(`${newEntry} is already entered!`);
    }
}

// Sample entry -- 
// enterConformation("03");  // output will be: 03 is already entered! 
// enterConformation("50"); // output will be: 50 has been entered.




// NUMBER FOUR --- CREATING A NEW DOG 
// This function is for creating a new dog. 
// Math.floor(Math.random) is to randomize the breed, size, sex, and color of the dog.


const dogBreeds = ["German Shepherd", "Doberman", "American Eskimo", "Husky"]
const dogSizes = ["small", "medium", "large", "x-large"] 
const dogColor = ["black", "brown", "tri-color", "blue", "red"]
const dogSex = ["male", "female"]

function createFoundationDog(type = dogBreeds, size = dogSizes, color = dogColor) {
   
    const randomSize = dogSizes[Math.floor(Math.random() * dogSizes.length)];

    const randomBreed = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];

    const randomColor = dogColor[Math.floor(Math.random() * dogColor.length)];

    const randomSex = dogSex[Math.floor(Math.random() * dogSex.length)]; 

    const newFoundationDog = { 
        breed: randomBreed,
        size: randomSize,
        color: randomColor,
        sex: randomSex,
    }; 
    
    console.log(`New foundation produced! Your ${newFoundationDog.breed} is a ${newFoundationDog.size} sized ${newFoundationDog.sex} and has a ${newFoundationDog.color} coat!`);
    return newFoundationDog;
}

createFoundationDog(); // output will be completely randomized 



// NUMBER FIVE --- BUYING A DOG 
// This function is for buying a dog on the marketplace. 
// The function has to check the available dogs (playerDogSales). When a player wants to buy a dog, it'll check the id to see 
// if the dog is in the sales list. If it isn't in the dog sales list, it won't find the dog and will say that the dog isn't for 
// sale and to try a different dog. If it is, it'll then check if the user has enough money to cover it (userCoins). 
// If the user has enough to cover the price, it'll let them buy. 
// Otherwise it'll decline the sale. 

const playerDogSales = [ 
    {id: 1, name: "Fee", breed: "German Shepherd", sex: "male", size: "x-large", color: "blue", price: 500},  
    {id: 2, name: "Fi", breed: "German Shepherd", sex: "male", size: "x-large", color: "blue", price: 350}, 
    {id: 3, name: "Fo", breed: "Husky", sex: "male", size: "x-large", color: "black", price: 250}, 
    {id: 4, name: "Fum", breed: "Husky", sex: "male", size: "x-large", color: "white", price: 200}, 
    {id: 5, name: "Giant", breed: "Doberman", sex: "male", size: "x-large", color: "gray", price: 150}, 
    {id: 6, name: "Beanstalk", breed: "American Eskimo", sex: "male", size: "x-large", color: "blue", price: 1000}
]; 

let userMoney = 475; 

function buyNewDog(dogID) {
    const buyingDog = playerDogSales.find(dog => dog.id === dogID);

    if (!buyingDog) {
        console.log("Dog is not for sale. Please try a different dog.");
        return;
    }

    if (userMoney >= buyingDog.price) { 
        userMoney -= buyingDog.price; 
        console.log(`Congrats on your new dog! Enjoy ${buyingDog.name}!`);
    } else {
        console.log("Sorry, you don't have enough coins to purchase this dog."); 
    }
}

// Sample entry -- 
// buyNewDog(4); // output is "Congrats on your new dog! Enjoy Fum!"
// buyNewDog(8); // output is "Dog is not for sale. Please try a different dog."
// buyNewDog(6); // output is "Sorry, you don't have enough coins to purchase this dog."