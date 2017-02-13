var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');
var pageCounter = 1;

btn.addEventListener('click', function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');

	ourRequest.onload = function(){
		var data = JSON.parse(ourRequest.responseText);
		renderHTML(data);
	};
	ourRequest.send();
	pageCounter++;
	if(pageCounter > 3){
		btn.classList.add('hide-me');
	}
});

function renderHTML(data){
	var htmlString = "";
	data.forEach(function(pet){
		htmlString += "<p>" + pet.name + "is a " + pet.species + " and likes ";
		for(i=0; i<pet.foods.likes.length; i++){
			if(i === 0){
				htmlString += pet.foods.likes[i] + " ";
			} else{
				htmlString += " and " + pet.foods.likes[i];
			}
		};
		htmlString += " and dislikes "
		pet.foods.dislikes.forEach(function(dislike){
			htmlString += dislike + " ";
		});
		htmlString += "</p>";
	});
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

