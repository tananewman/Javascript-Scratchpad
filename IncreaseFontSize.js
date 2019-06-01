//Send a bunch of web timeouts ot the browser apis
//Stagger these timeouts--basically make it so the first one is 1 second, the second is 2 seconds, etc.
//Make it a loop that increases this stagger
//For every new timeout, make it so the font size we are passing in is increasing by 4

$(".ContentParagraph").click(() => {
    let timeoutInterval = 1000;
    let fontSize = 5;

    // Wrap this in a loop that is going to increment the timeout interval by 100 every time.  The loop is basically going to send these all at once
    for (var i = 0; i < 10; i++){   
         console.log("calling setTimeout with a delay of " + timeoutInterval);
        setTimeout(() => {
            $(".ContentParagraph").css("font-size", fontSize);
            fontSize += 4;           
            console.log("font size: " + fontSize);
        },  timeoutInterval);
        timeoutInterval += 1000;
    }
});

let thing1 = 1000;
let thing2 = 5;

for (var i = 0; i < 100; i++) {
    console.log(thing1);
    thing1 += 1000;
}