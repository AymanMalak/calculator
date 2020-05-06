// ===============================================================================================================================
// ASSIGNMENT
// ===============================================================================================================================

var pr1 = prompt("enter many number to apply an operation split it with spaces");
var arr1 = pr1.split(" ");
Number(arr1);
var pr2 = prompt("enter calc operation + / - *");
// debugger;
function ccc(arr1, pr2) {
    if (pr2 == "+") {
        var y = 0;
        for (let i = 0; i < arr1.length; i++) {
            // console.log(arr1);
            y += Number(arr1[i]);

        }
        console.log("add");
        console.log(y);
    }
    else if (pr2 == "-") {
        f = Number(arr1[0]);
        for (let i = 1; i < arr1.length; i++) {
            f -= Number(arr1[i]);
        }
        console.log("subtract")
        console.log(f);

    }
    else if (pr2 == "*") {
        y = 1;
        for (let i = 0; i < arr1.length; i++) {

            y *= Number(arr1[i]);

        }
        console.log("multiply");
        console.log(y);
    }
    else if (pr2 == "/") {
        var y = Number(arr1[0]);
        for (let i = 1; i < arr1.length; i++) {
            y /= Number(arr1[i])
            // console.log(arr1);
            parseFloat(y);
        }
        console.log("division")
        console.log(parseFloat(y));
    }
}

ccc(arr1, pr2);
