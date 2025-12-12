let txtInput = document.querySelector("#txtInput");
let btnReplaceAll = document.querySelector("#btnReplaceAll");
let txtOutput = document.querySelector("#txtOutput");

btnReplaceAll.addEventListener("click", function(){
    // logic here
    let str1 = txtInput.value;
    let output = str1.replaceAll(" ","");
    console.log(output);
    txtOutput.innerText = output;
});