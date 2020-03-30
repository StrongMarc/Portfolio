// Portfolio button to view portfolio page
var portfolioBtn = document.querySelector("#portfolio");

// Generate GitHub profile by selecting button to view 
portfolioBtn.onclick = function() {
    portfolioPage();
}

//https://www.w3schools.com/jsref/met_loc_assign.asp
function portfolioPage() {
    window.location.assign("./portfolio.html")
}

// GitHub button to GitHub profile
var gitHubBtn = document.querySelector("#GitHub");

// Generate GitHub profile by selecting button to view 
gitHubBtn.onclick = function() {
    gitHubPage();
}

function gitHubPage() {
    window.location.assign("https://github.com/StrongMarc")
}

// LinkedIn button to LinkedIn profile
var linkedInBtn = document.querySelector("#linkedIn");

// Generate LinkedIn profile by selecting button to view 
linkedInBtn.onclick = function() {
    linkedInPage();
}

function linkedInPage() {
    window.location.assign("https://linkedin.com/in/marc-strong-3892548")
}
