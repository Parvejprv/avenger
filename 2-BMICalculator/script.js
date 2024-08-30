const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('btn'); // Updated to select the button with the id "btn"
const resultDiv = document.getElementById('results');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiStatusSpan = document.getElementById('bmi-status');


// Function to calculate the BMI
let calculateBMI = (event) => {
  event.preventDefault(); // Prevent the form from being submitted

  // Get trimmed input values
  const heightValue = heightInput.value.trim();
  const weightValue = weightInput.value.trim();

  // Check if the input fields are empty
  if (heightValue === '' || weightValue === '') {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = '<p style="color: red;">Please enter valid height and weight.</p>';
    return;
  }

  // Convert the input values to numbers
  const height = parseFloat(heightValue);
  const weight = parseFloat(weightValue);

  // Check if inputs are valid numbers
  if (isNaN(height) || isNaN(weight)) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = '<p style="color: red;">Please enter valid height and weight.</p>';
    return;
  }

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Determine the weight category
  let weightCategory = '';
  let weightClass = '';

  if (bmi < 18.6) {
    weightCategory = 'Under Weight';
    weightClass = 'underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    weightCategory = 'Normal Weight';
    weightClass = 'normal';
  } else {
    weightCategory = 'Overweight';
    weightClass = 'overweight';
  }


  // Update the BMI results in result section
  bmiValueSpan.textContent = bmi.toFixed(2);
  bmiStatusSpan.innerHTML = `<span class="${weightClass}">${weightCategory}</span>`;

  // resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Category: ${weightCategory}`;
  resultDiv.classList.remove('hidden');


  // // Clear the input field values
  heightValue = '';
  weightValue = '';
}

// Add an event listener to the form's submit event
document.getElementById('bmi-form').addEventListener('submit', calculateBMI);
