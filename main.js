//This function is called from the html file everytime a value is entered or a unit is changed.

 const convertFunction = () =>{ //Demonstrate the use of arrow function () => instead of function()
    //Convert from Meter
    //.toFixed() method allows rounding off a number to the nearest decimal
    if (document.getElementById("oldUnit").value == "meter") {
        if (document.getElementById("newUnit").value == "meter") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue * 1;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2); //Assigns the result to the element with id=answer

        } else if (document.getElementById("newUnit").value == "foot") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue * 3.28;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "inch") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue * 3.28 *12;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "yard") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue * 3.28 / 3;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);
        };
        //Convert from Foot
    } else if (document.getElementById("oldUnit").value == "foot") {
        if (document.getElementById("newUnit").value == "meter") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue / 3.28;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "foot") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue / 1;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "inch") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue * 12;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "yard") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue / 3;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);
        };
       //convert from Yard
    }else if (document.getElementById("oldUnit").value == "yard") {
        if (document.getElementById("newUnit").value == "meter") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue * 3 / 3.28;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "foot") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue * 3;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "inch") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue * 3 * 12;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "yard") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue  / 1;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);
        };
       //Convert from Inch
    }else if (document.getElementById("oldUnit").value == "inch") {
        if (document.getElementById("newUnit").value == "meter") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue / 12 / 3.28;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "foot") {
            let newValue = document.getElementById("oldValue").value
            let result = newValue / 12;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);

        } else if (document.getElementById("newUnit").value == "inch") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue /1;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);
            
        } else if (document.getElementById("newUnit").value == "yard") {
            let newValue = document.getElementById("oldValue").value;
            let result = newValue / 12 / 3;
            // return result;
            document.getElementById("answer").value  = result.toFixed(2);
        };
       
    } else{
        alert(" Please enter / select valid value and units");
    }
};
console.log();
     /* let oldValue = document.getElementById("oldValue").value;
    // let oldUnit = document.getElementById("oldUnit").value;
    // let newUnit = document.getElementById("newUnit").value; */

   
