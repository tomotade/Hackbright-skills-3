console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


// Add mouseover event listener for the Cat Image
let catImage = document.querySelector('#catImage');
catImage.addEventListener('mouseover', function () {
	alert('You are as majestic as a cat!');
});

// Add mouseover event listener for the Rubber Duck Image
let duckImage = document.querySelector('#duckImage');
duckImage.addEventListener('mouseover', function () {
	alert('You quack us up! Keep being awesome!');
});