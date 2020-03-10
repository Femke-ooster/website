/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log('hellow :)');

var button = document.querySelector("#darkmode");
var layout = document.querySelector("body");
var layout2 = document.querySelector("nav");
var layout3 = document.querySelector("#overmijsection");
var layout4 = document.querySelector("#projectensection");

function show() {
	layout.classList.toggle("bright");
    layout2.classList.toggle("bright");
}

button.addEventListener("click", show);

function show2() {
    layout3.classList.toggle("bright");
}

button.addEventListener("click", show2);

function show3() {
    layout4.classList.toggle("bright");
}

button.addEventListener("click", show3);
/*localStorage setItem*/