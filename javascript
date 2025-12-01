const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
    if (window.getComputedStyle(nav).display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
});

// Simple form handlers
document.getElementById('leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! We received your request. (Demo)');
});
document.getElementById('smallForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Appointment requested (Demo)');
});

// Accordion
document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const open = panel.style.display === 'block';
        document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
        panel.style.display = open ? 'none' : 'block';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
