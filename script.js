var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('li');
var btn=document.getElementsByClassName('btn');
var title=document.getElementsByTagName('h1')[0];
title.classList.add('coolTitle');

//Check if user typed anything
function inputLength() {
	return input.value.length;
}

//Strike through finished tasks,
function strikeThrough(element) {
	element.addEventListener('click', function () {
		element.classList.toggle('done');
	})
}

//ADD new elements to the list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	strikeThrough(li);
	removeButton(li);
}

//click button to add the typed value to the list
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//press enter to add the typed value to the list
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

list.forEach(function (element) {
	strikeThrough(element);
	removeButton(element);
})

function removeButton(element){
	var remove=document.createElement('button');
	remove.appendChild(document.createTextNode('Remove'));
	element.appendChild(remove);
	remove.classList.add('btn');
	remove.addEventListener('click',function(){
		element.remove();
	})	
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);