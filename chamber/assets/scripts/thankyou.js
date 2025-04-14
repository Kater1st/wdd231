document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("first-name").textContent = params.get("first-name") || "N/A";
    document.getElementById("last-name").textContent = params.get("last-name") || "N/A";
    document.getElementById("email").textContent = params.get("email") || "N/A";
    document.getElementById("mobile").textContent = params.get("mobile") || "N/A";
    document.getElementById("organization").textContent = params.get("organization") || "N/A";
    document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";

    
    document.getElementById("year").textContent = new Date().getFullYear();
});