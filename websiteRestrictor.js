websitesList = []

let youTubeBool = false
let netflixBool = false
let twitterBool = false
let amazonBool = false
let ebayBool = false

document.getElementById("blockButton").onclick = function() {
    var siteToAdd = document.getElementById("siteText").value;
    websitesList.push(siteToAdd);
    alert(websitesList)
}

document.getElementById("clearButton").onclick = function(){
    websitesList.length = 0
}

if (window.location.hostname in websitesList)
    alert('You are on a blocked site')

document.getElementById("blockYoutube").onclick = function() {
    youTubeBool = true
    while (youTubeBool === true) {
        if (window.location.hostname === "www.youtube.com")
        alert ("You are on a blocked site")
    }
}
document.getElementById("blockNetflix").onclick = function() {
    netflixBool = true
    while (netflixBool === true) {
        if (window.location.hostname === "www.netflix.com")
        alert ("You are on a blocked site")
    }
}
document.getElementById("blockTwitter").onclick = function() {
    twitterBool = true
    while (twitterBool === true) {
        if (window.location.hostname === "www.twitter.com")
        alert ("You are on a blocked site")
    }
}
document.getElementById("blockAmazon").onclick = function() {
    amazonBool = true
    while (amazonBool === true) {
        if (window.location.hostname === "www.amazon.com")
        alert ("You are on a blocked site")
    }
}
document.getElementById("blockEbay").onclick = function() {
    ebayBool = true
    while (ebayBool === true) {
        if (window.location.hostname === "www.ebay.com")
        alert ("You are on a blocked site")
    }
}
document.getElementById("unblockYoutube").onclick = function() {
    youTubeBool = false
}
document.getElementById("unblockNetflix").onclick = function() {
    netflixBool = false
}
document.getElementById("unblockTwitter").onclick = function() {
    twitterBool = false
}
document.getElementById("unblockAmazon").onclick = function() {
    amazonBool = false
}
document.getElementById("unblockEbay").onclick = function() {
    ebayBool = false
}

