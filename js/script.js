const btn = document.getElementsByClassName('button')[0];
const body = document.body;
const div = document.getElementsByClassName('divColor')[0];

btn.addEventListener('click', () => {
    body.classList.toggle('backG');
    div.classList.toggle('color');
    btn.classList.toggle('color');
});