
let counter = 0;
let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.getElementById('reset');
let errorMessage = document.getElementById('error-Message');

// Increment the counter value
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    errorMessage.style.display='none';
});

// Decrement the counter value
decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterValue.innerHTML = counter;
    } else {
        // Show error message
        errorMessage.style.display='block';
    }
});

// Reset the counter to zero
resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.innerHTML = counter;
    errorMessage.style.display='none';
});

