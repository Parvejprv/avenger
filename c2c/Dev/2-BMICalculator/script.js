const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('btn'); // Updated to select the button with the id "btn"
const resultDiv = document.getElementById('results');

// Function to calculate the BMI
let calculateBMI = (event) => {
  event.preventDefault(); // Prevent the form from being submitted

  // Get trimmed input values
  const heightValue = heightInput.value.trim();
  const weightValue = weightInput.value.trim();

  // Check if the input fields are empty
  if (heightValue === '' || weightValue === '') {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = 'Please enter valid height and weight.';
    return;
  }

  // Convert the input values to numbers
  const height = parseFloat(heightValue);
  const weight = parseFloat(weightValue);

  // Check if inputs are valid numbers
  if (isNaN(height) || isNaN(weight)) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = 'Please enter valid height and weight.';
    return;
  }

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Determine the weight category
  let weightCategory = '';
  if (bmi < 18.6) {
    weightCategory = 'Under Weight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    weightCategory = 'Normal Weight';
  } else {
    weightCategory = 'Overweight';
  }

  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Category: ${weightCategory}`;


  // Clear the input field values
  heightValue = '';
  weightValue = '';
}

// Add an event listener to the form's submit event
document.getElementById('bmi-form').addEventListener('submit', calculateBMI);
