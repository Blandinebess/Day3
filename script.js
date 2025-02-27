// Prompt for user input and use the input in a template string
document.getElementById("inputButton").addEventListener("click", function () {
  let userName = prompt("Please enter your name:");
  if (userName) {
    alert(`Hello, ${userName}! Welcome to our website.`);
  }
});

// Change CSS style of an element
document
  .getElementById("changeStyleButton")
  .addEventListener("click", function () {
    document.getElementById("heading").classList.toggle("highlight");
  });

// Calculate tip based on user input
document.getElementById("mathButton").addEventListener("click", function () {
  let billAmount = parseFloat(prompt("Enter the bill amount:"));
  if (!isNaN(billAmount)) {
    let tip = billAmount * 0.15; // 15% tip
    alert(`A 15% tip would be $${tip.toFixed(2)}`);
  } else {
    alert("Please enter a valid number.");
  }
});

// Example using an object to store user data (email generator)
let cakeOrder = {
  name: "",
  cakeType: "",
  message: "",
  generateEmail: function () {
    return `Hi ${this.name},\n\nYour order for a ${this.cakeType} cake with the message "${this.message}" has been received. We will contact you soon with the details.\n\nThank you!`;
  },
};

// Prompt user for cake order details
function getOrderDetails() {
  cakeOrder.name = prompt("Enter your name:");
  cakeOrder.cakeType = prompt("Enter the type of cake you want:");
  cakeOrder.message = prompt("Enter the message for the cake:");
  alert(cakeOrder.generateEmail());
}

// Run order details function
getOrderDetails();

// Player objects
let playerOne = {
    name: 'Player One',
    score: 0
};

let playerTwo = {
    name: 'Player Two',
    score: 0
};

// Function to roll the dice and update scores
function rollDice() {
    // Generate random rolls between 1 and 6
    playerOne.score = Math.floor(Math.random() * 15) + 1;
    playerTwo.score = Math.floor(Math.random() * 15) + 1;

    // Update the result text
    let resultText = `${playerOne.name} rolled a ${playerOne.score}. ${playerTwo.name} rolled a ${playerTwo.score}. `;

    // Determine the winner
    if (playerOne.score > playerTwo.score) {
        resultText += `${playerOne.name} wins!`;
    } else if (playerTwo.score > playerOne.score) {
        resultText += `${playerTwo.name} wins!`;
    } else {
        resultText += `It's a tie!`;
    }

    // Display the results
    document.getElementById('result').innerText = resultText;
    document.getElementById('playerOneScore').innerText = `${playerOne.name}: ${playerOne.score}`;
    document.getElementById('playerTwoScore').innerText = `${playerTwo.name}: ${playerTwo.score}`;
}

// Function to change the CSS style of the result text
function changeStyle() {
    document.getElementById('result').classList.toggle('highlight');
}

// Event listeners for the buttons
document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('changeStyleButton').addEventListener('click', changeStyle);

// Define CSS style for the highlight class
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
`;
document.head.append(style);
