var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');

btn.addEventListener('click', function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

	ourRequest.onload = function(){
		var data = JSON.parse(ourRequest.responseText);
		renderHTML(data);
	};
	ourRequest.send();
});

function renderHTML(data){
	var htmlString = "";
	data.forEach(function(pet){
		htmlString += "<p>" + pet.name + "is a " + pet.species + "</p>";
	});
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

