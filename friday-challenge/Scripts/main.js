const AlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 


//class to apply to each morse unit
class SymbolMeaning { 
    constructor (value, meaning) { 
        this.value = value; 
        this.meaning = meaning;
    }
    
}


//object of each morse + meaning
const MorseObj = { "a" : ".-",
"b" : "-...",
"c" : "-.-.",
"d" : "-..",
"e" : ".",
"f" : "..-.",
"g" : "--.",
"h" : "....",
"i" : "..",
"j" : ".---",
"k" : "-.-",
"l" : ".-..",
"m" : "--",
"n" : "-.",
"o" : "---",
"p" : ".--.",
"q" : "--.-",
"r" : ".-.",
"s" : "...",
"t" : "-",
"u" : "..-",
"v" : "...-",
"w" : ".--",
"x" : "-..-",
"y" : "-.--",
"z" : "--..", 
" " : "......."
};



//make the h1 innerhtml equal to an empty array 
const display = document.getElementById("disp")
display.innerHTML = [];

const inputVal = document.getElementById('ipt')

const button = document.getElementById("btn")

//button event listener:
button.addEventListener('click', () => { 
    let splitInputVal = inputVal.value.split("");
    console.log(splitInputVal)
    splitInputVal.forEach(letter => {
        let morseVal = MorseObj[letter]
        display.innerHTML += morseVal
        })
    });

//backwards translating
const RevMorseObj = { ".-" : "a" ,
 "-..." : "b" ,
 "-.-." : "c" ,
 "-.." : "d" ,
 "." : "e" ,
 "..-." : "f",
 "--." : "g",
 "...." : "h" ,
 ".." : "i" ,
 ".---" : "j" ,
 "-.-" : "k" ,
 ".-.." : "l" ,
 "--" : "m" ,
 "-." :"n" ,
"---" : "o" ,
 ".--." : "p" ,
 "--.-" : "q" ,
 ".-." : "r" ,
 "..." : "s" ,
"-" : "t" ,
 "..-" : "u" ,
 "...-" : "v" ,
 ".--" : "w" ,
 "-..-" : "x" ,
 "-.--" : "y" ,
 "--.." : "z" , 
 "......." : " "
}; 


//make the h1 innerhtml equal to an empty array 
const displayRev = document.getElementById("dispmorse")
displayRev.innerHTML = [];

const inputValMorse = document.getElementById('iptmorse')

const buttonMorse = document.getElementById("btnmorse")

//button event listener:
buttonMorse.addEventListener('click', () => { 
    let splitInputVal = inputValMorse.value.split("");
    console.log(splitInputVal)
    splitInputVal.forEach(letter => {
        let morseVal = RevMorseObj[letter]
        displayRev.innerHTML += morseVal
        })
    });