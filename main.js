const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = " ☀️ Light Mode";
}

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.innerHTML = " ☀️ Light Mode";
    } else {
        localStorage.setItem(" darkMode", "disabled");
        darkModeToggle.innerHTML = "🌙 Dark Mode";
    }
});