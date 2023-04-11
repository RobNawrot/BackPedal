// Get the string from the page. Reverse it, then display it. (Controller Function)
function getValue() {

    /* Hide the alert box. */
    document.getElementById("alert").classList.add("invisible");

    /* Retrieving the string. */
    let userString = document.getElementById("userString").value;

    /* Reversing the string. */
    let revString =  reverseString(userString);

    /* Displaying the reversed string. */
    displayString(revString);

}

// Reverse the string. (Logic Function)
function reverseString(userString) {

    let revString = [];

    /* Reverse a given string using a for-loop. */
    for (let i = userString.length - 1; i >= 0; i--) {
        // revString.push() = userString[i];
        revString += userString[i];
    }

    return revString;

}

// Display the reversed string to the user. (View Function)
function displayString(revString) {

    /* Write a message to the page. */
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revString}`;

    /* Show the alert box. */
    document.getElementById("alert").classList.remove("invisible");

}