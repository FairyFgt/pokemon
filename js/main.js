var request = new XMLHttpRequest();

request.open("GET", "https://pokeapi.co/api/v2/pokemon/4");

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data.name);
}

request.send();