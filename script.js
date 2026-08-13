console.log("!--- Start ---!");
console.log("Guess The Number");


let game_number = Math.floor(Math.random() * 100) + 1; // You can enter your own game number

let user_number = prompt("Enter a number : ");

while(user_number != game_number){
    user_number = prompt("Wrong number guessing");
    console.log("Guess Again");

    if(user_number > game_number){
        console.log("!--- Number is too High ---!");

    }
    else if(usernumber < game_number){
        console.log("!--- Number is Too Low ---!");

    }
}

console.log("Number is Correct");
console.log("!--- Game Over ---!");
