document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    const main = document.querySelector(".main");
    const mainHeader = document.querySelector(".main__header");

    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("open");
        main.classList.toggle("sidebar-open");
        
        // Toggle visibility of "Hello Evan" text
        if (window.innerWidth <= 768) {
            mainHeader.style.display = sidebar.classList.contains("open") ? "none" : "block";
        }
    });

    // Close the sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 768 && !sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove("open");
            main.classList.remove("sidebar-open");
            mainHeader.style.display = "block";
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Handle window resize
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("open");
            main.classList.remove("sidebar-open");
            mainHeader.style.display = "block";
        }
    });
});