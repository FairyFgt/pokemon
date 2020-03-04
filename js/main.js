var request = new XMLHttpRequest();
var mag_types = document.querySelector(".mag_types")
var mag_stats = document.querySelector(".mag_stats")

request.open("GET", "https://pokeapi.co/api/v2/pokemon/magikarp");

request.onload = function(){
    var data = JSON.parse(this.response);

    var type_iteration = 0
    while(type_iteration < data.types.length){
        var p = document.createElement("p")
        p.innerHTML = data.types[type_iteration].type.name
        mag_types.appendChild(p)
        type_iteration++
    }

    var i = 0

    while(i < data.stats.length) {
        var p = document.createElement('h4')
        p.innerHTML = data.stats[i].stat.name
        mag_stats.appendChild(p)
        
        var p2 = document.createElement('p')
        p2.innerHTML = data.stats[i].base_stat
        mag_stats.appendChild(p2)

        i++
    }
}

request.send();

var poke_list = new XMLHttpRequest();
poke_list.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=99999");

poke_list.onload = function(){
    var data = JSON.parse(this.response)
    var i = 0
    while(i < data.results.length){
        var option = document.createElement("option")
        option.innerHTML = data.results[i].name
        poke_select.appendChild(option)

        i++
    }

}

poke_list.send()

var comparison_types = document.querySelector(".comparison_types")
var comparison_stats = document.querySelector(".comparison_stats")
var comparison_pic = document.querySelector(".comparison_pic")

document.querySelector("#poke_select").addEventListener("input", function(){
    var pokemon = this.value
    
    var request = new XMLHttpRequest();
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon);
    request.onload = function(){
        var data = JSON.parse(this.response);
        var type_iteration = 0
        while(type_iteration < data.types.length){
            var p = document.createElement("p")
            p.innerHTML = data.types[type_iteration].type.name
            comparison_types.appendChild(p)
            type_iteration++

        }
        comparison_stats.innerHTML = ''
        comparison_pic.src = data.sprites.front_default
        var i = 0

        while(i < data.stats.length) {
            var p = document.createElement('h4')
            p.innerHTML = data.stats[i].stat.name
            comparison_stats.appendChild(p)
            
            var p2 = document.createElement('p')
            p2.innerHTML = data.stats[i].base_stat
            comparison_stats.appendChild(p2)

            i++
        }
    }

    request.send();
})

var comparison_points = new XMLHttpRequest();
comparison_points.open("GET", "https://pokeapi.co/api/v2/pokemon");

comparison_points.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data)
    var i = 0
   while(i < data.)

}