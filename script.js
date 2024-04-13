// script.js
document.getElementById("projects_button").addEventListener("click", function() {
    var projectsSection = document.getElementById("projects_section");
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById("FaQ_button").addEventListener("click", function() {
    var FaQSection = document.getElementById("FaQ_section");
    if (FaQSection) {
        FaQSection.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById("home_button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById("Login_button").addEventListener("click", function(){
    window.location.href="login.html";
});