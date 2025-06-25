function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Example usage: Attach the function to a button click event
document.getElementById("toTopBtn").addEventListener("click", smoothScrollToTop);