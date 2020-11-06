//change the display
const displayChange = (val) => { 
    const display = document.getElementById("displayText");
    display.innerHTML += val;
    console.log(display.innerHTML);
}; 

//check if no symbols before adding one
const checkBeforeDisplayChange = (element) => { 
    const symbol = element.dataset.value;
    const display = document.getElementById("displayText");
    if (display.innerHTML.includes("*") || display.innerHTML.includes("/") || display.innerHTML.includes("+") || display.innerHTML.includes("-")){ 
        alert ("Must not contain any other symbols!");
    } else { 
        displayChange(symbol);
    }
}; 

const backbtn = document.getElementById("btndel"); 
backbtn.addEventListener('click', () => { 
    const display = document.getElementById("displayText");
    let newDisplay = display.innerHTML.split("")
    newDisplay.pop();
    let newerDisplay = newDisplay.join("");
    document.getElementById("displayText").innerHTML = newerDisplay;
})

//+/- button adds or removes - sign 
const pmbtn = document.getElementById("btnpm"); 
pmbtn.addEventListener('click', () => { 
    const display = document.getElementById("displayText");

    if(display.innerHTML.indexOf("-") != -1){ 
        const display = document.getElementById("displayText");
        let symbolLocation = display.innerHTML.indexOf("-");
        let splitDisplay = display.innerHTML.split("");
        splitDisplay.splice(symbolLocation, 1);
        let newerDisplay = splitDisplay.join("");
        document.getElementById("displayText").innerHTML = newerDisplay; 
    } else { 
        
        let splitDisplay = display.innerHTML.split("");
        splitDisplay.unshift("-"); 
        let newDisplay = splitDisplay.join(""); 
        document.getElementById("displayText").innerHTML = newDisplay;
    };
});

//decimal point 
const dataval = (val) => { 
    let rightSymbol = val.dataset.value; 
    displayChange(rightSymbol);
}




// C button clears display
const cbtn = document.getElementById("btnc")
 cbtn.addEventListener( 'click', () => { 
    const display = document.getElementById("displayText");
    display.innerHTML = "";
});

// equals button click
const eqbtn = document.getElementById('btneq'); 
 eqbtn.addEventListener('click',() => { 
    const display = document.getElementById("displayText"); 
    let displayString = display.innerHTML; 
    let splitDisplay = displayString.split(""); 
    // filter the display data for symbols
    let operator =  splitDisplay.filter(character => { 
        return (character === "*" || character === "/" || character === "+" || character === "-");
    }); 
    //pop the symbol out and assign it
    let equationSymbol = operator.pop(); 

    //get two numbers 
    let symbolIndex = displayString.indexOf(equationSymbol); 
    let firstNumber = displayString.substr(0, symbolIndex); 
    let secondNumber = displayString.substr(symbolIndex + 1, displayString.length); 




    // perform the calculation 
    let result = (equationSymbol) => { if(equationSymbol == "+"){ 
    return firstNumber + secondNumber; 
    } else if(equationSymbol == "*"){ 
    return firstNumber * secondNumber;
    } else if(equationSymbol == "-"){ 
    return firstNumber - secondNumber; 
    } else { 
    return firstNumber / secondNumber; 
    }
    }; 

    //set display to the answer
    display.innerHTML = result(equationSymbol);
 });
