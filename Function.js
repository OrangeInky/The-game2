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
        autoBakerOneMultiplier: 1,
        autoBakerOneUpgrade: 0,
        autoBakerOneUpgradeCost: 400,
    }
}

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 6) return Math.round(amount);
    else {
        return mantissa.toFixed(3) + "e" + power;
    }
}



function cookieClick () {
    gamedatas.Basic.cookies += gamedatas.Basic.cookiesPerClick;
    document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
}

function buycookiesPerClick () {
    if (gamedatas.Basic.cookies >= gamedatas.Basic.cookiesPerClickCost) {
        gamedatas.Basic.cookies -= gamedatas.Basic.cookiesPerClickCost;
        gamedatas.Basic.AdditiveClick += 1;
        gamedatas.Basic.cookiesPerClick = gamedatas.Basic.AdditiveClick * gamedatas.Basic.MultiplicativeClick;
        gamedatas.Basic.cookiesPerClickCost *= 1.6;
        document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('cookiesPerClickCost').innerHTML = "Upgrade 1 Cost: " + format(gamedatas.Basic.cookiesPerClickCost);
        document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + format(gamedatas.Basic.cookiesPerClick);
    }
}

function buydoublecookiesPerclick () {
    if (gamedatas.Basic.cookies >= gamedatas.Basic.doublecookiesPerclickCost) {
        gamedatas.Basic.cookies -= gamedatas.Basic.doublecookiesPerclickCost;
        gamedatas.Basic.MultiplicativeClick *= 2;
        gamedatas.Basic.cookiesPerClick = gamedatas.Basic.AdditiveClick * gamedatas.Basic.MultiplicativeClick;
        gamedatas.Basic.doublecookiesPerclickCost *= 5;
        document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('doublecookiesPerclickCost').innerHTML = "Upgrade 2 Cost: " + format(gamedatas.Basic.doublecookiesPerclickCost);
        document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + format(gamedatas.Basic.cookiesPerClick);
    }
}

function buyautoBakerOne () {
    if (gamedatas.Basic.cookies >= gamedatas.autobakers.autoBakerOneCost) {
        gamedatas.Basic.cookies -= gamedatas.autobakers.autoBakerOneCost;
        gamedatas.autobakers.autoBakerOne += 1;
        gamedatas.autobakers.autoBakerOneCost *= 1.06;
        document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('autoBakerOne').innerHTML = gamedatas.autobakers.autoBakerOne;
        document.getElementById('autoBakerOneCost').innerHTML = " " + Math.round(gamedatas.autobakers.autoBakerOneCost);
        document.getElementById('cookiesPerSecond').innerHTML = format(gamedatas.autobakers.autoBakerOne * gamedatas.autobakers.autoBakerOneMultiplier);
    }
}

function buyautoBakerOneUpgrade () {
    if (gamedatas.Basic.cookies >= gamedatas.autobakers.autoBakerOneUpgradeCost) {
        gamedatas.Basic.cookies -= gamedatas.autobakers.autoBakerOneUpgradeCost;
        gamedatas.autobakers.autoBakerOneUpgrade += 1;
        gamedatas.autobakers.autoBakerOneMultiplier *= 2;
        gamedatas.autobakers.autoBakerOneUpgradeCost *= 3;
        document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
        document.getElementById('AutobakerOneUpgrade').innerHTML = gamedatas.autobakers.autoBakerOneUpgrade;
        document.getElementById('UpgradeOneCost').innerHTML = format(gamedatas.autobakers.autoBakerOneUpgradeCost);
        document.getElementById('cookiesPerSecond').innerHTML = format(gamedatas.autobakers.autoBakerOne * gamedatas.autobakers.autoBakerOneMultiplier);
    }
}

function resetgame () {
    var C = confirm("YOU ARE RESETING THE GAME, ARE YOU SURE YOU WANT TO DO THAT?")
    if (C == true) {
        localStorage.clear();
        load()
        location.reload();   
    }
}

var AutoBakerLoop = window.setInterval(function() {
    gamedatas.Basic.cookies += gamedatas.autobakers.autoBakerOne * gamedatas.autobakers.autoBakerOneMultiplier;
    document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
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
    if (typeof savegame.autobakers.autoBakerOne !== "undefined") gamedatas.autobakers.autoBakerone = savegame.autobakers.autoBakerone;
    if (typeof savegame.autobakers.autoBakerOneMultiplier !== "undefined") gamedatas.autobakers.autoBakerOneMultiplier = savegame.autobakers.autoBakerOneMultiplier;
    if (typeof savegame.autobakers.autoBakerOneCost !== "undefined") gamedatas.autobakers.autoBakerOneCost = savegame.autobakers.autoBakerOneCost;
    }
    document.getElementById('cookiesPerClick').innerHTML = "your current cookies per click: " + gamedatas.Basic.cookiesPerClick;
    document.getElementById('cookiesbaked').innerHTML = format(gamedatas.Basic.cookies) + " cookies";
    document.getElementById('doublecookiesPerclickCost').innerHTML = "Upgrade 2 Cost: " + Math.round(gamedatas.Basic.doublecookiesPerclickCost);
    document.getElementById('cookiesPerClickCost').innerHTML = "Upgrade 1 Cost: " + Math.round(gamedatas.Basic.cookiesPerClickCost);
    document.getElementById('autoBakerOne').innerHTML = gamedatas.autobakers.autoBakerOne;
    document.getElementById('autoBakerOneCost').innerHTML = " " + Math.round(gamedatas.autobakers.autoBakerOneCost);
}

function tab(tab) {
    document.getElementById('Cookies').style.display = "none"
    document.getElementById('upgrade').style.display = "none"
    document.getElementById('settings').style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

tab('Cookies');
