let input = "";

function press(val){
  input = input === "0" ? val : input + val;
  document.getElementById("display").innerText = input;
}
function clearDisplay(){
  input = "";
  document.getElementById("display").innerText = "0";
}
function del(){
  input = input.slice(0,-1);
  document.getElementById("display").innerText = input || "0";
}
function calc(){
  try{
    input = Function("return " + input)();
    document.getElementById("display").innerText = input;
  }catch{
    document.getElementById("display").innerText = "Error";
    input = "";
  }
}
