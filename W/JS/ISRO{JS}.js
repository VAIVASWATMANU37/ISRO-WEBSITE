document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        "about", "missions", "technology", "future", "achievements",
        "careers", "research", "satellite", "spaceports", "history",
        "launch-vehicles", "international", "gallery", "contact",
        "outreach", "publications", "education", "moon-missions",
        "mars-missions", "deep-space", "weather-satellites",
        "military", "navigation", "telecommunication", "earth-observation",
        "remote-sensing", "environment", "disaster-management", "collaboration",
        "human-spaceflight", "robotics", "space-science", "quantum-tech",
        "artificial-intelligence", "sustainability", "future-exploration"
    ];

    const navList = document.getElementById("nav-list");

    pages.forEach(page => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = `pages/${page}.html`;
        link.textContent = page.replace("-", " ").toUpperCase();
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    console.log("ISRO Website Loaded Successfully!");
});