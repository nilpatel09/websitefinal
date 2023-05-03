function sendFeedback() {
    // Get the values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;
    
    // Check if all fields are filled out
    if (name === "" || email === "" || message === "" || rating === "") {
      alert("Please fill out all fields.");
      return;
    }
    
    // Send the data to a specific email address
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nRating: ${rating}`;
    const emailLink = "mailto:feedback@example.com?subject=Feedback&body=" + encodeURIComponent(body);
    window.location.href = emailLink;
    
    // Clear all fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("rating").value = "";
    
    // Show a rating window
    alert("Thank you for your feedback!");
  }
  