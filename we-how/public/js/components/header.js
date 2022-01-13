const btnAcc = document.getElementById('btnAcc');
const btnSignin = document.getElementById('btnSignin');
const btnSignup = document.getElementById('btnSignup');
const accDropdown = document.getElementById('accDropdown');
const links = document.querySelectorAll('.nav__link');

(() => {
    //TODO: Set
    const pageLocation = window.location.href;
    let router = pageLocation.split('/')[3];
    links.forEach(link => {
        if (link.href.split('/')[3] === router) {
            link.classList.add('active');
        }
    });
})();
(() => {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(link => {
                link.classList.remove('active');
            });
            history.pushState({}, "", link);
            link.classList.add('active');
        });
    });
});

btnAcc.addEventListener('click', () => {
    btnAcc.classList.add('active');
    showElem(accDropdown);
});
document.addEventListener('click', (e) => {
    if (e.target.id !== 'btnAcc') {
        hideElem(accDropdown);
        btnAcc.classList.remove('active');
    }
})

function showElem(element) {
    element.style.display = 'block';
}
function hideElem(element) {
    element.style.display = 'none';
}