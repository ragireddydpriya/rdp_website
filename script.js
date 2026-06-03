const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Back to top functionality - direct scroll
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try smooth scroll as fallback
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  });
});
