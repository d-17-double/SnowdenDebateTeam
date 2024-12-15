// JavaScript to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value; 
    var errorMessage = document.getElementById('error-message'); 
    
    errorMessage.textContent = '';  

    // Simple validation logic
    if (username === 'snowden' && password === 'snowden') {
        // Successful login, redirect to dashboard page
        window.location.href = 'pages/dashboard.html';  // Redirect to dashboard page
    } else {
        //  show error message
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// For Enter key press (Desktop Support)
let enterKeyPressCount = 0;  // Track how many times Enter key is pressed

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {  // Check if the pressed key is Enter
    enterKeyPressCount++;

    // If Enter is pressed twice in quick succession, go to the dashboard page
    if (enterKeyPressCount === 2) {
      window.location.href = 'pages/dashboard.html';  // Redirect to dashboard
    }
  }
});

// For 3 taps on the screen (for mobile devices)
let tapCount = 0;        // Track how many taps on the screen
let tapTimeout;          // Timeout to reset the tap count

document.body.addEventListener('touchstart', function(event) {
  tapCount++;

  // If the screen is tapped 3 times in quick succession, go to the dashboard
  if (tapCount === 3) {
    window.location.href = 'pages/dashboard.html';  // Redirect to dashboard
  }

  // Reset the counter if no third tap within 500ms
  clearTimeout(tapTimeout);
  tapTimeout = setTimeout(() => {
    tapCount = 0;
  }, 500);  // 500ms delay for detecting 3 taps
});

