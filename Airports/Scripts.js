let apiUrl = "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json";

let display = document.getElementById("airName");
let arrName = [];
fetch(apiUrl)
.then((res) => res.json())
.then((Data) => {
    Data.forEach(element => {
        let Name = element.name;
        arrName.push(Name);
    });
    console.log(arrName);
    arrName.map()
    display.innerHTML=`<p>${arrName}</p>`;
});

