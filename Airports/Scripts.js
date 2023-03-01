let apiUrl = "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json";

let display = document.getElementById("airName");
// Create Undefiened String //
let airName = "";
fetch(apiUrl)
/// Convert res to Json Object //
.then((res) => res.json())
.then((Data) => {
    console.log(Data);
    for(let i=0; i<Data.length; i++){
        airName += Data[i].name +"<br>";
    }
   // console.log(arrName);
   //  Presenting the Result  ///
    display.innerHTML =airName;
    });