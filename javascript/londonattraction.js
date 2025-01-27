// Handle Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.getElementById('darkModeToggle');
  
  // Check if the button exists
  if (darkModeButton) {
      darkModeButton.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      });
  }
});

// Handle Booking Form Submission
const bookingForm = document.getElementById('booking-form'); // Ensure the form ID is correct

if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from actually submitting to a server

    // Get values from the form inputs
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const attraction = document.getElementById('attraction').value;
    const otherAttraction = document.getElementById('other-attraction').value;
    const visitDate = document.getElementById('visit-date').value;
    const message = document.getElementById('message').value;

    // Simple validation (ensure all required fields are filled)
    if (fullName === "" || email === "" || attraction === "" || visitDate === "") {
        alert("Please fill out all required fields.");
        return;
    }

    // Display a confirmation message
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Thank you, ${fullName}! Your booking for the ${attraction} has been submitted. We will get back to you soon.`;

    // Log the form data (for demonstration, you can remove this or send it to a server)
    console.log({
        fullName,
        email,
        phone,
        attraction,
        otherAttraction,
        visitDate,
        message
    });

    // Show a simple confirmation message
    alert('Thank you for your booking enquiry! We will get back to you soon.');

    // Optionally, clear the form fields after submission
    bookingForm.reset();
  });
}

// Show the 'Other Attraction' input if "Other" is selected
document.getElementById('attraction').addEventListener('change', function() {
  const otherOption = this.value === 'other';
  document.getElementById('other-label').style.display = otherOption ? 'block' : 'none';
  document.getElementById('other-attraction').style.display = otherOption ? 'block' : 'none';
});
