let userInput = 0

// Connect "Positive?" button to "random" function
document.getElementById('button').addEventListener('click', comparison)

function comparison () {
  // Get user input and convert to an integer
  userInput = document.getElementById('numbers').value
  userInput = parseInt(userInput)

  // Check if the userInput is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
