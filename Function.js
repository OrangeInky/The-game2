var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = Math.floor(cookies);
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.075,cursors));     
    if(cookies >= cursorCost){                                   
        cursors = cursors + 1;                                  
    	cookies = cookies - cursorCost;                          
        document.getElementById('cursors').innerHTML = cursors;  
        document.getElementById('cookies').innerHTML = cookies;  
    };
    var nextCostCursor = Math.floor(10 * Math.pow(1.075,cursors));
    document.getElementById('cursorCost').innerHTML = nextCostCursor;
};

var farms = 0;

function buyFarm(){
    var farmCost = Math.floor(700 * Math.pow(1.075,farms));
    if(cookies >= farmCost) {
        farms = farms + 1;
        cookies = cookies - farmCost;
        document.getElementById('farms').innerHTML = farms;
        document.getElementById('cookies').innerHTML = cookies;
    };
    var nextCostFarm = Math.floor(700 * Math.pow(1.075,farms));
    document.getElementById('farmCost').innerHTML = nextCostFarm;
};

var citys = 0;

function buyCity() {
    var cityCost = Math.floor(20000 * Math.pow(1.075,citys))
    if (cookies >= cityCost) {
        citys = citys + 1;
        cookies = cookies - cityCost;
        document.getElementById('citys').innerHTML = citys;
        document.getElementById('cookies').innerHTML = cookies;
    };
    var nextCostCity = Math.floor(20000 * Math.pow(1.075,citys));
    document.getElementById('cityCost').innerHTML = nextCostCity;
};

var prestige = 0;

window.setInterval(function(){
	cookieClick(cursors);
    showCPS();
    saving();
}, 1000);

window.setInterval(function(){
    cookieClick(farms * 3 ** (1 + farms/100) * (cursors/30));
    cookieClick(citys * 10 ** (1 + farms/100) * (farms/30));
    endGame();
}, 1000/2); 

function saving() {
    var save = {
        Cookies: cookies,
        Cursors: cursors,
        Farms: farms,
        Citys: citys,
    }
    localStorage.setItem('save',JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.Cookies !== "undefined") cookies = savegame.Cookies;
    if (typeof savegame.Cursors !== "undefined") cursors = savegame.Cursors;
    if (typeof savegame.Farms !== "undefined") farms = savegame.Farms;
    if (typeof savegame.Citys !== "undefined") citys = savegame.Citys;
    console.log("cookies : ", cookies);
    console.log('farms :', farms);
    console.log('cursors :', cursors);
    console.log('citys :', citys);
}

var CPS = 0;

function showCPS() {
    var CPS = cursors + (farms * 3 ** (1 + farms/999) * (cursors/10) * 2) + (citys * 10 ** (1 + farms/999) * (farms/10) * 2);
    document.getElementById('CPS').innerHTML = Math.floor(CPS);
}

function endGame() {
    if (cookies >= 10 ** 20) {
       alert("You have 1e20 of cookies, which is a billion times a billion if you didn't know. This means that you can solve world hunger! With this amount of cookies, noone would be starving anymore! Ps. And this is the end of this game so far, you can reach higher number than this. but the save function is broken anyway, so you can quit this game now!");
    }
}
