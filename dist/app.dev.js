"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const scrollFunc = (target) => { 
// }
var projectsDataArr = [["Calculator", "A calculator you can use in a web browser!", "img"], ["Morse Code Translator", "A page which translates your input into Morse Code!", "img"], ["Match the Picture Game", "A game where you have to match the picutres, watch out for the bug!", "img"]];

var ProjectCard = function ProjectCard(title, description, img) {
  _classCallCheck(this, ProjectCard);

  this.title = title;
  this.description = description;
  this.img = img;
};

;
var projectsObjArr = projectsDataArr.map(function (project) {
  return new ProjectCard(project[0], project[1], project[2]);
});

var projects = function projects() {
  document.querySelector("#contThree").innerHTML = "";
  projectsObjArr.forEach(function (card) {
    var cardhtml = "</div>\n        <div class=\"textOverImage\">\n         <img src=\"".concat(card.img, "\"alt=\"\" class=\"projectsImage\" data-aos=\"flip-left\"> \n         <p class=\"imageText\">").concat(card.title, "</p>\n         <p>").concat(card.description, "</p>\n      </div>");
    console.log(cardhtml);
    document.querySelector("#contThree").innerHTML += cardhtml;
  });
};

projects(); //to do list: 
//debug with andy 
//onclick effects for scroll: 
//make universal scroll function and allow passing of parameters