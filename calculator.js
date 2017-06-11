var calculator = function() {
    var operateList = [];

    var operationButtonHandler = function() {
        var operateButtonList = document.getElementsByClassName('operate');

        for (var i = 0; i < operateButtonList.length; i++) {
            operateButtonList[i].addEventListener('click', function() {
                var buttonValue = this.innerHTML;
                var displayValue = document.getElementById("display");

                if (buttonValue === "+" || buttonValue === "-" || 
                    buttonValue === "*" || buttonValue === "/" || buttonValue === "%") {
                    displayValue.innerHTML += " " + buttonValue + " ";
                } else {
                    displayValue.innerHTML += buttonValue;
                };
                operateList.push(buttonValue);
            });
        };
    };

    var resultButtonHandler = function () {
        var button = document.querySelector('#result');

        button.addEventListener('click', function() {
            var operateString = operateList.join("");
            var result;

            try {
                result = eval(operateString);
            } catch(error) {
                result = '<span class="error">Invalid operation, try again!</span>';
                document.body.style.backgroundColor = 'red';
                console.log(error.message);
            }
            document.getElementById("display").innerHTML = result;
        });
    };

    var resetButtonHandler = function (event) {
        var button = document.querySelector('#reset');

        button.addEventListener('click', function() {
            operateList = [];
            document.body.style.backgroundColor = 'white';
            document.getElementById("display").innerHTML = "";
        });
    };

    //////////////////////////////
    resetButtonHandler();
    operationButtonHandler();
    resultButtonHandler();

};

calculator();