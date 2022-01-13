const searchBtn = document.querySelector('#btn-search');
const searchInput = document.querySelector('#txt-search');
const loading = document.querySelector('#page-loading');

searchBtn.addEventListener('click', (e) => {
    let regex = /[a-zA-Z\d]/;
    let inpVal = searchInput.value;
    if (!regex.exec(inpVal)) {
        e.preventDefault();
    }
});