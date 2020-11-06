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
class Pic { 
    constructor(id, value, img){ 
        this.id = id;
        this.value = value;
        this.img = img;
    }; 

    /**
     * gets HTML to render pic.
     */
     getHtml () { 
        return `<div id="${this.id}" data-value="${this.value}" value="${this.value}" class="tile"><img src="${this.img}" alt=""></div>`;
    }   
};

//array of each img in the form of objects
const PicArr = [
                new Pic("jspic1", "js", "./jslogo.png"), 
                new Pic("csspic1", "css", "./csslogo.png"), 
                new Pic("jspic2", "js", "./jslogo.png"), 
                new Pic("html5pic1", "hmtl5", "./html5logo.png"), 
                new Pic("reactpic1", "react", "./react.png"),
                new Pic("csspic2", "css", "./csslogo.png"),
                new Pic("html5pic2", "html", "./html5logo.png"), 
                new Pic("reactpic2", "react", "./react.png"), 
                new Pic("bug", "bug", "./bug.png")
               ];


//function generating imgs from the array
PicArr.forEach((obj) => { 
                         document.getElementById("images").innerHTML += obj.getHtml();
}); 

let MatchArr = [];

//start button click function showing tiles
const strbtn = document.getElementById("startButton") 
strbtn.addEventListener('click', () => { 
    const imgtile = document.querySelectorAll("div");
    const img = document.querySelectorAll("img"); 
    const btnres = document.getElementById("resetButton")
    imgtile.forEach((tile)  => { 
        tile.style.opacity = 1; 
        // btnres.style.display = inline; 
        let imgSelected = tile.querySelector("img")


        //adding eventlisteners which make the tiles show the image when clicked + add their value to the array
        tile.addEventListener('click', (e) => { 
            if(MatchArr[0] === tile.getAttribute("value")) { 
                imgSelected.style.opacity = 1;
                console.log(MatchArr)
                let matchingVal = tile.getAttribute("value")
                thereIsAMatch(matchingVal)


            } else if(MatchArr[0] != tile.getAttribute("value") && MatchArr[0] ){ 
                imgSelected.style.opacity = 1;
                console.log(MatchArr)
                notAMatch()


            } else {
                let imgSelected = tile.querySelector("img")
                imgSelected.style.opacity = 1;
                MatchArr.push(tile.getAttribute("value")); 
                console.log(MatchArr)
            }
        })
    })
}); 


//function when there is a match
const thereIsAMatch = (matchingVal) => { 
    // let matches = MatchArr.pop() 
    document.querySelectorAll('.tile').forEach((tileElem) => { 
        if(tileElem.dataset.value == matchingVal){ 
            tileElem.style.backgroundColor = "green";
            let imageInTile = tileElem.querySelector("img")
            imageInTile.style.opacity = 0
            MatchArr = [];

        } else {
            return;
        }
    })


};

const notAMatch = () => { 
    document.getElementById("images").querySelectorAll("img").style.opacity = 0; 
    MatchArr = [];
};