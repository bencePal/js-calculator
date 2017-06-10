var operateList = [];

var operateButtonHandler = function(event) {
    var buttonValue = this.innerHTML;
    var displayValue = document.getElementById("display");
    //console.log(buttonValue)
    operateList.push(buttonValue)
    if (buttonValue === "+" || 
        buttonValue === "-" || 
        buttonValue === "*" || 
        buttonValue === "/" || 
        buttonValue === "%")
        {
        displayValue.innerHTML = displayValue.innerHTML + " " + buttonValue + " ";
    } else {
        displayValue.innerHTML = displayValue.innerHTML + buttonValue;
    }
    var operateString = operateList.join("");

    return operateString
}

var operateButtonList = document.getElementsByClassName('operate');

for (var i = 0; i < operateButtonList.length; i++) {
    operateButtonList[i].addEventListener('click', operateButtonHandler);
}


//////////////////////////////////////////

var resultButtonHandler = function (event) {
    var operateString = operateButtonHandler();
    var result = eval(operateString)
    document.getElementById("display").innerHTML = result;
};

var button = document.querySelector('#result');
button.addEventListener('click', resultButtonHandler);


//////////////////////////////////////////

var resetButtonHandler = function (event) {
    operateList = [];
    document.getElementById("display").innerHTML = "0";
};


var button = document.querySelector('#reset');
button.addEventListener('click', resetButtonHandler);

//////////////////////////////////////////