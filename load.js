$(document).ready(function () {
    var pyshell =  require("python-shell");
    var pyexecuter = new pyshell("pycode.py");
    var result = 0;
    var fnumber = 0;
    var snumber = 0;
    var getOp = 0;
    var operation = "add";

    var screen = $("#screen");

    pyexecuter.on("message", function(message){
        updateScreen(message);
    });

    pyexecuter.on("error", function(error){
        console.log(error);
    });

    $(".number").click(function() {
        // console.log($(this).attr("val"));
        var currentNumber = $(this).attr("val");
        if(currentNumber=="="){
            clearScreen()
            pyexecuter.send(operation+" "+fnumber+" "+snumber);
            fnumber = 0;
            snumber = 0;
            getOp = 0;
        }
        else if(currentNumber=="+") {
            getOp=1;
            operation = "add";
            // clearScreen();
        }
        else if(currentNumber=="-") {
            getOp=1;
            operation = "sub";
            // clearScreen();
        }
        else if(currentNumber=="/") {
            getOp=1;
            operation = "div";
            // clearScreen();
        }
        else if(currentNumber=="*") {
            getOp=1;
            operation = "mul";
            // clearScreen();
        }
        else {
            if(getOp==0){
                fnumber = String(fnumber)+String(currentNumber);
                updateScreen(fnumber);
            }
            if(getOp==1){
                snumber = String(snumber)+String(currentNumber);
                updateScreen(snumber);
            }
        }
    });

    clearScreen = () => {
        result = 0;
        screen.html("0");
    };
    clearScreen();

    updateScreen = (result) => {
        stringlength = result.length;
        abc = result.slice(0,1);
        if (abc==0) {
            screen.html(result.slice(1));
        }
        else {
            screen.html(result);
        }
    }


});
