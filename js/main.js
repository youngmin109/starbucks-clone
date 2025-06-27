const searchhEl = document.querySelector('.search');
const searchInputEl = searchhEl.querySelector('input');

searchhEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchhEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchhEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});