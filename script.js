document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');

    // Toggle class on click to simulate dropdown opening/closing
    dropdown.addEventListener('click', function() {
        dropdown.classList.toggle('select-open');
    });
});
