document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the default form submission

	// Collect form data
	const formData = new FormData(this);

	// Send form data to Formspree
	fetch('https://formspree.io/f/myyrlyjg', {
		method: 'POST',
		body: formData,
		headers: {
			'Accept': 'application/json'
		}
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			alert('Form submitted successfully!');
			// You can redirect or do any other action upon successful submission
		})
		.catch(error => {
			console.error('There was a problem with your fetch operation:', error);
			alert('There was a problem submitting the form. Please try again later.');
		});
});