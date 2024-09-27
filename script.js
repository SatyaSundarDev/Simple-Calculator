const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            // Clear the display
            displayValue = '';
        } else if (value === 'DEL') {
            // Delete the last character
            displayValue = displayValue.slice(0, -1);
        } else if (value === '=') {
            // Evaluate the expression
            try {
                displayValue = eval(displayValue).toString();
            } catch (error) {
                displayValue = 'Error';
            }
        } else {
            // Append the clicked value to the display
            displayValue += value;
        }

        // Update the display
        display.value = displayValue;
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (
        (e.key >= '0' && e.key <= '9') ||
        ['+', '-', '*', '/', '.', '%'].includes(e.key)
    ) {
        // Append the pressed key to the display
        displayValue += e.key;
        display.value = displayValue;
    } else if (e.key === 'Enter') {
        // Evaluate the expression
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
        display.value = displayValue;
    } else if (e.key === 'Backspace') {
        // Delete the last character
        displayValue = displayValue.slice(0, -1);
        display.value = displayValue;
    } else if (e.key === 'Escape') {
        // Clear the display
        displayValue = '';
        display.value = displayValue;
    }
});
