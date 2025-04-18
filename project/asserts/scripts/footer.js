document.addEventListener("DOMContentLoaded", function () {
  // Update the current year in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Update the last modified date in the footer
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
});
