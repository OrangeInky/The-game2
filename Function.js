var gamedatas = {
    Basic: {
        cookies: 0,
        cookiesPerClick: 1,
        cookiesPerClickCost: 80,
        doublecookiesPerclickCost: 524,
        AdditiveClick: 1,
        MultiplicativeClick: 1,
    },
    autobakers: {
        autoBakerOne: 0,
        autoBakerOneCost: 200,
        autobakerOneMultiplier: 1,
    
    }
}

function cookieClick () {
    gamedatas.Basic.cookies += gamedatas.Basic.cookiesPerClick;
    document.getElementById('cookiesbaked').innerHTML = Math.round(gamedatas.Basic.cookies) + " cookies";
}

function buycookiesPerClick () {
    if (gamedatas.Basic.cookies >= gamedatas.Basic.cookiesPerClickCost) {
        gamedatas.Basic.cookies -= gamedatas.Basic.cookiesPerClickCost;
        gamedatas.Basic.AdditiveClick += 1;
        gamedatas.Basic.cookiesPerClick = gamedatas.Basic.AdditiveClick * gamedatas.Basic.MultiplicativeClick;
        gamedatas.Basic.cookiesPerClickCost *= 1.6;
        document.getElementById('cookiesbaked').innerHTML = Math.round(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('cookiesPerClickCost').innerHTML = "Upgrade 1 Cost: " + Math.round(gamedatas.Basic.cookiesPerClickCost);
        document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + gamedatas.Basic.cookiesPerClick;
    }
}

function buydoublecookiesPerclick () {
    if (gamedatas.Basic.cookies >= gamedatas.Basic.doublecookiesPerclickCost) {
        gamedatas.Basic.cookies -= gamedatas.Basic.doublecookiesPerclickCost;
        gamedatas.Basic.MultiplicativeClick *= 2;
        gamedatas.Basic.cookiesPerClick = gamedatas.Basic.AdditiveClick * gamedatas.Basic.MultiplicativeClick;
        gamedatas.Basic.doublecookiesPerclickCost *= 5;
        document.getElementById('cookiesbaked').innerHTML = Math.round(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('doublecookiesPerclickCost').innerHTML = "Upgrade 2 Cost: " + Math.round(gamedatas.Basic.doublecookiesPerclickCost);
        document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + gamedatas.Basic.cookiesPerClick;
    }
}

var AutoBakerLoop = window.setInterval(function() {
    gamedatas.Basic.cookies += gamedatas.autobakers.autoBakerOne * gamedatas.autobakers.autobakerOneMultiplier;
    document.getElementById('cookiesbaked').innerHTML = Math.round(gamedatas.Basic.cookies) + " cookies";
}, 1000)

var savegameloop = window.setInterval(function() {
    localStorage.setItem("Save", JSON.stringify(gamedatas));
    console.log("saved");
}, 5000)

function load() {
    var savegame = JSON.parse(localStorage.getItem("Save"))
    if (savegame !== null) {
        gamedatas = savegame
    if (typeof savegame.Basic.AdditiveClick !== "undefined") gamedatas.Basic.AdditiveClick = savegame.Basic.AdditiveClick;
    if (typeof savegame.Basic.doublecookiesPerclickCost !== "undefined") gamedatas.Basic.doublecookiesPerclickCost = savegame.Basic.doublecookiesPerclickCost;
    if (typeof savegame.Basic.cookiesPerClickCost !== "undefined") gamedatas.Basic.cookiesPerClickCost = savegame.Basic.cookiesPerClickCost;
    if (typeof savegame.Basic.MultiplicativeClick !== "undefined") gamedatas.Basic.MultiplicativeClick = savegame.Basic.MultiplicativeClick;
    if (typeof savegame.Basic.cookiesPerClick !== "undefined") gamedatas.Basic.cookiesPerClick = savegame.Basic.cookiesPerClick;
    if (typeof savegame.Basic.cookies !== "undefined") gamedatas.Basic.cookies = savegame.Basic.cookies;
    if (typeof savegame.autoBakerOne !== "undefined") gamedatas.autoBakerone = savegame.autoBakerone;
    if (typeof savegame.autobakerOneMultiplier !== "undefined") gamedatas.autobakerOneMultiplier = savegame.autobakerOneMultiplier;
    if (typeof savegame.autoBakerOneCost !== "undefined") gamedatas.autoBakerOneCost - savegame.autoBakerOneCost;
    }
    document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + gamedatas.Basic.cookiesPerClick;
    document.getElementById('cookiesbaked').innerHTML = Math.round(gamedatas.Basic.cookies) + " cookies";
    document.getElementById('doublecookiesPerclickCost').innerHTML = "Upgrade 2 Cost: " + Math.round(gamedatas.Basic.doublecookiesPerclickCost);
    document.getElementById('cookiesPerClickCost').innerHTML = "Upgrade 1 Cost: " + Math.round(gamedatas.Basic.cookiesPerClickCost);
}
