/* 
process.stdin.resume()
process.stdin.setEncoding("utf-8")
var stdin_input = "";

process.stdin.on("data", function(input){
    stdin_input += input;
})

process.stdin.on("end", function(){
    main(stdin_input)
})*/
/*  Calculate time performance without console.time
    https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

    // Level 1 (clock change risks)
    currentTime = performance.timing.navigationStart + performance.now();

    // Level 2 (no clock change risks)
    currentTime = performance.timeOrigin + performance.now();

*/
// A good array is the one which doesn't have any same consecutives letters
// Make by Duvan Alberto Andrade Cuenca from Colombia
function goodArray(input){
    const t0 = performance.now();
    const inputs = input.split(" ");
    for(let i = 1; i < inputs.length; ++i){
        process.stdout.write( minimizeInput(inputs[i][0], inputs[i], 1) );
    }
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
}

function minimizeInput(previous, input, index){
    if(index >= input.length)
        return previous;
    if(input[index] !== previous)
        return previous + minimizeInput(input[index], input, index + 1);
    else
        return minimizeInput(previous, input, index + 1);
}

/* input = "3 abb aaab ababa" */
/* output = ab ab ababa */

goodArray("3 abb aaab ababa")