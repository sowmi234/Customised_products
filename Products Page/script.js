document.addEventListener('DOMContentLoaded', function() {
    const hidBtn = document.querySelector('.hid-btn');
    const closeBtn = document.querySelector('.close-btn');
    const leftSection = document.querySelector('.left');
    const body = document.body;

    hidBtn.addEventListener('click', function() {
        leftSection.classList.toggle('active');
        body.classList.toggle('active-left');
    });

    closeBtn.addEventListener('click', function() {
        leftSection.classList.remove('active');
        body.classList.remove('active-left');
    });
});
