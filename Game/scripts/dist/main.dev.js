"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//need to: 
//generate html 
//alter it with 5 stages: 
//before the start button is pressed 
//when the start button is pressed  
//when it is clicked 
//when there are two clicked, 
//, when it is a match 
//, when it is not 
//when they have been matched 
//Fix function for when no match, issue is in line 112
//find a way to make green divs unable to be clicked again, remove event listeners when they match?
//when all green show they are done, if, for each array item, the div background is green, then do something
//style with scss
//object class for imgs
var Pic =
/*#__PURE__*/
function () {
  function Pic(id, value, img) {
    _classCallCheck(this, Pic);

    this.id = id;
    this.value = value;
    this.img = img;
  }

  _createClass(Pic, [{
    key: "getHtml",

    /**
     * gets HTML to render pic.
     */
    value: function getHtml() {
      return "<div id=\"".concat(this.id, "\" data-value=\"").concat(this.value, "\" value=\"").concat(this.value, "\" class=\"tile\"><img src=\"").concat(this.img, "\" alt=\"\"></div>");
    }
  }]);

  return Pic;
}();

; //array of each img in the form of objects

var PicArr = [new Pic("jspic1", "js", "./jslogo.png"), new Pic("csspic1", "css", "./csslogo.png"), new Pic("jspic2", "js", "./jslogo.png"), new Pic("html5pic1", "hmtl5", "./html5logo.png"), new Pic("reactpic1", "react", "./react.png"), new Pic("csspic2", "css", "./csslogo.png"), new Pic("html5pic2", "html", "./html5logo.png"), new Pic("reactpic2", "react", "./react.png"), new Pic("bug", "bug", "./bug.png")]; //function generating imgs from the array

PicArr.forEach(function (obj) {
  document.getElementById("images").innerHTML += obj.getHtml();
});
var MatchArr = []; //start button click function showing tiles

var strbtn = document.getElementById("startButton");
strbtn.addEventListener('click', function () {
  var imgtile = document.querySelectorAll("div");
  var img = document.querySelectorAll("img");
  var btnres = document.getElementById("resetButton");
  imgtile.forEach(function (tile) {
    tile.style.opacity = 1; // btnres.style.display = inline; 

    var imgSelected = tile.querySelector("img"); //adding eventlisteners which make the tiles show the image when clicked + add their value to the array

    tile.addEventListener('click', function (e) {
      if (MatchArr[0] === tile.getAttribute("value")) {
        imgSelected.style.opacity = 1;
        console.log(MatchArr);
        var matchingVal = tile.getAttribute("value");
        thereIsAMatch(matchingVal);
      } else if (MatchArr[0] != tile.getAttribute("value") && MatchArr[0]) {
        imgSelected.style.opacity = 1;
        console.log(MatchArr);
        notAMatch();
      } else {
        var _imgSelected = tile.querySelector("img");

        _imgSelected.style.opacity = 1;
        MatchArr.push(tile.getAttribute("value"));
        console.log(MatchArr);
      }
    });
  });
}); //function when there is a match

var thereIsAMatch = function thereIsAMatch(matchingVal) {
  // let matches = MatchArr.pop() 
  document.querySelectorAll('.tile').forEach(function (tileElem) {
    if (tileElem.dataset.value == matchingVal) {
      tileElem.style.backgroundColor = "green";
      var imageInTile = tileElem.querySelector("img");
      imageInTile.style.opacity = 0;
      MatchArr = [];
    } else {
      return;
    }
  });
};

var notAMatch = function notAMatch() {
  document.getElementById("images").querySelectorAll("img").style.opacity = 0;
  MatchArr = [];
};