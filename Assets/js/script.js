// GitHub button to GitHub profile
var gitHubBtn = document.querySelector("#GitHub");

// Generate quiz by selecting button to view the first question
gitHubBtn.onclick = function() {
    gitHubPage();
}

function gitHubPage() {
    window.location.assign("https://github.com/StrongMarc")
}