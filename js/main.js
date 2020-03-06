var request = new XMLHttpRequest();
var mag_types = document.querySelector(".mag_types")
var mag_stats = document.querySelector(".mag_stats")
var points_res = document.querySelector("#pointsResult");

var magikarp_data = {
    types: [],
    base_stat: []
}


request.open("GET", "https://pokeapi.co/api/v2/pokemon/magikarp");

request.onload = function(){
    var data = JSON.parse(this.response);
    var type_iteration = 0
    while(type_iteration < data.types.length){
        var p = document.createElement("p")
        p.innerHTML = data.types[type_iteration].type.name
        magikarp_data.types.push(data.types[type_iteration].type.name)
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
        magikarp_data.base_stat.push(data.stats[i].base_stat)
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
        comparison_types.innerHTML = ''
        while(type_iteration < data.types.length){
            var p = document.createElement("p")
            p.innerHTML = data.types[type_iteration].type.name
            comparison_types.appendChild(p)
            type_iteration++

        }
        comparison_stats.innerHTML = ''
        comparison_pic.src = data.sprites.front_default
        var i = 0
        var points = 0
        while(i < data.stats.length) {
            var p = document.createElement('h4')
            p.innerHTML = data.stats[i].stat.name
            comparison_stats.appendChild(p)
            
            var p2 = document.createElement('p')
            p2.innerHTML = data.stats[i].base_stat
            comparison_stats.appendChild(p2)
            if(data.stats[i].base_stat < magikarp_data.base_stat[i]){
                points += 1
            }else if(data.stats[i].base_stat > magikarp_data.base_stat[i]){
                points -= 1
            }

            i++
        }
        points_res.innerHTML = points
    
    }

    request.send();
})




/*
Straight out of Github
Function moves the background while scrolling, also scaling it all whilst making it move smoother
*/

function calcBG() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var imageHeight = 332;
    var imageWidth = 590;
    var heightScale = windowHeight / imageHeight;
    var scroll = (window.pageYOffset) / (document.body.clientHeight - windowHeight);
    var pushDistance = -scroll * (windowHeight/5);
    if (windowWidth > imageWidth * heightScale) {
        document.body.style.background = 'url("img/water.jpg") 0px ' + pushDistance + 'px / 100vw 120vh no-repeat fixed';
    } else {
        document.body.style.background = 'url("img/water.jpg") 0px ' + pushDistance + 'px / auto 120vh no-repeat fixed';
    }
}

window.addEventListener('scroll', calcBG);
window.addEventListener('resize', calcBG);
calcBG();