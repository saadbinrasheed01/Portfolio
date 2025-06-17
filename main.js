// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Cursor glow
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.pageX + 'px';
  glow.style.top = e.pageY + 'px';
  glow.style.opacity = 1;
});
document.addEventListener('mouseout', () => glow.style.opacity = 0);

// Modal handling
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
